import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = async () => await graphql`
  query{
  allMarkdownRemark (sort:{fields:[frontmatter___date], order: DESC}){
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          date
          description
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`


// const BlogTitle = styled()`
//   margin: 10px
// `


export default ({data}) => {
  return (<Layout>
    <SEO title="Home" />
    <h1>Albert's First Gatsby Project</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => {
        return (<div key = {node.id}>
          <Link to={node.fields.slug} style={{
            textDecoration:`none`,
            color: `#f34`

          }}>
            <h5>{node.frontmatter.title}-{node.frontmatter.date}</h5>
          </Link>
          <p>{node.excerpt}</p>
        </div>)
      })
    }
  </Layout>)
}