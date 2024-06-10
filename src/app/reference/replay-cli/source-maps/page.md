---
title: Uploading source maps
---

Adding a build step has lots of benefits: performance, security, new language features. One of the downsides though is that the compiled code can be obfuscated and difficult to debug.

Source maps exist to try and preserve the original debugging experience as best as possible.

## Upload Process

For production use cases where sourcemaps may not be exposed publicly, we provide tooling for preemptively uploading sourcemaps to our servers so that when replays are made, they can make use of these maps and you can still debug the recordings with the original source code. We provide both a CLI command and a Webpack plugin to make integrating this into your build process as easy as possible.

### API Keys

We recommend using the `REPLAY_API_KEY` environment variable to set up the API for use in all of our following examples, but each also allows passing the key directly as an argument. API Keys are available in the [Team Settings](/reference/ci-workflows/generate-api-key) modal.

**Be sure to add the `REPLAY_API_KEY` for the workspace to the build and deployment settings for your project**, such as in Vercel or Github Actions - it needs to be available during the build step in order for the upload logic to upload successfully.

## CLI

You can upload source maps using the `replayio upload-source-maps` command in the [Replay CLI](/reference/replay-cli/commands).

The simplest usage will be running the following after your production JS build has finished.

```sh
npx replayio upload-source-maps --group <Version or SHA> <buildOutputDir>
```

You must ensure that your build tool is configured to output sourcemaps into the build directory you provide.

### CLI Options

The `replayio upload-source-maps` command has options available to help locate and filter which sourcemaps are available. Currently, those options are:

```bash
-g, --group <name>       The name to group this source map into, e.g. A commit SHA or release version.
-x, --extensions <exts>  A comma-separated list of file extensions to process; default ".js,.map"
-i, --ignore <pattern>   Ignore files that match this pattern
--root <dirname>         The base directory to use when computing relative paths
```

## Webpack

We have a Webpack plugin that can upload sourcemaps, available on NPM as [`@replayio/sourcemap-upload-webpack-plugin`](https://npmjs.com/package/@replayio/sourcemap-upload-webpack-plugin).

To use the plugin, edit your `webpack.config.js` to include a new entry in the `plugins` array at the top level of the file, e.g.

```js
const ReplaySourceMapUploadWebpackPlugin = require('@replayio/sourcemap-upload-webpack-plugin')

module.exports = {
  // Ensure that Webpack has been configured to output sourcemaps.
  devtool: 'source-map',
  // ...
  plugins: [
    // Enable our plugin to upload the sourcemaps once the build has completed.
    // This assumes NODE_ENV is how you distinguish production builds. If that
    // is not the case for you, you will have to tweak this logic.
    process.env.NODE_ENV === 'production'
      ? [
          new ReplaySourceMapUploadWebpackPlugin({
            filepaths: ['outputDir/'],
            group: '<A unique version string or git SHA>',
          }),
        ]
      : [],
  ],
}
```

### Webpack Upload Plugin Options

The Webpack plugin accepts several options to configure searching for sourcemaps and build artifacts on disk, excluding them from upload, and configuring deletion.

```ts
// Exported from `@replayio/sourcemap-upload`
export interface UploadOptions {
  /**
   * The files/directories to search for sourcemaps. All files that match the
   * 'extensions' list and fail to match 'ignore' will be searched for
   * sourcemap JSON or `//#sourceMappingURL=` coments in order to find pairs
   * of generated-file + sourcemap, and the sourcemap will be uploaded.
   */
  filepaths: Array<string> | string
  /**
   * To allow for tracking and browsing of maps that have been uploaded, we
   * require uploaded sourcemaps to have an overall group name associated with
   * them. This could for instance be a version number, or commit hash.
   */
  group: string
  /**
   * The API key to use when connecting to Replay's servers.
   * Defaults to `process.env.REPLAY_API_KEY`.
   */
  key?: string
  /**
   * Run all of the local processing and searching for maps, but skip uploading them.
   */
  dryRun?: boolean
  /**
   * Delete all found sourcemap files after they have been uploaded.
   */
  deleteAfterUpload?: boolean
  /**
   * If sourcemaps can't be matched to generated files by their sourceMappingURL, try matching by filenames on disk
   */
  matchSourcemapsByFilename?: boolean
  /**
   * The set of file extensions to search for sourcemap-related data.
   * Defaults to [".js", ".map"].
   */
  extensions?: Array<string>
  /**
   * The set of pattern for files to ignore when searching for sourcemap-related data.
   */
  ignore?: Array<string>
  /**
   * Set the directory that relative paths should be computed with respect to.
   * The relative path of sourcemaps is included in the uploaded entry, and will be
   * visible in the UI, so this can be used to strip off unimportant directories in
   * the build path. Defaults to `process.cwd()`.
   */
  root?: string
  /**
   * A callback function that will be called with log messages.
   */
  log?: LogCallback
  /**
   * URL of the Replay server to upload to. Defaults to `https://api.replay.io`.
   */
  server?: string
  /**
   * The number of concurrent uploads to perform. Defaults to 25.
   */
  concurrency?: number
  /**
   * A string to append to the User-Agent header when making requests to the Replay API.
   */
  userAgentAddition?: string
}

