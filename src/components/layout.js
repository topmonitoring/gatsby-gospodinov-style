/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

export const StyledFooter=styled.footer`
align-content: center;
width: 100%;
height: 50px;
background-color: rgb(157, 178, 191);
opacity: 90%;
text-align: center;
a{
  color: black;
}
a:hover
  {
    color: red;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>{children}</main>
        <StyledFooter>
          
          Copyright
          © {new Date().getFullYear()} &middot;
          {` `}
          Всички права запазени
          {` `}
          <a href="https://gospodinovstyle.com/">Gospodinov Style</a>✂️
        </StyledFooter>
      
    </>
  )
}

export default Layout

