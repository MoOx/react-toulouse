import React from "react";
import Helmet from "react-helmet";

import pkg from "../../../package.json";

const DefaultHeadMeta = props => (
  <div hidden>
    <Helmet
      meta={ [
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

export default DefaultHeadMeta
