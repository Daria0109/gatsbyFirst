import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"


const HomePage = ({data}) => {
  const bannerImage = data.file.childImageSharp.fluid
  return (
    <Layout>
      <section className={styles.heading}>
        <div>
          <h1>Design</h1>
          <h2>Develop and Deploy</h2>
          <p>Web Developer</p>
          <Link className={styles.btn} to={"/projects"}>Portfolio</Link>
        </div>
        <Img fluid={bannerImage}/>
      </section>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
    query ImageQuery {
        file(relativePath: {eq: "banner.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
