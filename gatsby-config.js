module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Carbon",
    description: "A Gatsby theme for the carbon design system",
    keywords: "gatsby,theme,carbon",
    siteUrl: "https://gatsby-starter-carbon-theme.pages.dev",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#00ff00",
        display: "browser",
      },
    },
    'gatsby-theme-carbon'
  ],
};
