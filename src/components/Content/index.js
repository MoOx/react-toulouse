import React from "react";

import styles from "./index.css";

const Content = props => <div className={styles.content}>{props.children}</div>;

export default Content;
