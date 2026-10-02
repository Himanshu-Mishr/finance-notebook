// Draws ```echarts blocks (Apache ECharts) and ```tradingview blocks (TradingView widgets).
const ECHARTS_URL = "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"
const TV_BASE = "https://s3.tradingview.com/external-embedding/"

const loaders: Record<string, Promise<void>> = {}
function loadScript(url: string): Promise<void> {
  loaders[url] ||= new Promise((resolve, reject) => {
    const s = document.createElement("script")
    s.src = url
    s.onload = () => resolve()
    s.onerror = () => reject(new Error("Could not load " + url))
    document.head.appendChild(s)
  })
  return loaders[url]
}

const isDark = () => document.documentElement.getAttribute("saved-theme") === "dark"
const css = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

function showError(host: HTMLElement, message: string) {
  host.innerHTML = ""
  const div = document.createElement("div")
  div.className = "widget-error"
  div.textContent = message
  host.appendChild(div)
}

// replace the raw code block with a placeholder host and remember its config
function hosts(selector: string) {
  const out: { host: HTMLElement; config: string }[] = []
  for (const code of document.querySelectorAll<HTMLElement>(selector)) {
    const pre = code.closest("pre") ?? code
    const host = document.createElement("div")
    host.className = "widget-block"
    host.dataset.kind = selector
    pre.replaceWith(host)
    out.push({ host, config: code.getAttribute("data-config") ?? code.textContent ?? "" })
  }
  return out
}

/* ---------------- ECharts ---------------- */

let themeSeq = 0
function echartsTheme() {
  const text = css("--darkgray"),
    line = css("--lightgray"),
    strong = css("--dark")
  const axis = {
    axisLine: { lineStyle: { color: css("--gray") } },
    axisTick: { lineStyle: { color: css("--gray") } },
    axisLabel: { color: text },
    nameTextStyle: { color: text },
    splitLine: { lineStyle: { color: line } },
    splitArea: { show: false },
  }
  return {
    color: [
      css("--secondary"),
      "#d98e04",
      "#2e8b57",
      "#c62b3c",
      "#7b3fc4",
      css("--tertiary"),
      "#0e8a8a",
    ],
    backgroundColor: "transparent",
    textStyle: { color: text, fontFamily: css("--bodyFont") || "serif" },
    title: { textStyle: { color: strong, fontFamily: css("--headerFont") }, subtextStyle: { color: text } },
    legend: { textStyle: { color: text } },
    categoryAxis: axis,
    valueAxis: axis,
    logAxis: axis,
    timeAxis: axis,
    tooltip: {
      backgroundColor: css("--light"),
      borderColor: line,
      textStyle: { color: strong },
    },
  }
}

type Chart = { host: HTMLElement; box: HTMLElement; option: any; chart: any }
const charts: Chart[] = []

function drawChart(c: Chart) {
  const echarts = (window as any).echarts
  if (c.chart) c.chart.dispose()
  const name = "nb" + ++themeSeq
  echarts.registerTheme(name, echartsTheme())
  c.chart = echarts.init(c.box, name, { renderer: "canvas" })
  c.chart.setOption(c.option)
}

async function setupCharts() {
  charts.length = 0
  const found = hosts("code.echarts-block")
  if (found.length === 0) return
  try {
    await loadScript(ECHARTS_URL)
  } catch (e) {
    for (const f of found) showError(f.host, "Chart library failed to load. Check your connection.")
    return
  }
  for (const f of found) {
    let option: any
    try {
      option = JSON.parse(f.config)
    } catch (e) {
      showError(f.host, "Chart error: the chart data is not valid JSON. " + (e as Error).message)
      continue
    }
    const height = Number(option._height) || 380
    delete option._height
    const box = document.createElement("div")
    box.className = "echarts-box"
    box.style.height = height + "px"
    f.host.appendChild(box)
    const c: Chart = { host: f.host, box, option, chart: null }
    drawChart(c)
    charts.push(c)
    const ro = new ResizeObserver(() => c.chart && c.chart.resize())
    ro.observe(box)
    window.addCleanup(() => {
      ro.disconnect()
      c.chart && c.chart.dispose()
    })
  }
}

/* ---------------- TradingView ---------------- */

function parseKeyValues(text: string) {
  const out: Record<string, string> = {}
  for (const line of text.split("\n")) {
    const i = line.indexOf(":")
    if (i < 1) continue
    out[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim()
  }
  return out
}

const tvList: { host: HTMLElement; kv: Record<string, string> }[] = []

function drawTv(host: HTMLElement, kv: Record<string, string>) {
  const type = (kv.type || "chart").toLowerCase()
  const theme = isDark() ? "dark" : "light"
  let file = "",
    height = Number(kv.height) || 0,
    config: any = {}
  const symbol = kv.symbol || "NSE:NIFTY"
  if (type === "chart") {
    file = "embed-widget-advanced-chart.js"
    height ||= 520
    config = {
      autosize: true,
      symbol,
      interval: kv.interval || "D",
      timezone: "Asia/Kolkata",
      theme,
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_side_toolbar: false,
      support_host: "https://www.tradingview.com",
    }
  } else if (type === "ticker") {
    file = "embed-widget-ticker-tape.js"
    height ||= 78
    const symbols = (kv.symbols || "NSE:NIFTY, NSE:BANKNIFTY, BSE:SENSEX")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => ({ proName: s, title: s.split(":").pop() }))
    config = {
      symbols,
      showSymbolLogo: false,
      colorTheme: theme,
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    }
  } else if (type === "mini") {
    file = "embed-widget-mini-symbol-overview.js"
    height ||= 220
    config = {
      symbol,
      width: "100%",
      height,
      locale: "en",
      dateRange: kv.range || "12M",
      colorTheme: theme,
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
    }
  } else if (type === "info") {
    file = "embed-widget-symbol-info.js"
    height ||= 190
    config = { symbol, width: "100%", locale: "en", colorTheme: theme, isTransparent: true }
  } else {
    showError(host, "TradingView block: unknown type '" + type + "'. Use chart, ticker, mini or info.")
    return
  }
  host.innerHTML = ""
  const box = document.createElement("div")
  box.className = "tv-box"
  box.style.height = height + "px"
  const container = document.createElement("div")
  container.className = "tradingview-widget-container"
  const inner = document.createElement("div")
  inner.className = "tradingview-widget-container__widget"
  container.appendChild(inner)
  const s = document.createElement("script")
  s.type = "text/javascript"
  s.src = TV_BASE + file
  s.async = true
  s.text = JSON.stringify(config)
  container.appendChild(s)
  box.appendChild(container)
  host.appendChild(box)
  const credit = document.createElement("div")
  credit.className = "tv-credit"
  credit.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener" target="_blank">Charts by TradingView</a>'
  host.appendChild(credit)
}

function setupTv() {
  tvList.length = 0
  for (const f of hosts("code.tv-block")) {
    const kv = parseKeyValues(f.config)
    tvList.push({ host: f.host, kv })
    drawTv(f.host, kv)
  }
}

/* ---------------- wiring ---------------- */

document.addEventListener("nav", () => {
  setupCharts()
  setupTv()
})

const onTheme = () => {
  for (const c of charts) if (c.chart) drawChart(c)
  for (const t of tvList) if (t.host.isConnected) drawTv(t.host, t.kv)
}
document.addEventListener("themechange", onTheme)
