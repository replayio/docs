---
title: NextJS
---

[Next.js](https://nextjs.org/) is the most popular React framework and comes with great defaults for debugging your app with Replay.

Everything will work out of the box in development so you can simply download the Replay browser, click record, click save, and inspect your replay.

And when it comes to production, the only thing you need to setup is source maps so that you can retroactively add print statements in the original code.

## Source Maps in production

Replay works in best with source maps that let you see the original code and add print statements in the original file retroactively.

We recommend enabling source maps in production because the browser was designed to be open with “view source” by default. If you would like to enable source maps in production, Next.js makes it easy to do so. [docs](https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps)

```javascript
module.exports = {
  productionBrowserSourceMaps: true,
}
```

If you would prefer not publishing source maps in production, you can upload your maps to Replay at build time so they’re still available while debugging.

If you are using Webpack in your NextJS app you can update your next.config.js [here](/reference/replay-cli/source-maps). If you are using SWC which is now the default, you can update the Vercel build step.

```json {% fileName="vercel.json" %}
{
  "buildCommand": "next build; npx @replayio/replay upload-sourcemaps ./next"
}
```

Here are the [docs](/reference/replay-cli/source-maps) on the CLI.
