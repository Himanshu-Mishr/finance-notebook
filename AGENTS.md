# AGENTS.md — Finance Notebook

Instructions for any AI coding agent working in this repo (Claude Code, OpenAI Codex, others). Read all of it before starting.

## What this repo is
Himanshu's personal learning notebook, published with Quartz to GitHub Pages.
Live site: https://himanshu-mishr.github.io/finance-notebook/
He is learning financial markets and analysis by doing, not by reading a textbook cover to cover.
He is not a coder: never ask him to edit config or run commands beyond git. Handle it yourself.

## Current structure
```
content/
  index.md        home page
  CHANGELOG.md    log, newest first
  glossary/       one short note per term (has its own index.md)
  tools/          examples of the theme, ECharts charts and TradingView widgets (copy from here)
  assets/         images and SVG charts
templates/topic-note.md   note template (outside content/, not published)
```
There is no `finance/` or `meta/` folder any more. New subjects or topics get a new top-level folder in `content/` with an `index.md` listing its notes in order. File names are `kebab-case.md`, numbered where order matters.

## How a session works
1. He tells you a topic, or a question he ran into.
2. Check existing notes first (search content/), so you extend and link rather than duplicate.
3. Write or extend notes using templates/topic-note.md. Create glossary notes for new terms.
4. Link generously with [[wikilinks]]: to the glossary, to prerequisites, to related notes.
5. Update the index.md of the folder you added to (the glossary index lists every term).
6. Add an entry to content/CHANGELOG.md.
7. Run `npx quartz build`. Fix all errors.
8. Commit with a clear message ("Add: Time Value of Money"), then push to main.
9. Reply with: what you added, the live link(s) (live in about 1–2 minutes), and 1–2 questions for him to answer in his My Take.

## Content rules
- Teach from intuition to formula to worked example to practice. Never start with the formula.
- Use concrete numbers. Default to Indian context (₹, NSE/BSE, RBI, SEBI) where natural, with global (US/$) comparisons where useful.
- Every practice problem has a solution in a collapsed [!solution]- callout.
- Use the callout vocabulary consistently (all styles live in quartz/styles/custom.scss):
  note, tip, warning, example, question, quote, definition, formula,
  in-practice, critical, recommendation, solution, my-take.
- Accuracy matters more than coverage. If something is contested or simplified, say so in a [!note].
- Keep each note to one idea. Split big topics into several linked notes.
- Tables at most ~7 columns (they must read on a phone). Every chart gets a caption.
- Frontmatter values containing a colon must be quoted (YAML), or the build fails.
- Do not put ₹ inside `$...$` math (KaTeX has no glyph); write it outside the formula.

## Voice and reference books
- Follow STYLE.md for tone, structure and how ideas are explained. If it is still a skeleton, say so and ask Himanshu before inventing a voice.
- Reference books live in references/ (see references/README.md for the list and file names). They are copyrighted and excluded from git: never copy them into content/, never commit them, never quote more than a short phrase.
- Use the books for accuracy and for the way ideas are explained, then write in our own words. In "Go deeper" boxes, name the book and chapter to read.
- When you read a book to improve STYLE.md, describe the voice in your own words and keep that file free of copied passages.

## My Take: protected area
- The [!my-take] callouts are HIS voice. Never write opinions in them on his behalf.
- New notes get a My Take section with a short italic prompt to guide him.
- If he dictates his take to you, write it in his words, lightly cleaned up, and nothing more.
- Never delete or rewrite existing My Take content. If a note is restructured, carry it over unchanged.

## Status tags
status/seed (outline), status/learning (default for new notes), status/solid (only when he says he's got it).

## Charts and widgets
- **ECharts:** a code block tagged `echarts` holding strict JSON (no comments, no functions). Optional `"_height": 400`. Copy a pattern from content/tools/echarts-examples.md. Every chart gets a one-line italic caption below it. Never write a bare `[[x]]` in the JSON, it is read as a wikilink; keep arrays like `[ [1,2], [3,4] ]`.
- **TradingView:** a code block tagged `tradingview` with `key: value` lines: `type` (chart, ticker, mini, info), `symbol` (EXCHANGE:TICKER such as TVC:GOLD), `symbols` for tickers, optional `interval`, `range`, `height`. See content/tools/tradingview-examples.md.
- TradingView cannot embed NSE/BSE stocks (it says "only available on TradingView"). Use it for indices, gold, currencies and global stocks only.
- **Indian stock price charts:** run `node scripts/price-chart.mjs TCS.NS 1y "TCS"` (Yahoo symbols: .NS for NSE, .BO for BSE, ^NSEI for Nifty 50) and paste the printed echarts block into the note. Add a caption, the data source and download date, and a link to the stock on TradingView. See content/tools/price-chart-example.md. It is a snapshot; refresh it when asked.
- Both are drawn by quartz/plugins/transformers/widgets.ts and quartz/components/scripts/widgets.inline.ts. Do not edit those unless asked; log any change as **Site**.
- Check the page in a browser before pushing when you add a new chart type.

## Theme
Quartz default colour palette, Inter headings, Literata body, JetBrains Mono code. Changing it counts as a **Site** change.

## Don'ts
- No Python. Any tooling must be Node.js.
- Charts: use Apache ECharts for teaching charts, TradingView widgets for live stocks and market data, Mermaid for simple diagrams. No other chart libraries.
- Don't change site config, layout or styling unless he asks. Log any such change as **Site** in the changelog.
- Never push a build that fails locally.
