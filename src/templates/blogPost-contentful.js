import React from "react"
import { graphql, Link } from "gatsby"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulMyCoolBlog
    // const siteTitle = this.props.data.site.siteMetadata.siteTitle
    const { previous, next } = this.props.pageContext

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir",
          padding: 50,
          marginBottom: 0,
          textDecoration: "none",
        }}
      >
        <h1>{post.title}</h1>
        <div
          style={{ padding: 30 }}
          dangerouslySetInnerHTML={{
            __html: post.body.childContentfulRichText.html,
          }}
        />

        <div>{next && <Link to={next.slug}>{next.title}</Link>}</div>
        <div>
          {previous && <Link to={previous.slug}>{previous.title} </Link>}
        </div>
        <br />
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulMyCoolBlog(slug: { eq: $slug }) {
      title
      author
      createdAt
      slug
      body {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default BlogPostContentfulTemplate
