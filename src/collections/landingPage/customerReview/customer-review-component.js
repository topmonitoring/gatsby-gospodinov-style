import React, { useState,useRef } from "react";
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import GatsbyJsImage from './GatsbyJsImge'

const ReviewSection = () => {
const slideshowRef = useRef(null);
const [open, setOpen] =useState(false);
//const [index, setIndex] = useState(0);
const OpenGallery = () => {
  setOpen(true); 
};
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
<Lightbox
    //index={index}
    open={open}
    close={() => setOpen(false)}
    ref={slideshowRef}
    slides={
      customerArr.allFile.edges.map(
        ({ node }) => (
          node.childImageSharp.gatsbyImageData
        )
    )}
    render={{slide:GatsbyJsImage,thumbnail:GatsbyJsImage}}
    plugins={[Thumbnails,Counter,Slideshow]}
    slideshow={{ ref: slideshowRef }}
    on={{
      click: () => {
        (slideshowRef.current?.playing
          ? slideshowRef.current?.pause
          : slideshowRef.current?.play)?.();
      },
    }}
  />

  <Marquee  gradient gradientColor='rgb(16, 18, 23)' pauseOnHover>
    {
      customerArr.allFile.edges.slice(0,5).map(
        ({ node }) => (
          <StyledCard onClick={()=>OpenGallery()} key={node.name} >
          <StyledGatsbyImg image={getImage(node.childImageSharp.gatsbyImageData)} alt={node.name} />
          </StyledCard>
        )
      )
    }
  </Marquee>
  <Marquee direction="right" gradient gradientColor='rgb(16, 18, 23)' pauseOnHover>
  {
      customerArr.allFile.edges.slice(6,13).map(
        ({ node }) => (
          <StyledCard onClick={()=>OpenGallery()} key={node.name}>
          <StyledGatsbyImg image={getImage(node.childImageSharp.gatsbyImageData)} alt={node.name} />
          </StyledCard>
        )
      )
    }
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