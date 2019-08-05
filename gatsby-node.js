const path = require(`path`)

// const createTagPages = (createPage, posts) => {
//   const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js")
//   const singleTagIndexTemplate = path.resolve("src/templates/singleTagIndex.js")

//   const postsByTag = {}

//   posts.forEach(({ node }) => {
//     if (node.frontmatter.tags) {
//       node.frontmatter.tags.forEach(tag => {
//         if (!postsByTag[tag]) {
//           postsByTag[tag] = []
//         }

//         postsByTag[tag].push(node)
//       })
//     }
//   })

//   const tags = Object.keys(postsByTag)

//   createPage({
//     path: "/tags",
//     component: allTagsIndexTemplate,
//     context: {
//       tags: tags.sort(),
//     },
//   })

//   tags.forEach(tagName => {
//     const posts = postsByTag[tagName]

//     createPage({
//       path: `/tags/${tagName}`,
//       component: singleTagIndexTemplate,
//       context: {
//         posts,
//         tagName,
//       },
//     })
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blogPost-contentful.js")
  return graphql(
    `
      {
        allContentfulMyCoolBlog {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulMyCoolBlog.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
  })
}
