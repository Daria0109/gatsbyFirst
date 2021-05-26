import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const PortfolioPage = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio page</h1>
        <p>Projects and Websites I've created</p>
      </div>
    </Layout>
  )
}
export default PortfolioPage