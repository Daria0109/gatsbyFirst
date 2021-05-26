import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"
import banner from "./../static/banner.png"


const HomePage = () => {
  return (
    <Layout>
      <section className={styles.heading}>
        <div>
          <h1>Design</h1>
          <h2>Develop and Deploy</h2>
          <p>Web Developer</p>
          <Link className={styles.btn} to={"/projects"}>Portfolio</Link>
        </div>
        <img src={banner} alt="Banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

export default HomePage
