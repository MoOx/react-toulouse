import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"
import Cta from "../../components/CTA"
import gitHubSvg from "../../icons/iconmonstr-github-1.svg"

const numberOfLatestPosts = 6

const Homepage = (
  props,
  {
    collection,
    metadata: { pkg },
  }
) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

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
      {
        latestPosts.length > 0 &&
        <div>
          <h2>{ "Latest Posts" }</h2>
          <PagesList pages={ latestPosts } />
        </div>
      }
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
}

export default Homepage
