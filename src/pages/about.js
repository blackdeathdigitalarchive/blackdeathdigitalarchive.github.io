import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About the Black Death Digital Archive Project" />
    <h1>About the Black Death Digital Archive Project</h1>
    <p>All about the people involved and the aims of the project.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
