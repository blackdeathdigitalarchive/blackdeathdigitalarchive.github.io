import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/plagueicon.png"
      width={236}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="plague icon"
	style={{ float: "right", marginLeft: `4.45rem`, marginBottom: `1.45rem` }}
    />

      <p>Our understanding of the Black Death, the plague pandemic that ravaged Europe, the Middle East, and north Africa between 1346 and 1353, has been transformed in the past 15 years due to new developments in genetics. An evolutionary history of the causative organism of plague, <i>Yersinia pestis</i>, allows us now to track plague’s movements across vast landscapes and demonstrate the connected stories linking outbreaks from China to Spain to sub-Saharan Africa. Just as the geographical footprint of the Second Plague Pandemic has grown, so, too, has its chronological scope. We can now demonstrate that a sustained proliferation of strains of <i>Y. pestis</i> started in the late 12th or early 13th century, and lasted up to the 19th century. Researching such a vast phenomenon demands the combined labors of scientists and historians. This project serves as a portal for researchers from all disciplinary backgrounds, allowing them to find the best methodological work with links to biological, archaelogical, and documentary databases.</p>

    <p>
      <Link to="/about/">More about the project</Link>
    </p>
  </Layout>
)



export default IndexPage
