---
title: Troubleshooting Guide
---

# Failed to initialize metadata file

```bash
Failed to initialize metadata file at /home/runner/.replay/PLAYWRIGHT_METADATA_0

Error: ENOENT: no such file or directory, open '/home/runner/.replay/PLAYWRIGHT_METADATA_0'
```

If you’re seeing this error in CI, it’s likely that the replay browser wasn’t installed correctly. The browser should be installed alongside all your other dependencies, but in the case that it’s not, try the following:

1. Disable caching
2. Have an explicit step for installing the replay browser - `npx replayio install`
