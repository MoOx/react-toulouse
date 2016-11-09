import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"
import { Link } from "react-router"

import Loading from "../../components/Loading"
import Cta from "../../components/CTA"
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
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head && head.metaTitle ? head.metaTitle : head.title

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
      <div className={ styles.header }>
        <div className={ styles.wrapper }>
          <Link to="/">
            <img src="/assets/react.svg" width="128" height="128" />
          </Link>
          <h1 className={ styles.heading }>
            { head.title || "React Toulouse" }
          </h1>
          {
            head.cta &&
            <div className={ styles.ctas }>
              <Cta
                href={ `https://twitter.com/${ pkg.twitter }` }
                icon={ twitterSvg }
                buttonText="@ReactToulouse sur Twitter"
              >
                Suivez nous sur Twitter pour être prévenu des
                dates et lieux des prochaines rencontres.
              </Cta>

              <Cta
                href={ "http://eepurl.com/cnF-6v" }
                buttonStyle={ "Inverted" }
                buttonText={ "Inscrivez-vous notre mailing liste" }
              >
                Restez informés via notre newsletter
                pour ne ratez aucun rassemblement !
              </Cta>
            </div>
          }
        </div>
      </div>
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
