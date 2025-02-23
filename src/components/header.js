import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { getBackgroundForNavAndFooter, getBrandPurple, getGlobalForeground } from '../components/theme/colors'
import { StaticImage } from "gatsby-plugin-image"

const Navbar = props => {

  return (
    <>
      <NavBar >
        <FlexContainer>
        <StyledLogoLink to="/" style={{margin:"auto 0px"}}>

          <StaticImage src="../../static/images/logo2.jpg" alt="logo image" style={{width:"45px",height:"45px"}}/>
          
          </StyledLogoLink>
          <StyledBrandName>Gospodinov Style</StyledBrandName>


        </FlexContainer>
      </NavBar>

    </>
  )
}

export default Navbar

const StyledLogoLink=styled(Link)`
text-decoration: none;
text-align: center;
line-height: 45px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: ${getGlobalForeground};
` 

const StyledBrandName=styled.div`
align-content: center;
//margin: auto;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: black;
`

const NavBar = styled.nav`
  color: white;
  //position: fixed;
  background-color: white;
  height: 65px;
  width: 100%;
  font-size: 16px;
  z-index: 9999;
  position: relative;
  background-color: ${getBackgroundForNavAndFooter};
  opacity: 90%;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(1600px - var(--margin)* 2);
`

const FlexContainer = styled.div`
  max-width: 1216px;
  display: flex;
  margin: auto ;
  padding: 5px 100px;
  justify-content: space-between;
  svg{
    &:hover{
      fill:${getBrandPurple};
    }
  }
  @media screen and (max-width: 1215px) {
    padding: 10px;
    }
`

