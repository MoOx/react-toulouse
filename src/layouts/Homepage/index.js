import React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";

import Page from "../Page"
import PagesList from "../../components/PagesList"
import Cta from "../../components/CTA"
import gitHubSvg from "../../icons/iconmonstr-github-1.svg"
import pkg from "../../../package.json";
import Loading from "../../components/Loading";

const numberOfLatestPosts = 6


const Homepage = props => {
  return (
    <Page { ...props }>
      <Cta
        href={ pkg.repository }
        icon={ gitHubSvg }
        buttonText="react-toulouse sur GitHub"
        style={{ margin: "2rem" }}
      >
        Intéragissez avec nous concernant l’organisation
        des évènements à venir sur notre dépôt GitHub.
      </Cta>
      {props.latestPosts &&
        props.latestPosts.node &&
        props.latestPosts.node.list &&
        props.latestPosts.node.list.length > 0 && (
          <div>
            <h2>{"Latest Posts"}</h2>
            <PagesList path="posts" pages={props.latestPosts.node.list} />
          </div>
        )}
    </Page>
  )
}

const HomepageContainer = withPhenomicApi(Homepage, props => ({
  page: query({
    id: props.params.splat || ""
  }),
  latestPosts: query({
    path: "posts",
    limit: 6
  })
}));

export default HomepageContainer;
