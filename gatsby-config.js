const dotenv = require("dotenv").config()

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }

module.exports = {
  siteMetadata: {
    title: `Josiah Singh`,
    description: `Welcome to my personal blog.`,
    author: `Josiah`,
    social: {
      twitter: `josiahernest`,
      linkedin: `josiahameetsingh`,
    },
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // prettier-ignore
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e8c2yakczoh8`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
