---
title: Using other CI providers
---
import { Callout } from 'nextra/components'

# Other CI providers

Make sure you have an existing `npm install` or `yarn` command to install project dependencies:

```bash
npm install
# or
yarn
```

Create another test script in `package.json` for running tests with Replay, and replace your current test script in your CI workflow file:

```json
"scripts": {
  "cy:run": "cypress run", // original test script
	"cy:run:replay": "cypress run --browser=replay-chromium" // new test script
}
```

Lastly, add a new step in the workflow for uploading the replays once they’re generated. Run the scripts below, providing [your own API key](/getting-started/teams-admin/setting-up-a-team#api-keys):

```bash
# Run your tests
REPLAY_API_KEY=<api key> npm run cy:run:replay
# Adds source control metadata like the commit, branch, and PR
# that triggered this test run
npx @replayio/replay metadata --init --keys source --warn
# Uploads all replays to your team
npx @replayio/replay upload-all --api-key <api key>
```

Lastly, [add your API key to your Secrets](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository). To get an API key, create a new Replay team and generate an API key — [instructions can be found here](/getting-started/teams-admin/setting-up-a-team#api-keys).

<Callout type="info" emoji="⚠️">
If you run into any problems, [consult our troubleshooting guide here](/test-suites/cypress/troubleshooting-guide).
</Callout>

## CircleCI and Replay Metadata

The Replay CLI will pull available metadata from the CircleCI environment but some data can only be retrieved by calling the GitHub API.

### Fetching GitHub metadata with the Replay CLI

If you configure a `GITHUB_TOKEN` environment variable with a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), the Replay CLI will use that token to fetch additional data like the commit message and pull request title.

### Fetching GitHub metadata manually

Alternatively, you can fetch the metadata yourself if you do not wish to share a token with the Replay or you’re integrating with a different source control system like BitBucket.

Below is an example which fetches the commit and PR titles and sets the value in `RECORD_REPLAY_METADATA_SOURCE_COMMIT_TITLE` and `RECORD_REPLAY_METADATA_SOURCE_MERGE_TITLE` which the Replay CLI knows to use for the commit and merge title, respectively.

```bash
export RECORD_REPLAY_METADATA_SOURCE_COMMIT_TITLE=$(
	curl -s -H "Authorization: $GITHUB_TOKEN" $(
		echo $CIRCLE_PULL_REQUEST |
		sed -e "s#.*github.com/\(.*\)/pull.*#https://api.github.com/repos/\1/commits/$CIRCLE_SHA1#"
	) | jq -r .commit.message
)

export RECORD_REPLAY_METADATA_SOURCE_MERGE_TITLE=$(
	curl -s -H "Authorization: $GITHUB_TOKEN" $(
    echo $CIRCLE_PULL_REQUEST |
    sed -e "s#.*github.com/\(.*\)/pull/\(.*\)#https://api.github.com/repos/\1/pulls/\2#"
    ) | jq -r .title
)
```