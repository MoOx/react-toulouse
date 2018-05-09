import React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";

import Page from "./Page";

const PageContainer = withPhenomicApi(Page, props => ({
  page: query({
    id: props.params.splat || ""
  })
}));

export default PageContainer;
