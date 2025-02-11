import styled from 'styled-components'
import {GatsbyImage} from "gatsby-plugin-image"

export const StyledBookContent = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 60%;
  height: 180px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85%;
  }
`
export const StyledBookImg = styled(GatsbyImage)`
      
      aspect-ratio: initial;
      margin: auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 65%;
    height: 400px;
  }
`
export const StyledBookTitle = styled.h2`
  height: 40px;
  font-size: 25px;
  font-weight:500;
  letter-spacing: 1px;
`
export const BooksGrid = styled.div`
  text-align: center;
  width: 90%;
  display: grid;
  flex-direction: row;
  margin: auto;
  grid-template-areas: 'book book';
  @media screen and (max-width: 800px) {
    grid-template-areas:
      'book'
      'book';
    width: 80%;
  }
`
export const Book = styled.div`
  text-align: center;
  margin: 10px auto;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-areas: 'book';
  }
`
export const LinkToAmazonButton = styled.button`
  text-align: center;
  border: none;
  width: 60%;
  height: 40px;
  background-color: rgb(102, 155, 188);
  box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    
    filter: brightness(85%);
  }
`