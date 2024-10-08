# Replay documentation

![Docs preview](public/images/docs.png)

A code repository for [https://docs.replay.io](https://docs.replay.io) containing Replay.io basics, tutorials, examples and explanations.

Docs are built with:

- [NextJS](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [FlexSearch][https://github.com/nextapps-de/flexsearch]

## Installation

```bash
pnpm install
```

## Local development

Note that Node 18 is currently required to run this web server successfully.

```
pnpm run dev
```

## Issues

If you find any issues, feel free to open a [new issue](https://github.com/replayio/docs/issues/new) or contact us [via Discord](https://replay.io/discord).

## Running the tests

```bash
playwright test tests/toc.spec.ts
```
