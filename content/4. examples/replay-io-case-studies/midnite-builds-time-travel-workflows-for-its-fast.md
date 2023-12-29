---
title: Midnite builds time travel workflows for its fast-paced betting platform
description: ''
---
# Midnite builds time travel workflows for its fast-paced betting platform

![Midnite and Replay.png](/images/Midnite_and_Replay_bgshv.png)

> 🎆 “This is why I love Replay! That just saved me another 10 minutes trying to figure out how to get to that state [And me trying to explain it] ”— Tom Ardern, Frontend Lead
> 

## **Summary**

### **Challenges:**

- Doubling the size of engineering team
- Managing support issues internationally with language barriers
- Information gaps between frontend + backend teams
- “Higher stakes” — need for faster, more secure development in testing and production environments

### **Approach/Solutions:**

- Adopted Replay as bug reporting flow for front end and QA teams
- Started using Replay in CI to diagnose test failures and fix flakiness
- Focused effort to improve quality and security by investing in CI
- Built a sophisticated bug reporting toolset to report issues in real-time particularly for Live Odds and network issues

### **Why Replay?**

- The only debugging tool that allows [Midnite](https://www.midnite.com/) to see bugs at a specific point in time in a rapidly changing production environment
- Replay’s collaborative debugging features allows frontend and backend teams to fix network-related issues together from one source of truth
- QA/Support can easily attach to tickets without needing to write lengthy steps to reproduce
- Developers no longer need to waste time reproducing issues locally

### **Results**

- Bug reporting solution that scales across markets, support and development teams
- Team is able to triage issues in multiple geographies
- More secure & higher quality product launches

## **What is Midnite?**

[Midnite](https://www.midnite.com/) is crafted for sports and esports fans to effortlessly enjoy their favorite games at lightning-fast speed. Fans can bet on all the games they love: from football, tennis and basketball to CSGO, League of Legends and COD. The company, headquartered in London, is a team is a collective of engineers, quants, designers, and marketers who all share a passion for esports, sports, and gaming.

## **Scaling the team with Replay**

The company recently [raised a Series A](https://www.prnewswire.com/news-releases/midnite-announces-series-a-round-led-by-the-raine-group-301472693.html) after hitting major milestones and is poised for even faster growth. With a background in iOS development and what began as dribble.com, the company pivoted into a phenomenal betting platform expanding into new markets, new categories with new features to support a range of bets.

In the last year, Midnite’s company size grew by 3x and its development team by 2x. On top of team growth, usage was up by an order of magnitude. For an UK-based online betting platform with operations in multiple countries, they’ve experienced all kinds of challenges in order to scale effectively.

## **Fixing issues between frontend and backend**

At the beginning, Tom Ardern, Midnite’s Frontend Lead, used Replay for the frontend team to quickly find & fix . As issues came in, both frontend and backend developers found it particularly useful in being able to pinpoint issues coming down the network.

[In action — [Midnite](https://www.midnite.com/) engineer figures out what payload sent between the Backend (Python) and Frontend (Vue) via Websockets was causing a bug:](https://miro.medium.com/max/732/0*mfr-okhl7CEstPWC)

In action — [Midnite](https://www.midnite.com/) engineer figures out what payload sent between the Backend (Python) and Frontend (Vue) via Websockets was causing a bug:

## T**ime travel debugging into Support workflows**

> 🎸 “Replay has been instrumental in building our bug reporting system and it’s been a game-changer allowing us to land changes and fix bugs immediately. We can also see issues we otherwise couldn’t (between backend and frontend).” — Tim Woska, Head of Engineering
> 

After Tom built a bot and a process requiring Support and Devs to use [Replay](https://www.replay.io/), all support tickets started coming in with replay URLs and the ratio of high quality bug reports vs. issues that couldn’t be resolved or even reproduced grew dramatically.

[Midnite’s custom support bot encourages replay URLs that go into the slack message, then onto the story/card that is created for the developer.](https://miro.medium.com/max/1114/0*3UvfvUPfF_F2bYsW)

Midnite’s custom support bot encourages replay URLs that go into the slack message, then onto the story/card that is created for the developer.

[Slack bug report card for developer](https://miro.medium.com/max/1400/0*Q83kaLthbxu6hj1z)

Slack bug report card for developer

## **Replay in design and code reviews**

As the team started using, [Replay](https://www.replay.io/) became more useful in other contexts as a generalist tool for code exploration and highlighting changes mid-development.

**Here’s a sneak peak at Replay in action during a design critique:**

[https://miro.medium.com/max/1400/0*5plk7NwnrgBJJocZ](https://miro.medium.com/max/1400/0*5plk7NwnrgBJJocZ)

## L**ive betting on the web**

[Midnite](https://www.midnite.com/) has a “Trading” team; made up of QA/support folks across markets that deal with making sure everything is working properly on the site and that odds are highly reliable and accurate.

> 🏇🏼“When you work with live odds, the data is always changing. You need to be able to capture when things go wrong early enough to fix them. This is where Replay is comes in; the URL captures the bug at that point in time. Reproducing locally on your machine in another time/geo/environment loses the issue entirely.” — Tom Ardern, Frontend Lead
> 

As [Midnite](https://www.midnite.com/) began to attract players from other markets, the support problem became critical when dealing with issues across time zones, language differences and new developers less familiar with the codebase.

> 🏂🏼 “We have new support staff who are not as adept as using replay yet, but we have aggressive plans to grow and lots of bugs get raised. With replay, the language barrier is less of an issue because support can add a comment into the points in time.” — Tom Ardern, Frontend Lead
> 

## **Faster, more secure development with Replay in CI**

Midnite’s Frontend is written in Vue/Nuxt (with the backend is in Python on AWS) and will be adding more teams soon. The team releases multiple times a day so it’s been critical to establish both a bug reporting process for issues in production and a CI/CD pipeline (via GitHub Actions) to be more secure and more reliable with every new release.

> 💻 “CI/CD is critical when scaling the engineering team, ensuring the core functionality and code doesn’t break with new releases as we hire new engineers. Right now we have 1–2 flaky E2E (via Cypress) tests and replay is pretty useful, some things are not quite right but it’s improving. Recently we actually caught something live in production that we were able to fix thanks to Test Suites which is a great sign of things to come” — Tom Ardern, Frontend Lead
> 

## **What’s Next?**

[Midnite](https://www.midnite.com/) has been a great design partner for Replay’s [Test Suite beta](/test-suites). We’re excited to build something that offers more context and visibility into test failures, and integrate throughout Midnite’s development lifecycle.

For [Midnite](https://www.midnite.com/), using Replay in CI will become business critical as they expand into new markets and maintain high security standards in running operations at scale.