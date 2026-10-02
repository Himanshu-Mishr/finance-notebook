import { QuartzTransformerPlugin } from "../types"
import { Code, Root } from "mdast"
import { visit } from "unist-util-visit"
// @ts-ignore
import widgetsScript from "../../components/scripts/widgets.inline"
import widgetsStyle from "../../components/styles/widgets.inline.scss"

/**
 * Turns ```echarts and ```tradingview code blocks into placeholders.
 * The browser script (widgets.inline.ts) then draws the chart or widget.
 */
export const Widgets: QuartzTransformerPlugin = () => {
  return {
    name: "Widgets",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "code", (node: Code) => {
              if (node.lang === "echarts" || node.lang === "tradingview") {
                node.data = {
                  hProperties: {
                    className: [node.lang === "echarts" ? "echarts-block" : "tv-block"],
                    "data-config": node.value,
                  },
                }
              }
            })
          }
        },
      ]
    },
    externalResources() {
      return {
        js: [
          {
            script: widgetsScript,
            loadTime: "afterDOMReady",
            contentType: "inline",
            moduleType: "module",
          },
        ],
        css: [{ content: widgetsStyle, inline: true }],
      }
    },
  }
}
