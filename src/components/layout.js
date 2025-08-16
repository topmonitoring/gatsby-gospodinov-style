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
import {SocialIcons} from "../components/social-links/social-links.component"

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
          <StyledFooterContainer>
            <div>
            <h1>Работно време</h1>
            Понеделник - Събота 10:00 - 19:00
            <br/>
            Неделя - Почивен ден
            </div>
            <div>
            <h1>Локация</h1>
            гр.Пловдив
            <br/>
            ул.Златю Бояджиев №3
            </div>
            <div>
            <h1>Контакти</h1>
            ☎️<a href="tel:+359 883353591">+359 883353591</a>
            <SocialIcons/>
            
            </div>
          </StyledFooterContainer>
          Copyright
          © {new Date().getFullYear()} &middot;
          {` `}
          Всички права запазени
          {` `}✂️
          <br/>
          Powerd by:
          <a href="https://dobrindobrev.com/">Dobrin Dobrev</a>
        </StyledFooter>
      
    </>
  )
}

export default Layout

export const StyledFooter=styled.footer`
align-content: center;
width: 100%;
height: auto;
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
export const StyledFooterContainer=styled.div`
display: flex;
align-content: space-between;
@media screen and (max-width: 1000px) {
  flex-direction: column;
}
div{
  margin: 0px auto;
  text-align: center;
}
h1{
  font-size: 25px;
  margin: 15px;
}
`
