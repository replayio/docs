Welcome to the Replay.io docs!

While we're always happy to accept contributions, most of the work we're doing is internal, and may be challenging to find what to work on next.

This all to say; PRs welcome and if you'd like to work on docs with us more extensively, reach out to us!

## Issues

We generally track our work in Linear. If you're on the team, you should have permission to view any tickets with the "docs" label. Feel free to assign yourself to any of these tickets, or reach out to the team to get more information.

## Content

We try to follow the Diataxis framework for our documentation. This means that we try to keep our docs focus on either:

- **Explanation**: What is Replay.io? How does it work? What are the core concepts?
- **How-To Guides**: How do I do X with Replay.io?
- **Reference**: What are the Replay.io APIs? What are the Replay.io CLI commands?
- **Tutorials**: How do I do X with Replay.io? (More in-depth than guides)

### Writing

We have a writing guide tracked internally on our Linear. If you're interested in contributing, reach out to the team and we can get you access to this guide.

## Adding videos

We use Mux for video hosting. If you'd like to add a video to the docs, reach out to the team and we can help you get set up. You'll need to be an admin on Mux to get access to the Access Tokens required for the next step.

### Token Setup

You'll want to create a token that has:

- Video
  - Read
  - Write
- Production mode

All enabled.

Once set up with the Replay.io Mux account, you'll want to copy `.env.example` to `.env.local` and add in the Mux Access Token and ID.

### Uploading videos

Once the setup is complete, you can upload a video to Mux by:

- Adding an mp4 to `src/videos`
- Running `npm run sync`

This will upload the video to Mux, and create a `.mp4.json` file that we can use.

> Don't worry, the MP4 file will be ignored by Git. You can safely `git add .` like normal.

## Adding the video to components

Once we have a JSON file, we need to add it to:

- `src/components/Video.tsx`

In the `const videos = {nameHere: importVal}` mapping.

## Using the Videos in Content

Once added to the component, you can use the video in markdown by using the `Video` component:

```markdown
{% video src="nameHere" /%}
```
