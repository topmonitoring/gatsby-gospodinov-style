import React from 'react'
import { CardBody,StyledH1Price,StyledFetureContainer,StyledButon} from './CTA-card.styles'
import { TripleTitle } from '../../../components/theme/topography'
import CustomButton from '../../../components/buttons/CustomButton'
import WarningIcon from './warning-icon'

 
const TakeActionSection = () => {
  return (
    <>
    <hr/>
    <TripleTitle hed1={"Limited Time offer"} hed2={"LOCK-IN YOUR PRICE NOW"} />
    <CardBody>
    <h1>Take Action</h1>
    <h2>ACT NOW and save up to 65% off.</h2>
    <StyledH1Price><span>$147</span> $49.99</StyledH1Price>
    <StyledFetureContainer>
    <div>&#x2705; Cources</div> 
    <div>&#x2705; Templates</div>   
    <div>&#x2705; Acess to Mentorship</div>
    <div>&#x2705; Comunity chat</div>
    <div>&#x2705; No expiriance needed</div>    
    <div>&#x2705; Acess to exclusive bonuses</div>
    <div>&#x2705; Acess to private network</div>
    <div>🙎 Cancel anythime, risk free</div>
    <div>🔓 $49.99/month forever</div>
    </StyledFetureContainer>
    <StyledButon>JOIN THE PROCESS MASTERY FAMILY</StyledButon>
    <p>LOCK IN YOUR PRICE BEFORE IT INCREASES</p>        
    </CardBody>
    <h1>OR DO NOTHING. Miss yet another Opportunity. Work a 9-5.</h1>

    <hr/>
    <br/>
    <WarningIcon/>
    <br/>
    <TripleTitle hed1={"WARNING: PRICE INCREASING SOON"} hed2={"LOCK-IN YOUR PRICE OF $49.99"}/>
    <p>Hundreds of thousands of students have already joined The Process Mastery Comunity and are on their way to financial freedom. Join now before the price increases to $147 a month. Don’t miss out on this opportunity.</p>
    <CustomButton>JOIN PROCESS MASTERY</CustomButton>
    <br/>
    <br/>
    <hr/>
    
    </>
  )
}
export default TakeActionSection
