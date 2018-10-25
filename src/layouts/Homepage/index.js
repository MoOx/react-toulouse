import React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";

import Page from "../Page";
import PagesList from "../../components/PagesList";
import Cta from "../../components/CTA";
import gitHubSvg from "../../icons/iconmonstr-github-1.svg";
import pkg from "../../../package.json";
import Loading from "../../components/Loading";

const numberOfLatestPosts = 6;

const Homepage = props => {
  return (
    <Page {...props}>
      <hr />
      {props.latestPosts &&
        props.latestPosts.node &&
        props.latestPosts.node.list &&
        props.latestPosts.node.list.length > 0 && (
          <div>
            <h2>{"Les précédents meetups"}</h2>
            <PagesList path="meetup" pages={props.latestPosts.node.list} />
          </div>
        )}
      <hr />
      <Cta
        href={pkg.repository}
        icon={gitHubSvg}
        buttonText="react-toulouse sur GitHub"
        style={{ margin: "2rem", textAlign: "center" }}
      >
        Intéragissez avec nous concernant l’organisation des évènements à venir
        sur notre dépôt GitHub.
      </Cta>
    </Page>
  );
};

const HomepageContainer = withPhenomicApi(Homepage, props => ({
  page: query({
    id: props.params.splat || "",
    path: "content"
  }),
  latestPosts: query({
    path: "content/meetup"
  })
}));

export default HomepageContainer;
