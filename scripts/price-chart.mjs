// Prints an ECharts block (candlestick + volume + moving averages) for a stock.
// Usage: node scripts/price-chart.mjs RELIANCE.NS 1y "Reliance Industries"
// Yahoo symbols: NSE stocks end in .NS (RELIANCE.NS), BSE in .BO, indices like ^NSEI (Nifty 50).
// Ranges: 3mo, 6mo, 1y, 2y, 5y. The data is a snapshot: it does not update by itself.
const [symbol, range = "1y", name = symbol] = process.argv.slice(2)
if (!symbol) {
  console.error("Usage: node scripts/price-chart.mjs <YAHOO_SYMBOL> [range] [display name]")
  process.exit(1)
}
const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=1d`
const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
if (!res.ok) throw new Error(`Yahoo Finance returned ${res.status} for ${symbol}`)
const r = (await res.json()).chart.result?.[0]
if (!r) throw new Error(`No data for ${symbol}`)
const q = r.indicators.quote[0]
const days = [], ohlc = [], vol = []
r.timestamp.forEach((t, i) => {
  if ([q.open[i], q.close[i], q.low[i], q.high[i]].some((v) => v == null)) return
  const d = new Date((t + r.meta.gmtoffset) * 1000)
  days.push(d.toISOString().slice(0, 10))
  ohlc.push([q.open[i], q.close[i], q.low[i], q.high[i]].map((v) => +v.toFixed(2)))
  vol.push({ v: q.volume[i] ?? 0, up: q.close[i] >= q.open[i] })
})
const ma = (n) =>
  ohlc.map((_, i) => (i < n - 1 ? "-" : +(ohlc.slice(i - n + 1, i + 1).reduce((a, c) => a + c[1], 0) / n).toFixed(2)))
const UP = "#2e8b57", DN = "#c62b3c"
const cur = r.meta.currency === "INR" ? "₹" : r.meta.currency + " "
const option = {
  _height: 560,
  title: { text: `${name} (${symbol})`, subtext: `Daily prices in ${r.meta.currency}, ${days[0]} to ${days.at(-1)}. Source: Yahoo Finance.`, left: 0 },
  tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
  legend: { right: 0, top: 0, data: ["Price", "MA20", "MA50"] },
  axisPointer: { link: [{ xAxisIndex: "all" }] },
  grid: [{ left: 64, right: 20, top: 84, height: "52%" }, { left: 64, right: 20, top: "73%", height: "13%" }],
  xAxis: [
    { type: "category", data: days, boundaryGap: true, axisLabel: { show: false }, min: "dataMin", max: "dataMax" },
    { type: "category", gridIndex: 1, data: days, boundaryGap: true, min: "dataMin", max: "dataMax" },
  ],
  yAxis: [{ scale: true, axisLabel: { formatter: cur + "{value}" } }, { gridIndex: 1, splitNumber: 2, axisLabel: { show: false }, splitLine: { show: false } }],
  dataZoom: [
    { type: "inside", xAxisIndex: [0, 1], start: 0, end: 100 },
    { type: "slider", xAxisIndex: [0, 1], bottom: 8, height: 18, start: 0, end: 100 },
  ],
  series: [
    { name: "Price", type: "candlestick", data: ohlc, itemStyle: { color: UP, color0: DN, borderColor: UP, borderColor0: DN } },
    { name: "MA20", type: "line", data: ma(20), smooth: true, symbol: "none", lineStyle: { width: 1.5 }, color: "#d98e04" },
    { name: "MA50", type: "line", data: ma(50), smooth: true, symbol: "none", lineStyle: { width: 1.5 }, color: "#7b3fc4" },
    { name: "Volume", type: "bar", xAxisIndex: 1, yAxisIndex: 1, data: vol.map((x) => ({ value: x.v, itemStyle: { color: x.up ? UP : DN, opacity: 0.7 } })) },
  ],
}
const json = JSON.stringify(option).replace(/\[\[/g, "[ [")
console.log("```echarts\n" + json + "\n```")
