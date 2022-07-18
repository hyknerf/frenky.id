import * as React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import { useLocation } from "@reach/router";

export declare interface HelmetProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        firstName
        lastName
        gender
        username
      }
    }
  }
`;

const SEO = (props: HelmetProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    firstName,
    lastName,
    gender,
    username,
  } = site.siteMetadata;

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${props.image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <base target="_blank" href="https://frenky.id/" />

      <meta name="description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta property="og:type" content="website" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {firstName && (
        <meta property="og:type:profile:first_name" content={firstName} />
      )}

      {lastName && (
        <meta property="og:type:profile:last_name" content={lastName} />
      )}

      {username && (
        <meta property="og:type:profile:username" content={username} />
      )}

      {gender && <meta property="og:type:profile:gender" content={gender} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
