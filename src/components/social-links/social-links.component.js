import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

export const SocialIcons=()=> {
  return (
    <SocialLinksContainer>
       <SocialIcon url={'https://www.facebook.com/profile.php?id=100063651110303'}  bgColor={'rgba(144, 186, 245,1)'}/>
       <SocialIcon url={'https://www.instagram.com/gospodinov.style/'}  bgColor={'rgba(144, 186, 245,1)'}/>
       <SocialIcon url={'https://www.tiktok.com/@gospodinov.style'}  bgColor={'rgba(144, 186, 245,1)'}/>
    </SocialLinksContainer>
  )
}

export const SocialLinksContainer = styled.div`
align-content: center;
width: 100%;
text-align: center;
  a{
    margin: 5px;
    border-radius: 60px;
    &:hover {
      box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
    }
  }
  
  svg {
    transition: all 0.4s ease-in-out;
  }
 
`