// Exported from `@replayio/sourcemap-upload-webpack-plugin`
export interface PluginOptions extends UploadOptions {
  // Choose how verbose the plugin should be when logging.
  logLevel?: 'quiet' | 'normal' | 'verbose'

  // Normally failure to upload the sourcemaps will result
  // in a build error. If you'd like to simply warn instead
  // of failing in this case, you can set this to true.
  warnOnFailure?: boolean
}
```

### Sourcemap Visibility in Production

Keep in mind that your build output will now contain sourcemaps, and so your app source code will be viewable in the browser devtools for anyone viewing your production site.

If this is a concern for you, you can keep your sourcemaps hidden from end users by deleting them from the build output directory. The Replay Webpack plugin has a `deleteAfterUpload` option to allow this. You can also configure Webpack's sourcemap generation settings to use [`devtool: "hidden-source-map"`](https://webpack.js.org/configuration/devtool/#production), which skips adding a `sourceMappingURL` reference to the generated JS build artifacts to keep the browser from trying to download and view sourcemaps. If you enable that, you should also enable the Webpack plugin's `matchSourcemapsByFilename` option, to ensure the plugin still correctly finds the right sourcemaps:

```js
const ReplaySourceMapUploadWebpackPlugin = require('@replayio/sourcemap-upload-webpack-plugin')

module.exports = {
  // Ensure that Webpack has been configured to output sourcemaps,
  // but without the `sourceMappingURL` references in buidl artifacts.
  devtool: 'hidden-source-map',
  // ...
  plugins: [
    // Enable our plugin to upload the sourcemaps once the build has completed.
    // This assumes NODE_ENV is how you distinguish production builds. If that
    // is not the case for you, you will have to tweak this logic.
    process.env.NODE_ENV === 'production'
      ? [
          new ReplaySourceMapUploadWebpackPlugin({
            filepaths: ['outputDir/'],
            group: '<A unique version string or git SHA>',
            deleteAfterUpload: true,
            matchSourcemapsByFilename: true,
          }),
        ]
      : [],
  ],
}
```

The Replay Webpack plugin uploads sourcemaps to the workspace associated with your API key, and automatically matches up sourcemaps with the build artifacts in a recorded replay when you debug it. This way, you can avoid having sourcemaps visible on your production site, but still debug replays with the original source code.

### NextJS

NextJS uses Webpack internally, so the plugin above will also be used for NextJS, but the config that needs editing is `next.config.js` instead. NextJS's [own documentation](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) is a good place to start and shows how to add Webpack plugins to your build process. You'll also need to enable [production sourcemaps](https://nextjs.org/docs/advanced-features/source-maps), so you'll end up with the following additional config in your `next.config.js` file:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,

  webpack: (config, { isServer, dev, buildId }) => {
    /** @type {import('webpack').Configuration} */
    const webpackConfig = config

    // This configures Webpack to generate sourcemaps, but not include
    // the `sourceMappingURL` reference in generated JS bundles.
    // This keeps the sourcemaps hidden from users, but still available
    webpackConfig.devtool = 'hidden-source-map'

    if (!dev && !isServer) {
      /** @type {import('@replayio/sourcemap-upload-webpack-plugin').PluginOptions} */
      const uploadOptions = {
        // If you've configured a custom build directory, this should point to that directory.
        filepaths: ['.next/'],
        // You can use `buildId` here to differentiate sourcemaps between different builds.
        group: buildId,

        // Don't upload or delete server-related sourcemaps
        ignore: ['**/server/**'],
        // You can configure the plugin to automatically delete sourcemaps from the local build
        // output folder after they've been uploaded, to keep them from being visible to users.
        deleteAfterUpload: true,
        // When `devtool: "hidden-source-map"` is used, the upload plugin can't match up
        // sourcemaps with bundles automatically because there's no `sourceMappingURL`.
        // Set this to true to match them up by similar filenames instead.
        matchSourcemapsByFilename: true,
        // The plugin will look for the API key as `process.env.REPLAY_API_KEY` by default.
        // You can provide it here if it's stored in a different environment variable.
        // key: process.env.REPLAY_API_KEY,
      }
      config.plugins.push(new ReplaySourceMapUploadWebpackPlugin(uploadOptions))
    }

    return config
  },
}

module.exports = nextConfig
```

As mentioned, NextJS's `buildId` can be useful, but please [see their docs](https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id) to ensure verify if it is a good fit for your application.

## Debugging problems

Each of these approaches will log the sourcemaps as they are uploaded so that you can validate that all of the files you expect are being detected. They each also have a verbose mode, either `logLevel: "verbose"` for the JS plugins, and `--verbose` for the CLI.

If you're feeling particularly adventurous, you can also run these with the `DEBUG=recordreplay:sourcemap-upload` environment variable set to enable tons of debug logging, though that will likely mostly be useful to pass along to us to work with you on any issues you may face.
