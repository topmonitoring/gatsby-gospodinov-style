import React from 'react'
import styled from 'styled-components'

const CustomerCard = () => {
    return (
    <StyledCard>
      <div>Picture</div>
      <div>Customer Name</div>    
      <div>Rating or Discription</div>        
      </StyledCard>
    )
  }
  export default CustomerCard

  const StyledCard=styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  margin: 40px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  color: black;
  `