import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"

const BlogPage = ({ data }) => {
  const page = data.allWpPage.nodes[0]

  // const coverStyle = {
  //   backgroundColor: "green",
  // }

  return (
    <div>
      {page && (
        <div key={page.title}>
          <h2>{page.title}</h2>
          <div>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </div>
      )}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allWpPage(filter: { slug: { eq: "privacy-policy" } }) {
      nodes {
        content
        title
        slug
      }
    }
  }
`

export default BlogPage
