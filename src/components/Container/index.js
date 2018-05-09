import React from "react";

import styles from "./index.css"

const Container = (props) => (
  <div className={ styles.container }>
    { props.children }
  </div>
)


export default Container
