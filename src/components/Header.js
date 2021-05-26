import React from "react"
import {Link} from "gatsby"

const Header = ({title}) => {
  return (
    <header>
      <div>{title}</div>
      <nav>
        <ul className={"links"}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/projects"}>Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header