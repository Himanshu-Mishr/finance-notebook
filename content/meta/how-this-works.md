---
title: How this works
description: Plain-English guide to adding notes and publishing this site.
tags:
  - meta
---

## Publishing
Edit or add any `.md` file, then run:

```
git add . && git commit -m "message" && git push
```

The site rebuilds automatically and updates in about 1–2 minutes.

## Adding content
Open Claude Code in this folder and say what you are learning. It writes the note, links it, updates the changelog and publishes.

## Writing your own take
Open the note's `.md` file, find the **My Take** box and type under it. Then publish as above.

## If the site did not update
Check the **Actions** tab of the repository on GitHub. A red ✗ means a failed build. Ask Claude Code to "check the failed deploy and fix it".

See also: [[meta/style-guide|Style guide]], [[CHANGELOG|Changelog]].
