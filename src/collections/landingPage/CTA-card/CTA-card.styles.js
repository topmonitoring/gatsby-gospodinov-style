import styled from 'styled-components'
import { getBoxShadow,getBrandPurple,getBackgroundForNavAndFooter,getGlobalForeground } from '../../../components/theme/colors'

export const CardBody = styled.div`
  text-decoration: none;
  background-color: ${getBackgroundForNavAndFooter} ;
  padding: 20px 0px;
  height: max-content;
  width: 512px;
  min-width: 265px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin:60px auto;
  flex: 0 0 calc(20% - 40px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 11px 20px 0px ${getBoxShadow};
  h1{
    font-size: 35px;
    margin: auto;
  }
  p{
    font-size: 15px;
  }
  div{
    font-size: 18px;
  }
  @media screen and (max-width: 1080px) {
    width: 90%;
    }
`
export const StyledH1Price = styled.h1`
    color: ${getBrandPurple};
    span{
    color: #8d8f92;
    text-decoration: line-through;
    }
    
`
export const StyledFetureContainer = styled.div`
text-align: start;
line-height: 40px;
width: 70%;
margin: 20px auto;
`
export const StyledButon = styled.div`
width: 70%;
margin: 20px auto;
background-color: ${getBrandPurple};
padding: 10px;
border-radius: 5px;
cursor: pointer;
transition: all 0.6s ease-in-out;
&:hover{
    transform: scale(1.1);
    box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
    filter: brightness(125%);
    color: white;
}
`


