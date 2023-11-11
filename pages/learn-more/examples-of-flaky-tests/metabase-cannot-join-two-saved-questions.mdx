---
title: "Metabase: cannot-join-two-saved-questions"
---
import LoomVideo from '@components/LoomVideo.tsx'

# Metabase: cannot-join-two-saved-questions

[e2e/test/scenarios/joins/reproductions/18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-field.cy.spec.js](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=39915782121745558809872149013078687&time=18597&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjMxNDc4Mjk5NzE4NjQxMTIzMTk5NjUzNzQ1Njk2NzAyNDY0IiwidGltZSI6MTQ5Njl9LCJlbmQiOnsicG9pbnQiOiI1NTQ5MjY3MjcwMTcyNDQ1NTMxNTMyMTQzMjE5MDIyMjMzNiIsInRpbWUiOjIzODA5fX0%3D)

### What is the test trying to do?

<LoomVideo src="https://www.loom.com/embed/0f6bf01b07b348b789107cbf603dd5a5" />

The test creates two questions and then tries to join them with the same implicit/explicit grouped field.

Procedurally, the test performs these steps

1. two questions are created via the API
2. the test clicks on `Saved Questions` and then selects question  `18512#1`
3. clicks the join button 
4. clicks on `Saved Questions` a second time and then selects question `18512#2`
5. visits the visualize page and waits for `Products \u2192 Created At` to appear.

### What goes wrong?

When the test fails, the test is not able to select the second question.

<LoomVideo src="https://www.loom.com/embed/466d39f90c28410eb031941a636f7565" />

### What is the observable difference?

![cause:effect.png](/images/causeeffect_hpvnx.png)

When the test fails, the “Saved Questions” button is missing so there’s nothing to click. This happens because the render function has a case statement that renders the `TablePicker`  when the test fails and the `DatabaseSchemaPicker` when the test passes. 

![[view replay](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=40240300675957395929315341418627622&time=18803.25987239179&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjI5ODU1NzA2OTUwMDI0NDUwMjMyNjQxNjcwNDE4MDA2MDE2IiwidGltZSI6MTQ0MzV9LCJlbmQiOnsicG9pbnQiOiI1ODQxMzMzOTY4ODg4MDQ1MjQ3ODgwNjcwODA1MDcyMjgxNiIsInRpbWUiOjI0OTMzfX0%253D)](/images/Screenshot_2023-07-12_at_9.35.14_AM_gbeoh.png)

[view replay](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=40240300675957395929315341418627622&time=18803.25987239179&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjI5ODU1NzA2OTUwMDI0NDUwMjMyNjQxNjcwNDE4MDA2MDE2IiwidGltZSI6MTQ0MzV9LCJlbmQiOnsicG9pbnQiOiI1ODQxMzMzOTY4ODg4MDQ1MjQ3ODgwNjcwODA1MDcyMjgxNiIsInRpbWUiOjI0OTMzfX0%253D)

### Why does the test fail?

The `DatabaseSchemaPicker` is rendered because the active step is a SCHEMA_STEP.  And when the test fails, `onChangeSchema` is called with `1:PUBLIC`. When the test passes, `onChangeSchema` is not called!

1. W**hy is `onChangeSchema` called when the test fails?** 
    
    `onChangeSchema` is called from [skipTests](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=18822076122371152273768683870879936&time=10859.494619228097&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjUxOTIyOTY4NjAyMDQ2MjgwNTUwMDQxODk1NDgzNDczOTIiLCJ0aW1lIjoyOTY1fSwiZW5kIjp7InBvaW50IjoiMzQzOTg5NjY3MDE3Nzg3MDM1Mzk2MzA3MjAzNjMyNjYwNDgiLCJ0aW1lIjoxNjEzMH19) when the DataSelector is mounted and when the test fails, the component has `1:PUBLIC` schema set in its state. When the test passes, the component does not have any schemas set.
    

![[view replay](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=18822076122371152273768683870879936&time=10859.494619228097&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjUxOTIyOTY4NjAyMDQ2MjgwNTUwMDQxODk1NDgzNDczOTIiLCJ0aW1lIjoyOTY1fSwiZW5kIjp7InBvaW50IjoiMzQzOTg5NjY3MDE3Nzg3MDM1Mzk2MzA3MjAzNjMyNjYwNDgiLCJ0aW1lIjoxNjEzMH19)](/images/Untitled_rovne.png)

