import React from 'react'
import { CourceGrid, CourceCard, Img, Feature,FeatureContainer,VerticalLine,CustomStaticImage } from './preview-courses-explainer.styles'
import { CustomButtonOuterLink } from '../../../components/buttons/CustomButton'
import { StaticImage } from "gatsby-plugin-image"

const PreviewCoursesFetures = () => {
  
    return(
    <CourceGrid>
    <CourceCard>
      <StaticImage src="../../../../static/images/pick1.jpg" alt="picture of the interior" width={400}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>Подстригване</Feature>
      <span>✅Класическо подстригване</span>
      <span>✅Подстригване тип Feid</span>
      <span>✅Детско подстригване</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard left>
    <StaticImage src="../../../../static/images/pick2.jpg" alt="picture of the interior" width={400}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>Бръснене</Feature>
      <span>✅Оформяне на брада</span>
      <span>✅Бръснене на брада</span>
      <span>✅Кралско Бръснене</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard>
    <StaticImage src="../../../../static/images/pick3.jpg" alt="picture of the interior" width={400}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>Процедури</Feature>
      <span>✅Оформяне на вежди</span>
      <span>✅Кола маска уши или нос</span>
      <span>✅Маска за лице</span>
      </FeatureContainer>
    </CourceCard>
    <CustomButtonOuterLink href={"https://www.skool.com/"}>Запази час</CustomButtonOuterLink>
    </CourceGrid>
  )
}

export default PreviewCoursesFetures