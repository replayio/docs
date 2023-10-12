# Uploading Source Maps

Adding a build step has lots of benefits: performance, security, new language features. One of the downsides though is that the compiled code can be obfuscated and difficult to debug. 

Source maps exist to try and preserve the original debugging experience as best as possible.

## Upload Process

For production use cases where sourcemaps may not be exposed publicly, we provide tooling for preemptively uploading sourcemaps to our servers so that when recordings are made, they can make use of these maps. We provide both a CLI command, and a Webpack plugin to make integrating this into your build process as easy as possible.

<aside>
👉 We recommend **not using compression** during the minification process. Mangling is fine, but compression can cause issues with how source maps are interpreted by Replay.

</aside>

### API Keys

We recommend using the `RECORD_REPLAY_API_KEY` environment variable to set up the API for use in all of our following examples, but each also allows passing the key directly as an argument. API Keys are available in the [Team Settings](Team%20Settings%20a2f6890352d540e0b114910a9e4c9ff7.md) modal. 

### CLI

You can upload source maps using the `upload-sourcemaps` command in the replay CLI `@replayio/replay`.

The simplest usage will be running the following after your production JS build has finished

`npx @replayio/replay upload-sourcemaps --group <Version or SHA> <buildOutputDir>`

You must ensure that your build tool is configured to output sourcemaps into the build directory you provide.

### Webpack

The `sourcemap-upload` Webpack plugin is available on npm at `@replayio/sourcemap-upload-webpack-plugin` and you can explore the available options at [sourcemap-upload-webpack-plugin](https://github.com/replayio/replay-cli/tree/main/packages/sourcemap-upload-webpack-plugin) and [sourcemap-upload](https://github.com/replayio/replay-cli/tree/main/packages/sourcemap-upload).

The simplest usage will be to edit your `webpack.config.js` to include a new entry in the `plugins` array at the top level of the file, e.g.

```jsx
const ReplaySourceMapUploadWebpackPlugin = require("@replayio/sourcemap-upload-webpack-plugin");
module.exports = {
  // ...
  // Ensure that Webpack has been configured to output sourcemaps.
  devtool: "source-map",
  // ...
  plugins: [
    // Enable our plugin to upload the sourcemaps once the build has completed.
    // This assumes NODE_ENV is how you distinguish production builds. If that
    // is not the case for you, you will have to tweak this logic.
    process.env.NODE_ENV === "production" 
      ? [new ReplaySourceMapUploadWebpackPlugin({
          filepaths: ["outputDir/"],
          group: "<A unique version string or git SHA>"
        })]
      : [],
  ],
  // ...
}
```

Keep in mind that your build output will now contain sourcemaps, so you should take care to ensure that these maps aren't also exposed on your production site.

### NextJS

NextJS uses Webpack internally, so the plugin above will also be used for NextJS, but the config that needs editing is `next.config.js` instead. NextJS's [own documentation](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) is a good place to start and shows how to add Webpack plugins to your build process. You'll also need to enable  [production sourcemaps](https://nextjs.org/docs/advanced-features/source-maps), so you'll end up with the following additional config in your `next.config.js` file:

```jsx
module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (config, { buildId, dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new ReplaySourceMapUploadWebpackPlugin({
          // If you've configured a custom build directory, this should
          // point to that directory.
          filepaths: [".next/"],
          // Potentially the 'buildId' argument here could be used.
          group: "<A unique version string or git SHA>",
        })
      );

      // 'productionBrowserSourceMaps' will output your sourcemaps
      // into the build directory, which can expose them from your
      // production server as well, so you will likely want to delete
      // the .map files once they have been uploaded.
      config.plugins.push((compiler) =>
        compiler.hooks.afterEmit.tapPromise("DeleteSourceMaps", () =>
          findAndDeleteSourceMaps()
        )
      );
    }
    return config;
  },
};
```

<aside>
💡 In most cases it’s safe to not include the `group` field.

</aside>

As mentioned, NextJS's `buildId` can be useful, but please [see their docs](https://nextjs.org/docs/api-reference/next.config.js/configuring-the-build-id) to ensure verify if it is a good fit for your application. 

<aside>
💡 If you are serving your site via Vercel, [see their docs](https://vercel.com/docs/environment-variables) for information on setting up the `RECORD_REPLAY_API_KEY` environment variable.

</aside>

### Debugging problems

Each of these approaches will log the sourcemaps as they are uploaded so that you can validate that all of the files you expect are being detected. They each also have a verbose mode, either `logLevel: "verbose"` for the JS plugins, and `--verbose` for the CLI.

If you're feeling particularly adventurous, you can also run these with the `DEBUG=recordreplay:sourcemap-upload` environment variable set to enable tons of debug logging, though that will likely mostly be useful to pass along to us to work with you on any issues you may face.