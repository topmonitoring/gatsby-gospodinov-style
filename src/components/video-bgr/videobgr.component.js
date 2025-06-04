import React from 'react';
import Video from '../../../static/videobgr01.mp4'
import { StyledVideo, HederOverlay,HederTextContainer,StyledH1,StyledP,ButonContainer,StrongWord} from './videobgr.styles';
import {CustomButtonOuterLink} from '../buttons/CustomButton';
//import {ButonContainer} from '../buttons/CustomButtonStyles';

const VideoBaground = () => {
  return (
    <>
    
      <StyledVideo>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width="800"
          height="900"
        >
          <source
            src={Video}
            type="video/mp4"
          />
        </video>
      </StyledVideo>
      <HederOverlay>
      <HederTextContainer>
      <StyledH1>Студио <StrongWord>Gospodinov Style</StrongWord></StyledH1>
      <StyledP>При нас подстригването не е просто процедура, а цяло изживяване !</StyledP>     
      <ButonContainer>
      <CustomButtonOuterLink href={'https://www.fresha.com/p/petr-gospodinov-4498103?share&pId=1473395'}>Запази час</CustomButtonOuterLink>
      {/**<CustomModal buttonValue={"Free Blueprint"}>hello world</CustomModal>**/}
      
      </ButonContainer>
      
      </HederTextContainer>
      </HederOverlay>
    </>
  );
};
export default VideoBaground;
