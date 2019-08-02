import React from "react"
import { graphql, Link } from "gatsby"

const singleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <div style={{ fontFamily: "avenir" }}>
      <div>
        Posts about <b>{`${tagName}`}</b>
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default singleTagTemplate
