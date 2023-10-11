# Pantheon solves performance bottlenecks improving load time by 5x

<aside>
🎆 “If a picture is worth a thousand words, a replay is worth a thousand pictures” - Zack Rosen, Pantheon CEO

</aside>

## Summary

### Challenges:

- Growing Engineering team from 60 to 200 with a limited understanding of how to scale platform and address performance issues
- 10-12 second initial load time on new dashboard with no clear path to address issues
- Determining tech stack tradeoffs whilst adding new code on top of an old codebase

### Approach/Solutions:

- Adopting Replay to reproduce difficult bugs and performance issues
- Using Replay to see what was happening in the code when performance drags occurred
- CEO and FE Leadership re-prioritized mid-sprint and set clear direction for its dashboard

### Why Replay?

- The only developer tool that actually gave a deep understanding of perf bottlenecks
- Enabling CEO and Engineering Leadership to make its Dashboard a more performant site
- Accelerate onboarding of new engineers

### Results

- Within 6 months, improved platform load time 500% (10-12 second to 2 second average)
- Higher confidence from C-Suite in understanding performance issues and setting priorities
- Mean time to resolution on bug fixes reduced significantly (weeks → days)
- Engineers can start contributing to bug fixes within days on the job

## Big Mission, Big Challenges

<aside>
💭 “We are building software for difficult processes, so our software is inherently complex. And we are doing all this new stuff with our platform on top of old software and legacy systems. We are building the plane while it’s in flight.” - Shane Duff, Front End Lead

</aside>

