import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Pywriter: Dev Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'umami', 
      host: 'https://analytics.williamusic.com/ramen', 
      websiteId: 'fa4f8c5b-4767-4821-b063-f62c4cb90223',
    },
    locale: "en-US",
    baseUrl: "dev-garden.williamusic.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Aribau Grotesk",
        body: "Sánchez Niu",
        code: "Fira Mono",
      },
      colors: {
        lightMode: {
          light: "hsl(44, 58%, 96%)",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "hsl(71, 20%, 61%)",
          tertiary: "hsl(161, 32%, 56%)",
          highlight: "hsla(58.8, 100%, 50%, 0.05)",
        },
        darkMode: {
          light: "hsl(40, 5%, 12%)",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "hsl(0, 0%, 83%)",
          dark: "#ebebec",
          secondary: "hsl(71, 20%, 61%)",
          tertiary: "hsl(161, 32%, 56%)",
          highlight: "hsla(58.8, 100%, 50%, 0.05)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
