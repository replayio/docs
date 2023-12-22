---
title: Glide saves 40 hours weekly by eliminating the reproducibility problem
---
import { Callout } from 'nextra/components'
# Glide saves 40 hours weekly by eliminating the reproducibility problem

<Callout type="info" emoji="🐌">
“[Before Replay] We spent somewhere between 1-2 hours per day per dev in this reproducibility purgatory. The toll this was taking on our development velocity and our ability to respond and resolve issues was huge. We thought there must be a better way.” - Mark Probst, CTO
</Callout>

## What is Glide?

Founded in 2018, [Glide](https://www.glideapps.com/) lets anyone easily create mobile apps without writing a single line of code. Glide’s mission is to create a billion new software developers by 2030 (something we care deeply about). The company lets people create and distribute mobile apps generated from spreadsheets with custom actions and workflows.

Glide started with mobile apps and recently launched Glide Pages for websites. Glide is a leader in the no-code movement, helping people innovate and bring digital experiences to life across content, commerce, and – increasingly – enterprises building in-house apps.

Glide’s stack is fairly standard - React using Typescript on top of Firebase and Google Cloud Platform; it’s a unified stack with some Redux mixed in.

> “We used all the boring tech to get our environment up and running and start shipping code.” - Jason Smith, VP of Engineering
> 

## The journey to build performant, functional apps — fast

<Callout type="info" emoji="🐛">
“When we found a bug in development and had to reproduce the bug over and over to make sure it works, it slowed us down A TON and was very painful. All of that goes away with Replay.” - Mark Probst, CTO

</Callout>

You need a complex platform to create a simple tool for no-code developers. With a complex app comes a high potential for bugs and a high bar for getting releases right.

In development, Glide often ran into challenges that really weighed down developer velocity:

“When we found a bug in development and had to reproduce the bug over and over to make sure it works on my colleague’s side, it’s slowed us down A TON and was very painful.,” said Mark. Because it’s such a complex app, Glide’s code can execute a single function thousands of times in just at a few seconds, making it even more difficult to isolate where the bug occurred. “With traditional debuggers you have to be so careful not to step over the part where there is actually a bug. All of that goes away with Replay,” said Mark. “You can go back in time, add breakpoints, print statements and the Replay lives forever.” 

## Discovering Replay

<Callout type="info" emoji="🚨">
“Without Replay, we’d have to go on a quest, do a screen share with console logs open and it’d be a long journey with urgent Zoom calls that have to happen immediately or else the bug vanishes. “ - Mark Probst, CTO

</Callout>

Glide’s VP of Engineering, Jason Smith discovered Replay and thought it could be a game changer so introduced to Mark and the rest of the team. You’d only have to record the bug once and then can reproduce it forever. Plus, the time travel functionality lets you isolate specific function calls.

> “We were scaling fast and needed a more efficient way to build and ship faster as our platform became more complex – as well as to triage bugs to respond to customer issues at a faster rate.” - Jason Smith, VP of Engineering
> 

Jason shared Replay with Mark as a solution for their reproducibility problem. Both were excited about the idea of eliminating back and forth when debugging. “Without replay, we’d have to go on a quest, do a screen share with console logs open and it’d be a long journey,” said Mark. “Oftentimes, we’d need to get on these urgent Zoom calls to ask for help that have to occur immediately or else the bug vanishes,” said Jason.

## Improving developer velocity and revolutionizing QA and Support

Using a two-pronged approach, Glide started using Replay first in their development team and then with their QA/Support. They even had customers record issues to submit with bug reports.

> “After we started using Replay in our own development process, we figured, can we actually give this to our customers? We experience the same problems around debugging between customers > Support > QA > Engineering as we do between Engineers in development.” - Jason Smith, VP of Engineering
> 

:VideoPlayer{id="c3jf2xk1mANAaMH4X6QquBjEXEjvHtfkGbwdJB01dzbM"}

Here is a video of the Glide landing page being recorded in the Replay browser

Then, Glide started adding replays as URL links to pull requests to show the code logic behind feature changes. These Replays live on for more collaborative development and documentation.

![Here is a sanitized view of Glide’s Replay Library](/images/Glide_Library-v2_owqjo.png)

Here is a sanitized view of Glide’s Replay Library

When Glide made the decision to add replays to its support process, Support Engineer Santiago Perez created a guide for his team to start using the Replay app to record issues and add them to tickets. They started asking customers to record as well, resulting in issues getting resolved even faster.

> “Getting Replays from support has completely revolutionized how we deal with bugs that come in. Now, we can’t even get a report from support unless it comes with a replay. And if we don’t have a replay, it’s shown us how much harder it is to take action.”  - Jason Smith, VP of Engineering
> 

Jason shared more on what it looks like in practice, “There’s a huge performance advantage with being able to go — here’s a link → grab it, open it up → read a two-line description → immediately begin debugging without having to spin up a dev environment. In thinking about collaboration and organizational benefit, “This has made it SO MUCH easier to diagnose, assign which team to triage. Sometimes we would realize it’s not a bug and be able to quickly see if a user misconfigured something or if they had a weird network state then the right function would be empowered to resolve it. It cleaned that process for us too,” said Jason.

## Understanding Replay ROI

<Callout type="info" emoji="💸">
“Just looking at our front-end team, on a good week, we estimate we save about 1 day/week/engineer, which is massive. For our core team of 5, that’s 40 hours/week saved, conservatively just in developer hours.” - Jason Smith, VP of Engineering

</Callout>

After a few months, Glide saw a few use cases emerge as part of their workflow:

- **Product Development** - using Replay when submitting pull requests, identifying issues for feature releases, debugging collaboratively
- **Quality Assurance -** in manual QA (and soon automated tests), using Replay to test new features and builds locally, determine systemic or isolated issues and pressure test changes before introducing to larger customers
- **Customer Support** - using Replay on support tickets instead of spending hours reproducing steps and recreating dev environments to diagnose issues

## Next chapter with Replay

<Callout type="info" emoji="🛠">
“As a CTO, one thing I’m excited about is Replay working on the backend. I’m spending more time there these days, and I’d love to not have to debug like a caveman. Any other time, I use Replay.” - Mark Probst, CTO

</Callout>

Replay is working on Node support and adding integrations for Cypress, Playwright and Puppeteer so Replay can be used on the backend and in e2e testing workflows. We are also ramping up our M1 Support to improve Replay’s performance and get you debugging faster.

If using Replay on the frontend alone saves 40+ hours per week, imagine the time savings when added to testing and backend environments. **This is the future of debugging with Replay.**