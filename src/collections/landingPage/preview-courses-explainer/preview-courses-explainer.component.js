import React from 'react'
import { CourceGrid, CourceCard, Img, Feature,FeatureContainer,VerticalLine,CustomStaticImage } from './preview-courses-explainer.styles'
import { CustomButtonOuterLink } from '../../../components/buttons/CustomButton'
import { StaticImage } from "gatsby-plugin-image"

const PreviewCoursesFetures = () => {
  
    return(
    <CourceGrid>
    <CourceCard>
      <StaticImage src="../../../../static/images/pick33.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"10px"}}/>
     
      <FeatureContainer>
      <Feature>Подстригване</Feature>
      <span>✅Класическо подстригване</span>
      <span>✅Подстригване тип Feid</span>
      <span>✅Детско подстригване</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard left>
    <StaticImage src="../../../../static/images/pick02.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"10px"}}/>
      
      <FeatureContainer>
      <Feature>Брада</Feature>
      <span>✅Оформяне на брада</span>
      <span>✅Кралско Бръснене</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard>
    <StaticImage src="../../../../static/images/pick03.jpg" alt="picture of the interior" width={400} height={400} style={{borderRadius:"10px"}}/>
      
      <FeatureContainer>
      <Feature>Процедури</Feature>
      <span>✅Оформяне на вежди</span>
      <span>✅Кола маска уши/нос</span>
      <span>✅Маска за лице</span>
      <span>✅Измиване на коса</span>
      <span>✅Прилагане на продукти от висок клас</span>
      </FeatureContainer>
    </CourceCard>
    <CustomButtonOuterLink href={"https://www.fresha.com/p/petr-gospodinov-4498103?share&pId=1473395"}>Запази час</CustomButtonOuterLink>
    </CourceGrid>
  )
}

export default PreviewCoursesFetures