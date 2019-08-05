import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

class Layout extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulMyCoolBlog.edges

    return (
      <div>
        <Header posts={posts} />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "avenir",
                paddingTop: 50,
              }}
              key={node.slug}
            >
              <h2 style={{ marginBottom: 20 }}>
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h2>
              <small>Posted on {node.createdAt}</small>
              <p>{node.subtitle.subtitle}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export const query = graphql`
  query HomepageQuery {
    allContentfulMyCoolBlog {
      edges {
        node {
          title
          author
          slug
          subtitle {
            subtitle
          }
          createdAt(formatString: "DD MMMM YYYY")
          image {
            fluid {
              src
            }
          }
          tags
        }
      }
    }
  }
`
export default Layout
