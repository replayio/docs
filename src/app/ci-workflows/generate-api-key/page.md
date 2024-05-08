---
title: Generate API key
description: Your API key authenticates you with Replay App and allows you to record test runs and automatically upload replays to the Replay App.
---

## Creating a new API key

1. To generate a new API key, go to Replay app and **API Keys** section in the team settings section.
2. Add permissions and name to your API key and click "Add"
3. Copy your API key

{% video src="generateApiKey" /%}

{% callout type="warning" title="Keeping your API key safe" %}
Make sure to copy and save your key immediately as you will not be able to see it again after you close the settings. Keep your API key safe and avoid committing it to your repo.
{% /callout %}

## Delete API key

Your API keys are accessible in your team settings. You can delete any API key if necessary. A list of all active API keys is also available in the team settings.

{% video src="deleteApiKey" /%}

## Using your API key

### Saving Key to Local Environment

Save Locally: Store the API key in a secure location on your local machine, such as an environment variable.

{% tabs labels=["macOS/Linux", "Windows"] %}
{% tab %}

```sh
export REPLAY_APP_API_KEY=<Your-API-Key>
```

{% /tab %}
{% tab %}

```sh
set REPLAY_APP_API_KEY=<Your-API-Key>
```

{% /tab %}
{% /tabs %}

### Using `.env` file

For local development and easier environment secrets management, you can use [dotenv package](https://www.npmjs.com/package/dotenv) and save your API key to a `.env` file. Make sure this file is listed in your `.gitignore` file so that you accidentally don’t expose it.

```bash {% fileName=".env" %}
REPLAY_API_KEY=<your_api_key>
```

### Saving API key to remote environment

Most CI/CD providers (e.g. [GitHub](https://docs.github.com/en/actions/learn-github-actions/variables), [CircleCI](https://circleci.com/docs/env-vars/)) offer an interface where you can securely add repository secrets or store your environment variables.
