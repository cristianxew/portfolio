import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Bottom from "../components/Bottom/Bottom"
import "./404.scss"

const query = graphql`
  {
    file(relativePath: { eq: "Astronaut-big.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Error = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <>
      <main className="error-page">
        <div className="error-content">
          <Image fluid={fluid} className="error-image" />
          <h2>Sorry, This Page is Lost in Space</h2>
          <Link to="/">
            <Bottom>Back Home</Bottom>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
