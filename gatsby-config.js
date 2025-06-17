/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gospodinov Style`,
    description: `Бръснарница Gospodinov Style Град Пловдив улица „Златю Бояджиев“ 3, Северен, Кършияка, За нас постригването не е просто процедура а цяло изживяване `,
    author: `@Dobrin Dobrev`,
    siteUrl: `https://gospodinovstyle.com/`,
    keywords: [
      'Gospodinov Style',
      'бръснарница',
      'Пловдив',
      'Бръснарница в Пловдиж',
      'Мъжко подстригване',
      'Петър Господинов',
      'gospodinovstyle',
      'господинов',
      'бръснарница в Пловдив'
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "AW-17217581614",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    }, 

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `customers`,
        path: `${__dirname}/static/customers`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo2.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
