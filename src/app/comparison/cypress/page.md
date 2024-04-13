---
title: How Runtime Replay compares with Cypress Test Replay
---

Cypress Test Replay is built on top of [RRWeb](https://github.com/rrweb-io/rrweb), a popular Session Replay tool which records the DOM, Console logs, and Network Requests. Replay DevTools is built on top of Replay’s Chrome based browser which is able to record and deterministically replay web applications.

This means that when you’re debugging in Replay DevTools you’re able to add retroactive print statements and inspect your applications with Browser DevTools as if the test is running locally on your computer.

[](blob:https://docs.replay.io/9bff89e9-f215-4b5e-b2b4-d95b21be6f6d)

## Retroactive print statements

Intermittent test failures can be challenging to debug because there’s no way to predict where they might come from and you have to work backwards from the problem to the root cause.

In the example below, we’ll walk through how you can use Replay DevTools to understand where the timing issue is coming from within the React component. This example comes from Filip Hric’s excellent video so if you are a visual learner, feel free to check out the video instead ([link](https://www.youtube.com/watch?v=4wL8Qi9vjho)).

{% figure alt="Elements panel" src="/images/cypress-1.png" height=870 width=870/%}

The reason why this test fails the first time and passes the second time is that the API call `/add-to-cart` fails returns a `400` because the requested quantity was 0. Viewing the Network Monitor helps us see that the quantify field defaults to 0 and is updated when the `check-availability` API call is returned.

{% figure alt="Elements panel" src="/images/cypress-2.png" height=870 width=870/%}

We can fix this test by telling it to wait for the `/api/check-availability` network request, but it’s possible that our users could also be hitting this issue as well. And in general, every time we add a `cy.wait` we should ask ourselves, “is there a way to make our application safer”?

{% figure alt="Elements panel" src="/images/cypress-3.png" height=870 width=870/%}

Because Replay is a browser, we can go one step further and inspect the **ProductDetail** React component. When we look at the component, we see that when `/api/check-availability` returns, it sets the `quantity` value.

{% figure alt="Elements panel" src="/images/cypress-4.webp" height=870 width=870/%}

Once we know we know that the Add To Cart button should be disabled when the `quantity` is 0, it is fairly easy add a disabled property to the **AddToCartButton** component.

{% figure alt="Elements panel" src="/images/cypress-5.webp" height=870 width=870/%}

And now that the Add To Cart button is safer, we can go back to our Cypress test and remove the `cy.wait` because it is no longer necessary.

This story illustrates how improving our application can improve our tests. And when our application is safe, our end-to-end tests can be simple.

The challenge with writing stable end-to-end tests, is that we’re testing an unstable application. This is where time travel debugging shines. It helps us put our tests and applications under the microscope, understand how they work, and make them more reliable.

## How to get started time traveling through your Cypress tests?

[Replay.io](https://replay.io/) Test Suites is in closed beta, but you can sign up [here](https://replay.help/waitlist) and we’ll reach out and find a time to connect and and help you get started.
