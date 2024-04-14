---
title: Okta integration
---

## Logging in with SSO

Logging in with SSO, is as easy as going to app.replay.io, clicking Sign In with SSO, and entering your email. When you enter your email, you will be routed to your standard SSO (Okta provider).

{% figure alt="Elements panel" src="/images/okta-1.png" height=870 width=870/%}

## Configuration Info from Replay

{% table %}

---

- Single Sign on / ACS URL
- https://webreplay.us.auth0.com/login/callback?connection=<connection-name>

---

- Audience URI
- `urn:auth0:webreplay:<connection-name>`

---

- Application username
- Okta username

---

- Attribute statements
- We need the user's email in the email field

---

{% /table%}

## Okta SAML Configuration

To make this change, you must have Admin access to your Okta deployment.

1. Find the necessary dialogue to add an App by going to Admin → Applications → Applications. Here’s an example of the screen you should see:
   {% figure alt="Elements panel" src="/images/okta-2.webp" height=870 width=870/%}

2. Click on “Create App Integration”, select “SAML 2.0” and click on Next.
3. In General Settings give the name to the app: “Replay” and click Next.
   {% figure alt="Elements panel" src="/images/okta-3.webp" height=870 width=870/%}

4. Using the configuration info sent from Replay (and referencing the above) fill out the next screen. Here is an example of that screen filled out with example information:

On the next screen select that the app is for internal use.
