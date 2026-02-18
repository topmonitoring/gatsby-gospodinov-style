import React from 'react'
import { CourceGrid, CourceCard,Feature,FeatureContainer,VerticalLine} from './preview-courses-explainer.styles'
import { StaticImage } from "gatsby-plugin-image"

const PreviewCoursesFetures = () => {
  
    return(
    <CourceGrid>
    <CourceCard>
      <StaticImage src="../../../../static/images/pick33.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"20px"}}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>Подстригване</Feature>
      <span>Класическо подстригване</span>
      <span>Детско подстригване</span>
      <span>Подстригване тип Fade</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard left>
    <StaticImage src="../../../../static/images/pick02.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"20px"}}/>
    <VerticalLine/>
      <FeatureContainer>
      <Feature>Брада</Feature>
      <span>Бръснене</span>
      <span>Оформяне на брада</span>
      <span>Кралско Бръснене</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard>
    <StaticImage src="../../../../static/images/pick03.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"20px"}}/>
    <VerticalLine/>
      <FeatureContainer>
      <Feature>Процедури</Feature>
      <span>Оформяне на вежди</span>
      <span>Кола маска уши/нос</span>
      <span>Маска за лице</span>
      <span>Измиване и изсушаване</span>
      <span>Прилагане на висок клас продукти</span>
      </FeatureContainer>
    </CourceCard>
    </CourceGrid>
  )
}

export default PreviewCoursesFetures