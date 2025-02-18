import React from "react";
import CustomerCard from "./customer-card-component";
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import {TripleTitle} from '../../../components/theme/topography'
import { StaticImage } from "gatsby-plugin-image";

const ReviewSection = () => (
  <>
  <TripleTitle hed1={"Какво казват"} hed2={"Нашите клиенти"} />
    <StyledSection>
  <Marquee gradient gradientColor='rgb(16, 18, 23)'>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer1.jpg"} alt="picture " width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer2.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer3.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer4.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer5.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer6.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer7.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  </Marquee>
  <Marquee direction="right" gradient gradientColor='rgb(16, 18, 23)'>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer8.jpg"} alt="picture " width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer9.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer10.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer11.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer12.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer13.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  <StyledCard>
  <StaticImage src={"../../../../static/customers/customer14.jpg"} alt="picture of the interior" width={400} height={300} style={{borderRadius:"5px"}}/>
  </StyledCard>
  </Marquee>
  </StyledSection>
  </>
);

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