[view replay](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=18822076122371152273768683870879936&time=10859.494619228097&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjUxOTIyOTY4NjAyMDQ2MjgwNTUwMDQxODk1NDgzNDczOTIiLCJ0aW1lIjoyOTY1fSwiZW5kIjp7InBvaW50IjoiMzQzOTg5NjY3MDE3Nzg3MDM1Mzk2MzA3MjAzNjMyNjYwNDgiLCJ0aW1lIjoxNjEzMH19)

1. **Why is the schema not set when the test passes?**
    
    When the test passes, the schema is fetched when the DataSelector is mounted. Here’s what the console logs look like. Here’s the [point](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=63281117997767009521481639631257811&time=26658.881606131647&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjUyMjQ3NDg3MTY0ODEzMDE4OTAwNDQxNTY4NTkwNjkyMzUyIiwidGltZSI6MjI2OTF9LCJlbmQiOnsicG9pbnQiOiI3MDQyMDUyNjE4Njc2NTIzMzI0NzY0ODg4NjgxODg2NTE1MiIsInRpbWUiOjI5NzI5fX0%253D) where the fetch is returned.
    

![Untitled](/images/Untitled%201_tedhk.png)

When the test fails, the schema is fetched earlier which causes it to finish before the DataSelector even tries to fetch the schema. Here’s the [point](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=39915782121880942923393415369457875&time=18653.016595980083&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjMxNDc4Mjk5NzE4NjQxMTIzMTk5NjUzNzQ1Njk2NzAyNDY0IiwidGltZSI6MTQ5Njl9LCJlbmQiOnsicG9pbnQiOiI1NTQ5MjY3MjcwMTcyNDQ1NTMxNTMyMTQzMjE5MDIyMjMzNiIsInRpbWUiOjIzODA5fX0%253D) where the fetch is returned.

![Untitled](/images/Untitled%202_bgksa.png)

1. **Why is the schema fetched when the test fails**
    
    When the test fails, the schema is fetched by an earlier test step. Here’s what we know:
    
    1. An earlier step triggers the DataSelector `[handleSavedQuestionSelect](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=39266745013635850460959165340713127&time=18331.039100924652&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjMxNDc4Mjk5NzE4NjQxMTIzMTk5NjUzNzQ1Njk2NzAyNDY0IiwidGltZSI6MTQ5Njl9LCJlbmQiOnsicG9pbnQiOiI1NTQ5MjY3MjcwMTcyNDQ1NTMxNTMyMTQzMjE5MDIyMjMzNiIsInRpbWUiOjIzODA5fX0%253D)` callback
    2. Which calls [updateQuestion](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=39266745013956724656592693307115035&time=18433.41339869281&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjMxNDc4Mjk5NzE4NjQxMTIzMTk5NjUzNzQ1Njk2NzAyNDY0IiwidGltZSI6MTQ5Njl9LCJlbmQiOnsicG9pbnQiOiI1NTQ5MjY3MjcwMTcyNDQ1NTMxNTMyMTQzMjE5MDIyMjMzNiIsInRpbWUiOjIzODA5fX0%253D) 
    3. Which calls `loadMetadataForCard`
    4. Which calls `entity.api.list` 
    5. Which  calls `MetabaseApi.db_schemas` 
    6. Which makes an [api call](https://app.replay.io/recording/e2etestscenariosjoinsreproductions18512-cannot-join-two-saved-questions-with-same-implicit-explicit-grouped-fieldcyspecjs--4278ec85-6d28-4d07-ab29-45330ac6e016?point=39266745014058140243822074568638608&time=18453&focusWindow=eyJiZWdpbiI6eyJwb2ludCI6IjMxNDc4Mjk5NzE4NjQxMTIzMTk5NjUzNzQ1Njk2NzAyNDY0IiwidGltZSI6MTQ5Njl9LCJlbmQiOnsicG9pbnQiOiI1NTQ5MjY3MjcwMTcyNDQ1NTMxNTMyMTQzMjE5MDIyMjMzNiIsInRpbWUiOjIzODA5fX0%253D)
    

### How do you fix the test?

This test failure is a example of how coupling React component rendering and state management can lead to unpredictable behavior. 

There are two ways to fix this issue

1. Add guards in the test to wait for the API calls to complete
2. Add guards in the application so that the React component can re-render when the api call resolves

In this case, improving the application is the better option because this issue could just as easily effect users in production.