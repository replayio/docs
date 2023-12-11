---
title: Debugging Tips
---
import LoomVideo from '@components/LoomVideo.tsx'
import Video from '@components/Video'
import { Callout } from 'nextra/components'
import JumpTo from '@icons/JumpTo'
import evalZjmqz from '/videos/eval_zjmqz.mp4'
import jumpToCodeQiunq from '/videos/jump-to-code_qiunq.mp4'

# Debugging Tips

Replay can help you gather more information about a flaky test. There are many strategies that can help you narrow down the root cause of a test failure or flake.

Replay DevTools enable you to deep-dive into your code and print out values that would otherwise be hidden from you.

## Comparing passed and failed test
Great way to narrow down the root casue of a flaky test is to open two replays - one with a passed test and one with the failed one. Usually the recording can give you enough information to notice the moment when these two tests start to diverge.

At this point, you can click <span className='mx-1.5 font-mono bg-blue-500 text-white rounded-3xl px-3 py-1'>Jump to code <JumpTo className="w-5 h-5 inline-block p-0.5 mb-0.5" /></span> button and move from your test code into your app code. This allows you to see how did your test code impact the app itself. Since the recording will take you to an exact moment in test execution, you can examine your app’s function calls and reveal timing issues.

A good example [can be found in this video](https://www.youtube.com/watch?v=4wL8Qi9vjho), where a timing issue causes problems with adding an item to a cart.

## Adding console logs in the spec file

<LoomVideo src="https://www.loom.com/embed/64839a8f075a41cabf105d671cc48a07" />

Typically console logs are not that helpful in a spec file because the spec is run at the beginning of the test to build the test plan.

The exception for the rule is `.should` and other cases where the test code is run in the middle of the test and there are values that can be inspected.


## Evaluating in Cypress callbacks

Most Cypress steps run at test start to build the test schedule. An exception to this rule is Cypress commands and should assertions.

In these cases you can jump to a line of code and evaluate expressions in the Console’s terminal.

1. Hold down command and click the blue jump button
2. Evaluate an expression in the Console’s terminal

<Video src={evalZjmqz} />

## Jump to application events

With Replay you can jump from a test `cy.click(){:js}` command into your React component’s `onClick{:js}` hander. In the example below, we jump from the test’s click command into the Todo app’s `handleEdit{:js}` callback.

<Video src={jumpToCodeQiunq} />

## Test burn-in
Rerunning your test repeatedly can be a helpful ways to catch a test flake. This strategy can sometimes be easier if you want to quickly record a flake locally.

```js filename="cypress/e2e/login.js"
describe(`Verify "Login" is visible. Test: ${i}`, () => {
  for (let i = 0; i < 3 ; i++) {
    it('finds the Login link in the header', () => {
      // Place code inside the loop that you want to repeat
    })
  }
})
```

To run your the test, use following command:
```sh
npx cypress run --spec cypress/e2e/login.js --browser replay-chromium
```

<Callout type="default" emoji="💡">
Pro tip: You can use `@cypress/grep` package to repeat your tests without changing code in your spec. Read more about it [in the package readme](https://www.npmjs.com/package/@cypress/grep#burn-repeat-tests).
</Callout>

When running locally, you can use [Replay CLI](/reference-guide/recording/replay-cli) to manually upload your recordings to Replay Dashboard.
```sh
npx @replayio/replay upload-all
```

## Great articles on test flakiness
- [8 Common mistakes in Cypress](https://filiphric.com/8-common-mistakes-in-cypress-and-how-to-avoid-them) by Filip Hric
- [Identifying code smells in Cypress](https://codingitwrong.com/2020/10/09/identifying-code-smells-in-cypress) by Josh
- [Ways of fixing flaky tests](https://kailash-pathak.medium.com/ways-of-fixing-flaky-tests-in-cypress-840329d759e5) by Kailash Pathak
- [3 Practices to Reduce Flakiness](https://spin.atomicobject.com/2021/07/20/reduce-flakiness-cypress-tests/) by Jori Gelbaugh
- [Getting Rid Of A Living Nightmare In Testing](https://www.smashingmagazine.com/2021/04/flaky-tests-living-nightmare/) by Ramona Schwering
- [Methods for identifying and dealing with flaky tests](https://www.youtube.com/watch?v=38pW08_nY_k) by Jason Palmer