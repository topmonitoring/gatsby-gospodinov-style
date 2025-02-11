import React from 'react'
import { CourceGrid, CourceCard, Img, Feature,FeatureContainer,VerticalLine } from './preview-courses-explainer.styles'
import { graphql,useStaticQuery } from 'gatsby'
import { CustomButtonOuterLink } from '../../../components/buttons/CustomButton'

const PreviewCoursesFetures = () => {
  const data=useStaticQuery(graphql`
      query {
        allContentfulCoursesLandingPage {
          edges {
            node {
              feture1 {
                gatsbyImageData
              }
              feture2 {
                gatsbyImageData
              }
              feture3 {
                gatsbyImageData
              }
            }
          }
        }
      }
    `)
      const imageData = data.allContentfulCoursesLandingPage.edges[0].node
    return(
    <CourceGrid>
    <CourceCard>
      <Img image={imageData.feture1.gatsbyImageData}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>The Game Plan</Feature>
      <span>✅Create a Game plan with our Notion Templates & Tables</span>
      <span>✅Define your Ideal Customer and his pain points</span>
      <span>✅Use our Sales funnels & scripts to craft an compeling offer</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard left>
      <Img image={imageData.feture2.gatsbyImageData}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>The Skills Game</Feature>
      <span>✅Learn how to sell & build offers</span>
      <span>✅Automate as meny business procesess as you can</span>
      <span>✅Improve skills you need to focus on, to maximize your income</span>
      </FeatureContainer>
    </CourceCard>
    <CourceCard>
      <Img image={imageData.feture3.gatsbyImageData}/>
      <VerticalLine/>
      <FeatureContainer>
      <Feature>The Content Game</Feature>
      <span>✅Learn how to make quality content</span>
      <span>✅Learn how to destribute your content efficently</span>
      <span>✅Learn how to hire people to work with you</span>
      </FeatureContainer>
    </CourceCard>
    <CustomButtonOuterLink href={"https://www.skool.com/"}>Запази час</CustomButtonOuterLink>
    </CourceGrid>
  )
}

export default PreviewCoursesFetures