[Pantheon](https://pantheon.io/why-pantheon?_bt=467792205240&_bk=pantheon&_bm=b&_bn=g&_bg=52414346635&utm_term=pantheon&utm_campaign=2021_01_pr_dec_mktg_search_brand&utm_source=Google&utm_medium=CPC&gclid=Cj0KCQjwkruVBhCHARIsACVIiOwWWXO492xRa2zVpf3drZqEVnTu4MzxFafhCw-kAX1cXRDgJZqi7ZkaAo_fEALw_wcB)’s mission is to make the web a first-class citizen that delivers results. Pantheon is building the world’s best WebOps (Website Operations) Platform— one that empowers marketing and development teams to take control of their websites, while giving them the agility to win in the dynamic world of digital marketing.

With Pantheon’s platform, teams can build best-in-class WordPress and Drupal sites with agile workflows, scalable infrastructure, and a lightning-fast content delivery network. Pantheon powers over 300,000 sites and is trusted by thousands of marketing and development teams around the world.

Shane Duff, Front End Engineering Lead,  joined Pantheon because the company was solving a real problem for him as an engineering leader and a freelance developer. After joining, he became frustrated with performance issues and in trying to reproduce them in order to share internally; especially issues felt by their most important customers.

> “The tools that we were using before were barely better than useless,” said Shane. “You’d say thanks for the console log screenshot but I don’t know how to help you. So you’d spend 2-3 days trying to recreate the issues and finding it in the code. With Replay, all that wasted time has been eliminated. We are a way faster development team and we can actually scale.”
> 

These issues were compounded by the complexity of their application and number of users. The CMS dashboard can have unlimited users working on it at a given time, and Agencies and EDU customers have dozens of stakeholders to manage.

> “Since we are building software for difficult processes, our software is inherently complex,“ said Shane. “And, we are doing all this new stuff with our platform on top of old software and legacy systems. We are building the plane while it’s in flight.”
> 

With all that came slower performance for their core platform, which was a major impediment to growth and delivering on promises to their most important customers.

## Debugging Performance at Scale

<aside>
🎆 “If a picture is worth a thousand words, a replay is worth a thousand pictures” - Zack Rosen, Pantheon CEO

</aside>

At the same time, Pantheon was rapidly growing their team from 60 to 200 engineers. As Pantheon was preparing the new dashboard for scale, the team struggled to pin down performance issues and the executive team was frustrated. In particular, Pantheon CEO Zack Rosen was feeling the pain when using their product himself.

Shane gave Replay to Rosen, who recorded about 7-8 replays of the major performance problems. It was a real “a-ha” moment for the CEO, who was able to discover the root cause of the problems that all of their largest customers were also seeing. “If a picture is worth a thousand words, a replay is worth a thousand pictures”, said Rosen.

Before Replay, Pantheon was seeing 10-12 second loading time. After using Replay’s collaboration features to diagnose the issues and build shared understanding, they improved loading time by 500%. 

> “We found multiple performance issues watching the timeline as things came down the Network Panel,” said Shane. ”For example, static file caching was a bigger issue than we thought, and we had misconfigured our setup. Primarily, it was about seeing the path that the CEO was taking to recreate these severe performance problems and seeing what was happening in the code and that exact moment in time.”
> 

## A Clear Path Forward

<aside>
🏁 “It all started because we had those replays. [We knew] where exactly in the code the problems were showing up and had a path to solving them. Now, from PM, Engineering, Support to our CEO, we use Replay to track down bugs with so much more ease and save so much time diagnosing what went wrong.” - Shane Duff, Front End Lead

</aside>

Before Replay, Pantheon struggled with identifying main causes for performance issues and how to address them.

Pantheon’s use of Replay started with its CEO and Front End Leadership creating recordings that served as assets so everyone could see the performance bottlenecks. Pantheon was able to reset priorities mid-sprint and chart a path to address the performance bottlenecks and accelerate product development.

“It all started because we had those replays and we knew where to go,” said Shane. “ [We knew] where exactly in the code the problems were showing up and had a path to solving them. Now, from PMs to Engineers, to Customer Support and our CEO, we use Replay to track down bugs with so much more ease and save so much time diagnosing what went wrong.”

By getting up to speed quickly and spending less time debugging, engineers could stay focused on the Pantheon mission.

“No one likes tracking down bugs,” said Shane. “Anything you can do to make that process simpler so engineers can get time back to spend on actually building is extremely valuable.

## Faster Development, Faster Apps

<aside>
❤️ “The biggest value for us was in identifying and reshaping our roadmap for the quarter mid-sprint. It made our CEO very happy. Without Replay, I don’t know how we would’ve been able to take our new dashboard down from 10-12 seconds to 2 seconds.” - Shane Duff, Front End Lead

</aside>

With Replay, Pantheon now has a tool to diagnose issues happening in the browser. Pantheon’s leadership team can prioritize work as the team scales against specific problems, and has more confidence in understanding and addressing performance issues. Not only that but it has helped Pantheon prioritize tech stack decisions like server-side rendering and caching strategy.

While Pantheon does not measure actual mean time to resolution on bug fixes and development, the team says  the difference is striking.

Pantheon talks in terms of days, even weeks being wasted before Replay. And QA has embraced Replay with open arms when prioritizing and estimating bug fixes.

> “Bugs without a replay and no clear answer naturally tend to stay open longer,” said Shane. “Bugs with a replay are often greeted with ‘Yeah of course’ by an engineer and these naturally get estimated lower because there is no uncertainty.”
> 

Another major value driver for Pantheon is accelerating  Engineering onboarding. Pantheon can introduce its entire stack to new engineers on the first day with Replay so they can better understand the codebase quickly.

> “Now engineers are empowered to actually get inside the front end and fix issues within days, rather than weeks or months,” said Shane.
> 

## What’s Next?

<aside>
📡 “We’d love to make it way easier for customers to share Replays. Most of our top clients would be willing to install Replay and use it to share issues. Our Customers have invested a lot in our platform and want to help us make it better.” - Shane Duff, Front End Lead

</aside>

For Pantheon’s Customer Experience team, everyone gets replays as soon as they ask for them, but building that muscle memory is a work-in-progress.

“We’d love to make it way easier for customers to share replays,” said Shane “Most of our top clients would be willing to install Replay and use it to share issues.”

Pantheon is also excited to use Replay’s experimental Node recorder to understand their back-end issues better.

“So hurry up :) ” said Shane.