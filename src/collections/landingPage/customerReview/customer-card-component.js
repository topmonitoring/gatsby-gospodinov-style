import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const CustomerCard = () => {
    return (
    <StyledCard>
      <StaticImage src="../../../../static/images/pick1.jpg" alt="picture of the interior" width={400}/>   
      </StyledCard>
    )
  }
  export default CustomerCard

  const StyledCard=styled.div`
  width: 300px;
  height: 200px;
  background-color: whitesmoke;
  margin: 40px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  color: black;
  `