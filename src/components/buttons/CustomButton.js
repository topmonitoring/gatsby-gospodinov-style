import React from 'react'
import { AnimatedPrimaryButton,AnimatedSecondaryButton, StyledLink,StyledA } from './CustomButtonStyles'

export const CustomButtonInerLink = ({ children, to ,secondary}) => {
  return (
    secondary ?
    <StyledLink to={to}>
    <AnimatedSecondaryButton>
        {children}  
    </AnimatedSecondaryButton>
    </StyledLink>
    :
    <StyledLink to={to}>
    <AnimatedPrimaryButton> 
        {children}
    </AnimatedPrimaryButton>
    </StyledLink>
  )
}

export const CustomButtonOuterLink = ({ children, href ,secondary}) => {
  return (
    secondary ?
    <StyledA href={href} target='blank'>
    <AnimatedSecondaryButton>
        {children}  
    </AnimatedSecondaryButton>
    </StyledA>
    :
    <StyledA href={href} target='blank'>
    <AnimatedPrimaryButton> 
        {children}
    </AnimatedPrimaryButton>
    </StyledA>
  )
}

export const CustomButtonNoLink = ({ children, secondary}) => {
  return (
    secondary ?
    <AnimatedSecondaryButton>
        {children}  
    </AnimatedSecondaryButton>
    :
    <AnimatedPrimaryButton> 
        {children}
    </AnimatedPrimaryButton>
  )
}

export default CustomButtonNoLink