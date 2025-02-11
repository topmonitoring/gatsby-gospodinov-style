import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"
import VideoBaground from "../components/video-bgr/videobgr.component"
import PreviewCoursesFetures from "../collections/landingPage/preview-courses-explainer/preview-courses-explainer.component"
import ReviewSection from "../collections/landingPage/customerReview/customer-review-component"
import {TripleTitle} from '../components/theme/topography'

const IndexPage = () => (
  <Layout>
<VideoBaground/>
<TripleTitle hed1={"Какво предлагаме"} hed2={"Нашите Услуги"} />
<PreviewCoursesFetures/>
<ReviewSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
