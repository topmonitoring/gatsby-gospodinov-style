import React from 'react';
import Video from '../../../static/videoBGR.mp4'
import { StyledVideo, HederOverlay,StyledLine,HederTextContainer,StyledH1,StyledP,ButonContainer} from './videobgr.styles';
import {CustomButtonNoLink,CustomButtonInerLink} from '../buttons/CustomButton';
//import {ButonContainer} from '../buttons/CustomButtonStyles';
//import {StrongWord} from "../theme/topography";

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
          width="1800"
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
      <StyledH1>Бръснарница <b>Gospodinov Style</b></StyledH1>
      <StyledP>За нас постригването не е просто процедура а цяло изживяване</StyledP>     
      <ButonContainer>
      <CustomButtonInerLink to={'/newsletter'}>запази час</CustomButtonInerLink>
      {/**<CustomModal buttonValue={"Free Blueprint"}>hello world</CustomModal>**/}
      <CustomButtonInerLink secondary to={'/about'}>научи повече</CustomButtonInerLink>
      </ButonContainer>
      
      </HederTextContainer>
      </HederOverlay>
    </>
  );
};
export default VideoBaground;
