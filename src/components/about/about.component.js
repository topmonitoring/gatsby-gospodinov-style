import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import React from 'react'

export const About = () =>(
<StyledAboutSection>
    <StyledAboutGrid>
    <StaticImage src="../../../static/aboutImg.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"900px",margin:"25px"}}/>
    <StyledAboutinfo>Аз съм Петър Господинов от Пловдив роден 1997 година основател и собственик на Gospodinov Style .
    <br/>
        <br/> Една моя 10 годишна мечта превърната в реалност .<br/>
        <br/> Идеята ми беше да комбинирам хубавата мъжка визия , уюта , удобството , професионализма , старите традиции в бръснарски услуги . <br/>
        <br/>Това беше трудна задача , но ето след много курсове , много мислене и много работа 20.04.2024 година успях да създам това място където не само ще излезете с перфектната визия , а ще излезете отпочинали , изслушани и релаксирали .<br/>
        <br/> <b>Благодарим ви ,че избрахте Gospodinov Style ! При нас подстригването не е просто процедура , а цяло изживяване !</b></StyledAboutinfo>
    </StyledAboutGrid>
    <br/>
</StyledAboutSection>
)

export const StyledAboutinfo = styled.div`
padding: 15px;
font-size: 18px;
width: 60%;
margin: auto;
@media screen and (max-width: 800px) {
    width: 90%;
  }
`

export const StyledAboutSection = styled.div`
  width: 60%;
  height: fit-content;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: rgb(157, 178, 191);
  border-radius: 10px;
  a {
    border-bottom: 3px solid #4799eb;
    text-decoration: none;
    :hover {
      color: #4799eb;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`
export const StyledAboutGrid =styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width: 800px) {
    flex-direction: column;
  }
`