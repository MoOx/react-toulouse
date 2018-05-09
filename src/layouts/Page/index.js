import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router";
import {
  BodyRenderer,
  textRenderer
} from "@phenomic/preset-react-app/lib/client";

import Loading from "../../components/Loading";
import Cta from "../../components/CTA";
import twitterSvg from "../../icons/iconmonstr-twitter-1.svg";
import pkg from "../../../package.json";
import PageError from "../PageError";

import styles from "./index.css";

const Page = props => {
  if (props.hasError) {
    return <PageError />;
  }

  let metaTitle;
  let meta;

  if (props.page.node) {
    metaTitle = props.page.node.metaTitle
      ? props.page.node.metaTitle
      : props.page.node.title;
    const description = textRenderer(props.page.node.body).slice(0, 150);
    meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: pkg.phenomic.url + props.location.pathname
      },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${pkg.twitter}` },
      { name: "twitter:description", content: description },
      { name: "description", content: description }
    ];
  }

  return (
    <div className={styles.page}>
      {meta && <Helmet title={metaTitle} meta={meta} />}
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Link to="/">
            <img src="/assets/react.svg" width="128" height="128" />
          </Link>
          <h1 className={styles.heading}>
            {props.isLoading
              ? "..."
              : (props.page.node && props.page.node.title) || "React Toulouse"}
          </h1>
          {props.page.node &&
            props.page.node.cta && (
              <div className={styles.ctas}>
                <Cta
                  href={`https://twitter.com/${pkg.twitter}`}
                  icon={twitterSvg}
                  buttonText="@ReactToulouse sur Twitter"
                >
                  Suivez nous sur Twitter pour être prévenu des dates et lieux
                  des prochaines rencontres.
                </Cta>

                <Cta
                  href={"http://eepurl.com/cnF-6v"}
                  buttonStyle={"Inverted"}
                  buttonText={"Inscrivez-vous notre mailing liste"}
                >
                  Restez informés via notre newsletter pour ne ratez aucun
                  rassemblement !
                </Cta>
              </div>
            )}
        </div>
      </div>
      <div className={styles.wrapper + " " + styles.body}>
        {props.header}
        {props.isLoading ? (
          <Loading />
        ) : (
          props.page.node && <BodyRenderer>{props.page.node.body}</BodyRenderer>
        )}
        {props.children}
        {props.footer}
      </div>
    </div>
  );
};

export default Page;
