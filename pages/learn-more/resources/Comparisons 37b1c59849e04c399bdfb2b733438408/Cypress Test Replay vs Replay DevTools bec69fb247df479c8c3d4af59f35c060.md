# Cypress Test Replay vs Replay DevTools

---

Cypress Test Replay is built on top of [RRWeb](https://github.com/rrweb-io/rrweb), a popular Session Replay tool which records the DOM, Console logs, and Network Requests. Replay DevTools is built on top of Replay’s Chrome based browser which is able to record and deterministically replay web applications.

This means that when you’re debugging in Replay DevTools you’re able to add retroactive print statements and inspect your applications with Browser DevTools as if the test is running locally on your computer.

[Retroactive print statements](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Untitled.mp4)

Retroactive print statements

Intermittent test failures can be challenging to debug because there’s no way to predict where they might come from and you have to work backwards from the problem to the root cause.

In the example below, we’ll walk through how you can use Replay DevTools to understand where the timing issue is coming from within the React component. This example comes from Filip Hric’s excellent video so if you are a visual learner, feel free to check out the video instead ([link](https://www.youtube.com/watch?v=4wL8Qi9vjho)).

### Debugging with Replay DevTools

Replay is a new kind of browser that is able to be recorded and deterministically replayed. This means you’re able to record your tests in CI and retroactively inspect them with print statements and Browser DevTools. 

Rather than discuss how Replay works, we thought it would be helpful to walk through an example of you could fix a timing issue in a test that adds a product to the cart. This example comes from Filip Hric’s excellent Less Flake [video](https://www.youtube.com/watch?v=4wL8Qi9vjho), so check it out if you want to see Replay in action.

![Untitled](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Untitled.png)

The reason why this test fails the first time and passes the second time is that the API call `/add-to-cart` fails returns a `400` because the requested quantity was 0. Viewing the Network Monitor helps us see that the quantify field defaults to 0 and is updated when the  `check-availability` API call is returned. 

![Untitled](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Untitled%201.png)

We can fix this test by telling it to wait for the `/api/check-availability` network request, but it’s possible that our users could also be hitting this issue as well. And in general, every time we add a `cy.wait` we should ask ourselves, “is there a way to make our application safer”?

![Screenshot 2023-08-15 at 8.02.35 AM.png](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Screenshot_2023-08-15_at_8.02.35_AM.png)

Because Replay is a browser, we can go one step further and inspect the **ProductDetail** React component. When we look at the component, we see that when `/api/check-availability` returns, it sets the `quantity` value.  

![Screenshot 2023-08-15 at 8.35.43 AM.png](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Screenshot_2023-08-15_at_8.35.43_AM.png)

Once we know we know that the Add To Cart button should be disabled when the `quantity` is 0, it is fairly easy add a disabled property to the ******************************AddToCartButton****************************** component.

![Untitled](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Untitled%202.png)

And now that the Add To Cart button is safer, we can go back to our Cypress test and remove the `cy.wait` because it is no longer necessary.

![Untitled](Cypress%20Test%20Replay%20vs%20Replay%20DevTools%20bec69fb247df479c8c3d4af59f35c060/Untitled%203.png)

This story illustrates how improving our application can improve our tests. And when our application is safe, our end-to-end tests can be simple.

The challenge with writing stable end-to-end tests, is that we’re testing an unstable application. This is where time travel debugging shines. It helps us put our tests and applications under the microscope, understand how they work, and make them more reliable.

### How to get started time traveling through your Cypress tests?

[Replay.io](http://Replay.io) Test Suites is in closed beta, but you can sign up [here](https://replay.help/waitlist) and we’ll reach out and find a time to connect and and help you get started.