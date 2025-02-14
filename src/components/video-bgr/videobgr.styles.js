import styled from 'styled-components';

import { Link } from 'gatsby';

export const getBrandPurple = 'green'

export const StyledLink = styled(Link)`
cursor: pointer;
border-bottom: 3px solid #4799eb;
text-decoration: none;
    :hover {
      color: #4799eb;
    }
  
`

export const StyledVideo = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: auto;
  height: 80vh;
  overflow: hidden;
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media screen and (max-width: 1000px) {
    video{
      height: 100%;
    }
    }
    @media screen and (max-width: 440px) {
    height: 75vh;
    }
`;

export const StrongWord = styled.b`
  //font-size:50px;
  color: rgb(102, 155, 188);
  
`;

export const HederOverlay = styled.div`
  height: 80vh;
  position: absolute;
  top: 65px;
  left: 0;
  width: 100vw;
  z-index: 0.5;
  background: black;
  opacity: 0.8;
  width: 100%;
  @media screen and (max-width: 440px) {
    height: 75vh;
    }
`;

export const StyledLine =styled.hr`
margin: 0;
height: 3px;
//background-image: linear-gradient(45deg, #a163f1, #6363f1 22%, #3498ea 40%, #40dfa3 87%, rgba(64, 223, 163, 0));
background-color: ${getBrandPurple};
border: none;
`

export const HederTextContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  max-width: 1216px;
  color: whitesmoke;
  margin: auto;
  text-align: start;
  padding: 5px 100px;
  display: grid;
  grid-template-areas:
    'blank blank blank'
    'hed1 hed1 hed1'
    'hed2 hed2 hed2'
    'button button button';
    grid-template-rows: 50px 50px;
  align-content: space-around;
  @media screen and (max-width: 1040px) {
      margin:  auto;
      padding: 0px;
    }
    @media screen and (max-width: 865px) {
      text-align: center;
      h1{
        font-size: 30px;
        margin: auto;
      }
      h2{
        margin: auto;
      }
    }
`;
export const StyledH1=styled.h1`
    font-size: 42px;
    max-width: 660px;
    grid-area: hed1;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const StyledP=styled.p`
    font-weight: unset;
    font-size: 20px;
    line-height: 28px;
    overflow-wrap: break-word;
    max-width: 660px;
    grid-area: hed2;
    grid-gap: 0px;
`

export const ButonContainer=styled.div`
    grid-area: button;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 460px) {
      flex-direction: column;
      justify-content: center;
      div{
        width: 70%;
      }
    }
`
  