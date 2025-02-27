import React from 'react'
import Marquee from 'react-fast-marquee'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const BrandLogos=()=> {
  return (
<Marquee  gradientColor='rgb(16, 18, 23)'>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo01.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo02.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo03.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo04.png"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo05.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo06.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../static/brands/logo07.jpg"} alt="picture of brand" width={400} height={180} style={{borderRadius:"5px",boxShadow:" 0px 3px 5px 0px black"}}/>
  </StyledCard>
  </Marquee>
  )
}

const StyledCard=styled.div`
width: 180px;
height: 100px;
margin: 10px 40px;
border-radius: 10px;
padding: 5px;
text-align: center;
color: black;
`