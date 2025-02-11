import React from "react";
import CustomerCard from "./customer-card-component";
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import { getGlobalBackground } from "../../../components/theme/colors";
import {TripleTitle} from '../../../components/theme/topography'

const ReviewSection = () => (
  <>
  <TripleTitle hed1={"Our Customers"} hed2={"See What others are saying"} />
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
width: 70vw;
margin: auto;
`