import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
        usedSavedState: false,
        mapFn: (node) => {
            if (node.file) {
                // node is a file
                if (node.displayName.length > 27) {
                    node.displayName = node.displayName.substring(0, 26) + "…"
                }
            }
            return node
        },
    })),
  ],
  right: [
    Component.Graph({
        localGraph: {
            showTags: false,
        },
        globalGraph: {
            showTags: false,
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
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
        usedSavedState: false,
        mapFn: (node) => {
            if (node.file) {
                // node is a file
                if (node.displayName.length > 27) {
                    node.displayName = node.displayName.substring(0, 26) + "…"
                }
            }
            return node
        },
    })),
  ],
  right: [],
}
