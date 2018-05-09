import React from "react"
import { Link } from "react-router"
import Svg from "react-svg-inline"

import pkg from "../../../package.json";
import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const Header = (props) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to="/"
        >
          <img src="/assets/react.svg" alt="Home" width="26" height="26" />
          { " " }
          { "React Toulouse" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav>
  </header>
)

export default Header
