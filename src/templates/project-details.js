import React from "react";
import * as styles from "./../styles/project-details.module.css";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";


const ProjectDetails = ({data}) => {
  const {html} = data.markdownRemark;
  const {stack, title, featuredImg} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h1>{title}</h1>
        <h2>{stack}</h2>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid}/>
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </Layout>
  )
}
export default ProjectDetails

export const query = graphql`
    query ProjectQuery($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                stack
                title
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }

`
