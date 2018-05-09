import React from "react";

import styles from "./index.css";

const Footer = () => (
  <footer className={styles.footer}>
    {/* If you like Phenomic, this is a way to share the love ;) */}
    <p>
      <a href={"https://phenomic.io"} className={styles.phenomicReference}>
        {"Website generated with "}
        <span className={styles.phenomicReferenceName}>{`<Phenomic />`}</span>
      </a>
    </p>
  </footer>
);

export default Footer;
