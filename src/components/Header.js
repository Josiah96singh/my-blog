import React from "react"
import { StaticQuery, graphql } from "gatsby"
import twitter from "../media/twitter.svg"
import linkedin from "../media/linkedin.svg"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const social = data.site.siteMetadata.social

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "avenir",
      }}
    >
      <h1 style={{ marginBottom: 0, fontSize: 50 }}>{title}</h1>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5,
        }}
      >
        {description}
      </p>
      <div>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank">
          <img src={twitter} alt="twitter" style={{ width: 30, padding: 5 }} />
        </a>
        <a
          href={`https://www.linkedin.com/in/${social.linkedin}`}
          target="_blank"
        >
          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: 30, padding: 5 }}
          />
        </a>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              social {
                twitter
                linkedin
              }
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
