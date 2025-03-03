import React from "react";
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ReviewSection = () => {
const customerArr= useStaticQuery(graphql`
query MyQuery {
  allFile(filter: {sourceInstanceName: {eq:"customers"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`)
  return(
    <StyledSection>
  <Marquee  gradient gradientColor='rgb(16, 18, 23)' pauseOnHover>

  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[0].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[0].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[1].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[1].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[2].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[2].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[3].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[3].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[4].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[4].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[5].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[5].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[6].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[6].node.name} />
  </StyledCard>
  </Marquee>
  <Marquee direction="right" gradient gradientColor='rgb(16, 18, 23)' pauseOnHover>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[7].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[7].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[8].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[8].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[9].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[9].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[10].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[10].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[11].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[11].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[12].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[12].node.name} />
  </StyledCard>
  <StyledCard>
  <StyledGatsbyImg image={getImage(customerArr.allFile.edges[13].node.childImageSharp.gatsbyImageData)} alt={customerArr.allFile.edges[13].node.name} />
  </StyledCard>
  </Marquee>
  </StyledSection>  
);
  }
export default ReviewSection;

const StyledSection=styled.div`
width: 100%;
margin: auto;
`
const StyledCard=styled.div`
width: 300px;
height: 200px;
margin: 40px;
border-radius: 10px;
padding: 5px;
text-align: center;
color: black;
`
const StyledGatsbyImg=styled(GatsbyImage)`
width: 300px;
height: 225px;
border-radius: 5px;
box-shadow:  0px 6px 15px 0px black;
cursor: pointer;
&:hover{
  box-shadow:  0px 6px 15px 0px red;
}
`