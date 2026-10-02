# Finance Notebook

Live site: https://himanshu-mishr.github.io/finance-notebook/

**To publish:** `git add . && git commit -m "message" && git push` — the site updates in about 1–2 minutes. That's all.

**To add content:** open Claude Code or Codex in this folder and say what you're learning. Both read the rules in `AGENTS.md` (Claude Code reaches it through `CLAUDE.md`).

**To write your own take:** open the note's `.md` file, find "My Take", type under it, then push.

**To preview locally (optional):** `npx quartz build --serve`, then open http://localhost:8080.

**If the site didn't update:** check the repo's **Actions** tab. A red ✗ means a failed build. Ask Claude Code to "check the failed deploy and fix it".

---
Built with [Quartz v4](https://quartz.jzhao.xyz). Changes from the original brief: the `pageTitleSuffix`/analytics were removed, and the unused social-card (OG image) generator was turned off to keep builds fast and offline-safe.

