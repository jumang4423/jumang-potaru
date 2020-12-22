const path = require("path");

module.exports = {
  pathPrefix: "/jumang-potaru",
  siteMetadata: {
    title: `jumang potaru`,
    description: `jumang potaru`,
    author: `jumang`,
  },
  plugins: [
    {
      resolve:`gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: 'React',
        allExtensions: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "@": path.join(__dirname, "src")
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jumang-potaru`,
        short_name: `jumang-potaru`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
