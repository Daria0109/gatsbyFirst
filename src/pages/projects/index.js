import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { graphql, Link } from "gatsby";

const PortfolioPage = ({ data }) => {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio page</h1>
        <p>Projects and Websites I've created</p>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me to {contact} for a quote!</p>
      </div>
    </Layout>
  );
};
export default PortfolioPage;

export const query = graphql`
    query Projects {
        projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
                frontmatter {
                    slug
                    stack
                    title
                }
                id
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`;