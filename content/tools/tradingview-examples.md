---
title: TradingView examples
description: Live market widgets you can paste into any note.
tags:
  - tools
---

A `tradingview` code block holds a few `key: value` lines. The `type` line picks the widget. Prices are live, and some exchange data is delayed by TradingView.

> [!warning] Indian stocks cannot be embedded
> TradingView does not allow NSE and BSE stocks (such as Reliance) in free embeds; the widget says "only available on TradingView". Use these widgets for indices, gold, currencies and global stocks. For Indian stock prices see [[tools/price-chart-example|Stock price chart example]].

## Ticker strip

````
```tradingview
type: ticker
symbols: NSE:NIFTY, NSE:BANKNIFTY, BSE:SENSEX, FX_IDC:USDINR, TVC:GOLD
```
````

```tradingview
type: ticker
symbols: NSE:NIFTY, NSE:BANKNIFTY, BSE:SENSEX, FX_IDC:USDINR, TVC:GOLD
```

## Full chart

Set `interval` to `D` (daily), `W` (weekly) or a number of minutes such as `60`. Optional `height` is in pixels.

````
```tradingview
type: chart
symbol: TVC:GOLD
interval: D
height: 520
```
````

```tradingview
type: chart
symbol: TVC:GOLD
interval: D
height: 520
```

## Small chart

`range` can be `1M`, `3M`, `12M`, `60M` or `ALL`.

````
```tradingview
type: mini
symbol: FX_IDC:USDINR
range: 12M
```
````

```tradingview
type: mini
symbol: FX_IDC:USDINR
range: 12M
```

## Symbol info card

````
```tradingview
type: info
symbol: NASDAQ:AAPL
```
````

```tradingview
type: info
symbol: NASDAQ:AAPL
```

> [!note]
> Symbols are written `EXCHANGE:TICKER`, for example `BSE:SENSEX`, `TVC:GOLD` or `NASDAQ:AAPL`. Search a stock on tradingview.com to find its exact symbol.
