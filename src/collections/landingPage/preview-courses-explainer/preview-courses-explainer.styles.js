import styled from 'styled-components'
import {GatsbyImage} from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"

export const CustomStaticImage = styled(StaticImage)`
width: 400px;
height: auto;
`

export const CourceGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  height: auto;
  padding: 50px;
  align-content: center;
  margin: auto ;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    padding: 20px 0px ;
  }
`

export const VerticalLine=styled.div`
border-left: 6px solid black;
  height: 400px;
  //position: absolute;
  left: 50%;
  margin: 0px 40px;
  top: 0;
  @media screen and (max-width: 1080px) {
    display: none;
    }
`

export const CourceCard = styled.div`
//background-color: azure;
width: 100%;
height: auto;
justify-content: center;
margin: auto;
display: flex;
flex-direction: row;
flex-direction: ${props => props.left ? "row" : "row-reverse"};
span{
    color: black;
    margin: 10px;
}
@media screen and (max-width: 1080px) {
    flex-direction: column;
    }
`
export const FeatureContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
margin: 0px 0px auto ;
`

export const Feature = styled.h1`
font-size: 35px;
color: black;
padding: 20px;
text-align: center;
margin: auto;
`
export const Img = styled(GatsbyImage)`
background-color: green;
width: 400px;
height: 230px;
margin: auto ;
border-radius: 10px;
`