import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`)


    return (
        <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
          {data.site.siteMetadata.author}
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
                Contact
              </Link>
            </li>
            <li>
            <a class="top-link top-link-1 top-link-1-res" href="contact/">
Help Promote
</a>
            </li>
          </ul>
        </nav>
      </header>
  
    )
}

export default Header