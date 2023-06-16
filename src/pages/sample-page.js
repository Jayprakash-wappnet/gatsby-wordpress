import React from "react"
import { graphql } from "gatsby"

const samplePage = ({ data }) => {
  const page = data.allWpPage.nodes[0]

  return (
    <div>
      {page && (
        <div key={page.title}>
          <h2>{page.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      )}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allWpPage(filter: { slug: { eq: "sample-page" } }) {
      nodes {
        content
        title
      }
    }
  }
`

export default samplePage
