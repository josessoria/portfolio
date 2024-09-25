require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `José soria`,
    description: `Full stack engineer. I build software for startups and big companies with focus on eye-catching design, usability, a3y and web optimization.`,
    author: `@josessoria`,
  },
  plugins: [
    {
      resolve: `openlib-books`,
      options: {
        listSrc: 'content/books.json',
        coversFolderPath: 'src/assets/images/book-covers',
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://medium.com/feed/@josesoriap21`,
        name: `Medium`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`, // Asegúrate de que esta ruta sea correcta
      },
    },

    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://dou.ua/users/aleksandr-tovmach/articles/feed/`,
        name: `DOU`,
        parserOption: {
          headers: { 'User-Agent': 'alexandrtovmach.com' },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bookCovers`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jose Soria`,
        short_name: `josesoria.com.ar`,
        start_url: `/`,
        background_color: `#f6f6f2`,
        theme_color: `#f6f6f2`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134175339-1',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
