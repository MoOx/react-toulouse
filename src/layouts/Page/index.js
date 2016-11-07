import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"

import Loading from "../../components/Loading"
import CTA from "../../components/CTA"
import twitterSvg from "../../icons/iconmonstr-twitter-1.svg"

import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      {
        head.title &&
        <div className={ styles.header }>
          <div className={ styles.wrapper }>
            <img src="/assets/react.svg" width="128" height="128" />
            <h1 className={ styles.heading }>{ head.title }</h1>
            {
              head.cta &&
              <div className={ styles.ctas }>
                <CTA
                  href={ `https://twitter.com/${ pkg.twitter }` }
                  icon={ twitterSvg }
                  buttonText={ "@ReactToulouse sur Twitter" }
                >
                  Suivez nous sur Twitter pour être prévenu des
                  dates et lieux des prochaines rencontres.
                </CTA>

                <CTA
                  href={ "http://eepurl.com/cnF-6v" }
                  buttonStyle={ "Inverted" }
                  buttonText={ "Inscrivez-vous notre mailing liste" }
                >
                  Restez informés via notre newsletter
                  pour ne ratez aucun rassemblement !
                </CTA>
              </div>
            }
          </div>
        </div>
      }
      <div className={ styles.wrapper + " " + styles.body }>
        { header }
        {
          isLoading
          ? <Loading />
          : <BodyContainer>{ body }</BodyContainer>
        }
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
