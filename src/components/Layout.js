import React from "react"
import Header from "./Header"
import "./../styles/global.css"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteInfo {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  const {title} = data.site.siteMetadata
  return (
    <div className={"layout"}>
      <Header title={title}/>
      <main className={"content"}>{children}</main>
      <footer>
        <p>© 2021. Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout
