# Okta Integration with Auth0

## Logging in with SSO

Logging in with SSO, is as easy as going to app.replay.io, clicking Sign In with SSO, and entering your email. When you enter your email, you will be routed to your standard SSO (Okta provider). 

![Screen Shot 2022-03-02 at 7.16.07 PM.png](Okta%20Integration%20with%20Auth0%2088cbc5fdfd514f1db3b9343760b52c9e/Screen_Shot_2022-03-02_at_7.16.07_PM.png)

# Configuration Info from Replay

| Single Sign on / ACS URL | https://webreplay.us.auth0.com/login/callback?connection=<connection-name> |
| --- | --- |
| Audience URI | urn:auth0:webreplay:<connection-name> |
| Application username | Okta username |
| Attribute statements | We need the user's email in the email field |

# Okta SAML Configuration

To make this change, you must have Admin access to your Okta deployment.

1. Find the necessary dialogue to add an App by going to Admin → Applications → Applications. Here’s an example of the screen you should see:

![Screen Shot 2022-08-09 at 11.01.57 AM.png](Okta%20Integration%20with%20Auth0%2088cbc5fdfd514f1db3b9343760b52c9e/Screen_Shot_2022-08-09_at_11.01.57_AM.png)

1. Click on “Create App Integration”, select “SAML 2.0” and click on Next.
2. In General Settings give the name to the app: “Replay” and click Next.
3. Using the configuration info sent from Replay (and referencing the above) fill out the next screen. Here is an example of that screen filled out with example information:

![Untitled](Okta%20Integration%20with%20Auth0%2088cbc5fdfd514f1db3b9343760b52c9e/Untitled.png)

1. On the next screen select that the app is for internal use.