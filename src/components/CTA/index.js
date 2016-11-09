import React from "react"
import Svg from "react-svg-inline"

import styles from "./index.css"

const Cta = ({
  children,
  buttonStyle = "",
  href,
  icon,
  buttonText,
  style,
}) => {
  return (
    <div className={ styles.cta } style={ style }>
      { children && <p>{ children }</p> }
      <a
        className={ styles["button" + buttonStyle] }
        href={ href }
      >
        { icon && <Svg svg={ icon } cleanup /> }
        { buttonText }
      </a>
    </div>
  )
}

Cta.propTypes = {
  children: React.PropTypes.node,
  buttonStyle: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  buttonText: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
}

export default Cta
