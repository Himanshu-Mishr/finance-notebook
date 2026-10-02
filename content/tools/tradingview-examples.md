---
title: TradingView examples
description: Live market widgets you can paste into any note.
tags:
  - tools
---

A `tradingview` code block holds a few `key: value` lines. The `type` line picks the widget. Prices are live, and some exchange data is delayed by TradingView.

## Ticker strip

````
```tradingview
type: ticker
symbols: NSE:NIFTY, NSE:BANKNIFTY, BSE:SENSEX, NSE:RELIANCE, NSE:TCS
```
````

```tradingview
type: ticker
symbols: NSE:NIFTY, NSE:BANKNIFTY, BSE:SENSEX, NSE:RELIANCE, NSE:TCS
```

## Full chart

Set `interval` to `D` (daily), `W` (weekly) or a number of minutes such as `60`. Optional `height` is in pixels.

````
```tradingview
type: chart
symbol: NSE:RELIANCE
interval: D
height: 520
```
````

```tradingview
type: chart
symbol: NSE:RELIANCE
interval: D
height: 520
```

## Small chart

`range` can be `1M`, `3M`, `12M`, `60M` or `ALL`.

````
```tradingview
type: mini
symbol: NSE:TCS
range: 12M
```
````

```tradingview
type: mini
symbol: NSE:TCS
range: 12M
```

## Symbol info card

````
```tradingview
type: info
symbol: NSE:INFY
```
````

```tradingview
type: info
symbol: NSE:INFY
```

> [!note]
> Symbols are written `EXCHANGE:TICKER`, for example `NSE:HDFCBANK`, `BSE:SENSEX` or `NASDAQ:AAPL`. Search a stock on tradingview.com to find its exact symbol.
