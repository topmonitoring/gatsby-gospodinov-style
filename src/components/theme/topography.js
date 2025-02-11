import styled from 'styled-components'
import { Link } from "gatsby"
import {getBrandPurple } from "../../components/theme/colors"
import React from 'react'

export const TripleTitle=({hed1,hed2,hed3}) => (
          <>
            <StyledH3>{hed1}</StyledH3>
            <StyledH2>{hed2}</StyledH2>
            <StyledP>{hed3}</StyledP>
          </>
)

export const StyledP= styled.p`
text-align: center;
font-size: 22px;
`

export const StyledH3= styled.h3`
 margin: auto;
 text-align: center;
 text-transform: uppercase;
 letter-spacing: 12px;
 font-weight: 300;
    @media screen and (max-width: 1080px) {
    font-size:20px;
    }
`
export const StyledH2= styled.h2`
    margin: auto;
    text-align: center;
    line-height: 1.2em;
    letter-spacing: -1.1px;
    font-weight: 900;
    font-size: 52px;
    @media screen and (max-width: 1080px) {
    font-size:25px;
    }
`
export const StyledH1= styled.h1`
font-family: Playfair Display, sans-serif;
background-image: linear-gradient(45deg, #a163f1, #6363f1 22%, #3498ea 40%, #40dfa3 67%, rgba(64, 223, 163, 0));
    background-size: 150% 100%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    background-clip: text;

    animation: intro-gradient 1.2s cubic-bezier(0.85, 0.26, 0.89, 0.93) infinite;
    animation-iteration-count: 1;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;
    line-height: 1.2em;
    letter-spacing: 2.1px;
    font-weight: 900;
    font-size: 52px;
    max-width: 550px;
    margin: auto;
     @keyframes intro-gradient {
      0% {
    background-position: 300% 100%;
      }
      100% {
    background-position: 0% 100%;
      }
     }
    @media screen and (max-width: 1040px) {
      font-size:35px;
    }
`
export const StrongWord = styled.b`
  
  color: ${getBrandPurple};
  
`;

export const StyledGatsbyLink = styled(Link)`
    border-bottom: 3px solid #4799eb;
    text-decoration: none;
    cursor: pointer;
    :hover {
      color: #4799eb;
    }
  `