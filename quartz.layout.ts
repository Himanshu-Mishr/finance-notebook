import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Himanshu-Mishr/finance-notebook",
      Changelog: "https://himanshu-mishr.github.io/finance-notebook/CHANGELOG",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.2,
        repelForce: 0.9,
        centerForce: 0.25,
        linkDistance: 38,
        fontSize: 0.55,
        showTags: false,
        focusOnHover: true,
        enableRadial: false,
      },
      globalGraph: {
        depth: -1,
        scale: 1,
        repelForce: 0.9,
        centerForce: 0.2,
        linkDistance: 40,
        fontSize: 0.55,
        showTags: false,
        focusOnHover: true,
        enableRadial: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [],
}
