import styled,{keyframes} from 'styled-components'
import { Link } from 'gatsby'


export const getBrandPurple ="red"

export const ButonContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

div{
  margin: 10px 20px;
}
@media screen and (max-width: 800px) {
    flex-direction: column;
    
  }
`
const shine = keyframes`
  0% { left: -100px; }
  20% { left: 100%; }
  100% { left: 100%; }
`;

export const AnimatedPrimaryButton = styled.div`
  margin: 5px auto;
  background: ${getBrandPurple};
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  text-decoration: none;
  width: 130px;
  text-align: center;
  border-radius: 40px;
  cursor: pointer;
  border: 2px solid ${getBrandPurple};
  outline: 2px grey;
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
    //transform: scale(1.1);
    filter: brightness(125%);
    color: white;
    &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg, 
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: ${shine} 3s infinite linear;
  }
  }

  @media screen and (max-width: 800px) {
    width: 150px;
    font-size: 12px;
  }
`
export const AnimatedSecondaryButton = styled.div`
  margin: 5px auto;
  background: transparent;
  color: grey;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  text-decoration: none;
  width: 130px;
  text-align: center;
  border-radius: 40px;
  cursor: pointer;
  border: 2px solid grey;
  outline: 2px grey;
  transition: all 0.6s ease-in-out;
  &:hover {
    box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
    //transform: scale(1.1);
    //filter: brightness(125%);
    background-color: grey;
    color: white;
  }

  @media screen and (max-width: 800px) {
    width: 150px;
    font-size: 12px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  width: auto;
`
export const StyledA= styled.a`
  text-decoration: none;
  width: auto;
`