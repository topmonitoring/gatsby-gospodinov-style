import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"
import VideoBaground from "../components/video-bgr/videobgr.component"
import PreviewCoursesFetures from "../collections/landingPage/preview-courses-explainer/preview-courses-explainer.component"
import ReviewSection from "../collections/landingPage/customerReview/customer-review-component"
import {TripleTitle} from '../components/theme/topography'
import { useStaticQuery,graphql  } from "gatsby"

const IndexPage = () => {
 const Mykeywords = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          keywords
        }
      }
    }
  `)
return (
  <Layout>
<VideoBaground/>
<TripleTitle hed1={"Какво предлагаме"} hed2={"Нашите Услуги"} />
<PreviewCoursesFetures/>
<ReviewSection/>
{console.log(Mykeywords.site.siteMetadata.keywords[0])}
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo keywords={Mykeywords.site.siteMetadata.keywords[0]} />
export const Head = () => <Seo keywords={"Gospodinov Style,Петър Господинов"} />

export default IndexPage
