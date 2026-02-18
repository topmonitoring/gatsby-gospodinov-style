import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"
import VideoBaground from "../components/video-bgr/videobgr.component"
import PreviewCoursesFetures from "../collections/landingPage/preview-courses-explainer/preview-courses-explainer.component"
import ReviewSection from "../collections/landingPage/customerReview/customer-review-component"
import {TripleTitle} from '../components/theme/topography'
import { graphql  } from "gatsby"
import {MyMap} from "../components/googlemap/googlemap.component"
import { CustomButtonOuterLink } from '../components/buttons/CustomButton'
import {About} from '../components/about/about.component'
import {BrandLogos} from '../components/brands/brand.component'
import {FAQSection} from '../components/FAQ-section/faq.component'

const IndexPage = () => {
return (
  <Layout>
<VideoBaground/>
<BrandLogos/>
<TripleTitle hed1={"Какво предлагаме"} hed2={"Нашите Услуги"} />
<PreviewCoursesFetures/>
<CustomButtonOuterLink href={"https://www.fresha.com/bg/a/gospodinov-style-plovdiv-ulica-zlatyu-boyadzhiev-3-yfyc8w9e?pId=1473395"}>Запази час</CustomButtonOuterLink>
<TripleTitle hed2={"Екипа ни"} />
<About/>
<CustomButtonOuterLink href={"https://www.fresha.com/bg/a/gospodinov-style-plovdiv-ulica-zlatyu-boyadzhiev-3-yfyc8w9e?pId=1473395"}>Запази час</CustomButtonOuterLink>
<TripleTitle hed1={"Хора които ни се довериха"} hed2={"Нашите Kлиенти"}/>
<ReviewSection/>
<TripleTitle hed1={"Научи повече"} hed2={"Често задавани въпроси"} />
<FAQSection/>
<TripleTitle hed1={"Заповядайте при нас"} hed2={"Златю Бояджиев №3"} />
<MyMap/>
<CustomButtonOuterLink href={"https://www.fresha.com/bg/a/gospodinov-style-plovdiv-ulica-zlatyu-boyadzhiev-3-yfyc8w9e?pId=1473395"}>Запази час</CustomButtonOuterLink>
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo keywords={Mykeywords.site.siteMetadata.keywords[0]} />
export const Head = (props) => <Seo title={'Начало'} keywords={props.data.site.siteMetadata.keywords} />

export default IndexPage

export const pageQuery = graphql`
query HeaderQuery {
  site {
    siteMetadata {
      keywords
    }
  }
}
`