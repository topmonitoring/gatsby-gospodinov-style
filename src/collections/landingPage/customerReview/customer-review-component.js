import React from "react";
import CustomerCard from "./customer-card-component";
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import {TripleTitle} from '../../../components/theme/topography'

const ReviewSection = () => (
  <>
  <TripleTitle hed1={"Какво казват"} hed2={"Нашите клиенти"} />
    <StyledSection>
  <Marquee gradient gradientColor='rgb(16, 18, 23)'>
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
  </Marquee>
  <Marquee direction="right" gradient gradientColor='rgb(16, 18, 23)'>
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
    <CustomerCard />
  </Marquee>
  </StyledSection>
  </>
);

export default ReviewSection;

const StyledSection=styled.div`
width: 100%;
margin: auto;
`