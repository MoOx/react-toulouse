import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import AppContainer from "./src/AppContainer";
import Homepage from "./src/layouts/Homepage";
import PageContainer from "./src/layouts/PageContainer";
import PageError from "./src/layouts/PageError";

const routes = () => (
  <Router history={browserHistory}>
    <Route component={AppContainer}>
      <Route path="/" component={Homepage} />
      <Route path="404.html" component={PageError} />
      <Route path="*" component={PageContainer} />
    </Route>
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
