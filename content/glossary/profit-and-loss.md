---
title: "Profit and Loss Statement"
description: "The report that shows how a company turns sales into profit over a period."
tags:
  - finance/glossary
  - finance/income-statement
  - status/learning
aliases: ["Income Statement"]
created: 2026-10-03
---

> [!definition] Profit and Loss Statement
> The profit and loss statement (P&L, or income statement) lists a company's sales and every cost over a period, ending in net profit.

## Explain

Think of it as a waterfall. Money comes in as sales, then different costs take bites out of it, until what is left is profit for the owners.

The order matters. Each line answers a different question: how profitable is the core business ([[operating-profit|Operating Profit]]), how much does debt cost ([[interest-expense-and-coverage|Interest Coverage]]), how much does wear on equipment cost ([[depreciation|Depreciation]]), how much goes to the government ([[profit-before-tax|Profit Before Tax]]), and what is finally left ([[net-profit|Net Profit]]).

> [!formula] The flow
> $$\text{Sales} - \text{Expenses} = \text{Operating profit}$$
> - Operating profit + other income − interest − depreciation = profit before tax
> - Profit before tax − tax = net profit

## Data: Reliance

> [!in-practice] Reliance Industries in numbers
> - Sales ₹10,55,780 crore; expenses ₹8,76,715 crore
> - Operating profit ₹1,79,065 crore; other income ₹28,846 crore
> - Interest ₹27,061 crore; depreciation ₹57,688 crore
> - Profit before tax ₹1,23,162 crore; tax about 22%; net profit ₹95,754 crore

*Source: [Screener.in](https://www.screener.in/company/RELIANCE/consolidated/), Reliance Industries, consolidated, viewed 3 Oct 2026. Amounts in ₹ crore unless stated. Used to show how to read the numbers; this is not investment advice.*

## Example

> [!example] Reliance FY26 waterfall (₹ thousand crore)
> Start at operating profit 179.1, add other income 28.8, subtract interest 27.1 and depreciation 57.7 to reach 123.2 before tax. Tax takes 27.4, leaving 95.8.
>
> Check: 179,065 + 28,846 − 27,061 − 57,688 = 1,23,162 ✓.

```echarts
{"_height":420,"title":{"text":"Reliance FY26: from operating profit to net profit","subtext":"₹ thousand crore. Source: Screener.in, consolidated.","left":0},"tooltip":{"trigger":"axis","axisPointer":{"type":"shadow"}},"legend":{"right":0,"top":0,"data":["Total","Increase","Decrease"]},"grid":{"left":56,"right":20,"top":84,"bottom":70},"xAxis":{"type":"category","data":["Operating profit","Other income","Interest","Depreciation","Profit before tax","Tax","Net profit"],"axisLabel":{"interval":0,"rotate":25}},"yAxis":{"type":"value","name":"₹ thousand crore"},"series":[{"name":"Base","type":"bar","stack":"w","silent":true,"itemStyle":{"color":"transparent"},"tooltip":{"show":false},"data":[0,179.065,180.854,123.166,0,95.754,0]},{"name":"Total","type":"bar","stack":"w","data":[179.1,"-","-","-",123.2,"-",95.8],"itemStyle":{"color":"#284b63"},"label":{"show":true,"position":"top"}},{"name":"Increase","type":"bar","stack":"w","data":["-",28.8,"-","-","-","-","-"],"itemStyle":{"color":"#2e8b57"},"label":{"show":true,"position":"top"}},{"name":"Decrease","type":"bar","stack":"w","data":["-","-",27.1,57.7,"-",27.4,"-"],"itemStyle":{"color":"#c62b3c"},"label":{"show":true,"position":"top"}}]}
```

*Chart: depreciation is the biggest single deduction after operating costs; other income partly offsets interest, and tax takes about a fifth of profit before tax.*

> [!tip] Read it top to bottom, then year to year
> A single year tells you little. Put several years side by side to see whether sales and each cost line move together.

## My Take

> [!my-take] My Take
> _Which line in this waterfall would you watch most closely, and why?_

## Related

- [[operating-profit|Operating Profit]]
- [[net-profit|Net Profit]]
- [[depreciation|Depreciation]]
- [[profit-before-tax|Profit Before Tax]]
- [[sales-revenue|Sales (Revenue)]]
