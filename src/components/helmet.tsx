import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

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
        fbAppId
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
    fbAppId,
  } = site.siteMetadata;

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${props.image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {seo.image && <meta property="og:image:url" content={seo.image} />}

      {seo.image && <meta property="og:image:secure_url" content={seo.image} />}

      {seo.title && <meta property="og:image:alt" content={seo.title} />}

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

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

      <link rel="me" href="https://techhub.social/@hyknerf" />
    </Helmet>
  );
};

export default SEO;
