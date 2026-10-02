---
title: "CAGR"
description: "The steady yearly growth rate that would turn a starting number into an ending number."
tags:
  - finance/glossary
  - finance/growth
  - status/learning
aliases: ["Compound Annual Growth Rate", "Compounded Growth"]
created: 2026-10-03
---

> [!definition] CAGR
> Compound annual growth rate (CAGR) is the single yearly rate at which something would have to grow, year after year, to get from its start value to its end value.

## Explain

Growth in real life is bumpy: up 20%, then down 5%, then up 12%. CAGR smooths this into one steady rate so you can compare, for example, a company's sales growth over 3, 5 and 10 years.

It uses the same compounding idea as [[future-value|Future Value]], run backwards to find the rate.

> [!formula] CAGR
> $$\text{CAGR} = \left(\frac{\text{End value}}{\text{Start value}}\right)^{1/n} - 1$$
> - End value and start value: the two figures being compared
> - n: number of years between them

## Data: Reliance

> [!in-practice] Reliance Industries in numbers
> - Screener: sales growth 15% (10 years), 18% (5 years), 6% (3 years)
> - Profit growth 10%, 12%, 5%; stock price −15% over 1 year, 0% over 3 and 5 years
> - FY16 sales ₹2,72,583 crore; FY26 ₹10,55,780 crore

*Source: [Screener.in](https://www.screener.in/company/RELIANCE/consolidated/), Reliance Industries, consolidated, viewed 3 Oct 2026. Amounts in ₹ crore unless stated. Used to show how to read the numbers; this is not investment advice.*

## Example

> [!example] Reproducing Screener's numbers
> 10 years: (1,055,780 ÷ 272,583)^(1/10) − 1 = 14.5%, shown as 15%.
>
> 5 years: (1,055,780 ÷ 466,307)^(1/5) − 1 = 17.8%, shown as 18%.
>
> 3 years: (1,055,780 ÷ 876,396)^(1/3) − 1 = 6.4%, shown as 6%.
>
> Growth slowed sharply in the last three years even though the 10-year figure looks strong.

```echarts
{"_height":380,"title":{"text":"Reliance sales, FY15 to FY26","subtext":"₹ thousand crore. Source: Screener.in, consolidated.","left":0},"tooltip":{"trigger":"axis"},"grid":{"left":56,"right":20,"top":80,"bottom":36},"xAxis":{"type":"category","data":["FY15","FY16","FY17","FY18","FY19","FY20","FY21","FY22","FY23","FY24","FY25","FY26"]},"yAxis":{"type":"value","name":"₹ thousand crore"},"series":[{"name":"Sales","type":"bar","data":[374.4,272.6,304,390.8,568.3,596.7,466.3,694.7,876.4,899,962.8,1055.8],"itemStyle":{"borderRadius":[4,4,0,0]},"label":{"show":true,"position":"top","fontSize":10}}]}
```

*Chart: sales dipped in FY16 and FY21, then climbed past ₹10 lakh crore in FY26. A CAGR hides these dips.*

> [!warning] The start year matters
> CAGR depends on the start and end years you pick. Starting after a dip makes growth look better; starting at a peak makes it look worse.

## My Take

> [!my-take] My Take
> _Why does the 3-year growth rate tell a different story from the 10-year rate?_

## Related

- [[future-value|Future Value]]
- [[ttm|TTM (Trailing Twelve Months)]]
- [[sales-revenue|Sales (Revenue)]]
- [[compound-interest|Compound Interest]]
