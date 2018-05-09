import React from "react";

import Page from "../Page";

import styles from "./index.css";

const PageError = ({ error, errorText, ...otherProps }) => (
  <Page {...otherProps} page={{}}>
    <div className={ styles.container }>
      <div className={ styles.oops }>{ "😱 Oooops!" }</div>
      <div className={ styles.text }>
        <p className={ styles.title }>
          <strong>{ error }</strong>
          { " " }
          { errorText }
        </p>
        {
          error === 404 &&
          <div>
            { "It seems you found a broken link. " }
            { "Sorry about that. " }
            <br />
            { "Do not hesitate to report this page 😁." }
          </div>
        }
      </div>
    </div>
  </Page>
)

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found"
};

export default PageError
