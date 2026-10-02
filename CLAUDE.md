# CLAUDE.md — Finance Notebook

## What this repo is
Himanshu's personal learning notebook, published with Quartz to GitHub Pages.
Live site: https://himanshu-mishr.github.io/finance-notebook/
He is learning financial markets and analysis by doing, not by reading a textbook cover to cover.
He is not a coder: never ask him to edit config or run commands beyond git. Handle it yourself.

## How a session works
1. He tells you a topic, or a question he ran into.
2. Check existing notes first (search content/), so you extend and link rather than duplicate.
3. Write or extend notes using templates/topic-note.md. Create glossary notes for new terms.
4. Link generously with [[wikilinks]]: to the glossary, to prerequisites, to related notes.
5. Update the section index.md if you added a note.
6. Add an entry to content/CHANGELOG.md.
7. Run `npx quartz build`. Fix all errors.
8. Commit with a clear message ("Add: Time Value of Money"), then push to main.
9. Reply with: what you added, the live link(s) (live in about 1–2 minutes), and 1–2 questions for him to answer in his My Take.

## Content rules
- Teach from intuition to formula to worked example to practice. Never start with the formula.
- Use concrete numbers. Default to Indian context (₹, NSE/BSE, RBI, SEBI) where natural, with global (US/$) comparisons where useful.
- Every practice problem has a solution in a collapsed [!solution]- callout.
- Use the callout vocabulary consistently (see content/meta/style-guide.md):
  note, tip, warning, example, question, quote, definition, formula,
  in-practice, critical, recommendation, solution, my-take.
- Accuracy matters more than coverage. If something is contested or simplified, say so in a [!note].
- Keep each note to one idea. Split big topics into several linked notes.
- Tables at most ~7 columns (they must read on a phone). Every chart gets a caption.
- Frontmatter values containing a colon must be quoted (YAML), or the build fails.
- Do not put ₹ inside `$...$` math (KaTeX has no glyph); write it outside the formula.

## My Take: protected area
- The [!my-take] callouts are HIS voice. Never write opinions in them on his behalf.
- New notes get a My Take section with a short italic prompt to guide him.
- If he dictates his take to you, write it in his words, lightly cleaned up, and nothing more.
- Never delete or rewrite existing My Take content. If a note is restructured, carry it over unchanged.

## Status tags
status/seed (outline), status/learning (default for new notes), status/solid (only when he says he's got it).

## Don'ts
- No Python. Any tooling must be Node.js.
- No runtime JS chart libraries; use Mermaid or hand-written SVG.
- Don't change site config, layout or styling unless he asks. Log any such change as **Site** in the changelog.
- Never push a build that fails locally.
