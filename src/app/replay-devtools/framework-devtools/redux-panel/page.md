---
title: Redux panel
description: See how your application state changed over time with Replay’s Redux panel
image: /images/redux.png
imageHeight: 414
---

## Basics

The Redux panel has all of the features you’ve come to expect to find in Redux DevTools along with functionality that are only possible with time travel.

### Actions

- View the actions that were dispatched during the recording and jump to the point in time they were dispatched.
- Filter the actions list by name
- Inspect the action payload
- Inspect the application state after each dispatch
- Inspect the application state diff after each dispatch

## Time Travel

### Jump to dispatch

Unlike Redux DevTools which simply plays to the point in time of the the dispatch, with Replay you can jump to the dispatch itself and inspect the thunk that kicked it off.

### View redux all application state

One of the most common frustrations with using Redux and Redux DevTools is that only plain objects can be persisted and replayed with DevTools.

Because with Replay there’s a browser in the cloud that re-runs to the dispatch, Redux DevTools is both far faster, and able to show any object that was stored in a reducer.

## Universal

The Redux panel is compatible with other state management tools such as Jotai and Zustand.

##
