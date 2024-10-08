import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import PreviewImageSrc from '../../assets/images/preview.png';

interface Props {
  description?: string;
  lang?: string;
  title: string;
  previewImageSrc?: string;
}

const SEO = ({ description, lang, title, previewImageSrc }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang || 'en'} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      {/* socials */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="josesoria.com.ar" />
      <meta property="og:locale" content="en_ES" />
      <meta property="article:author" content={title} />
      <meta property="og:image" content={`https://ibb.co/61p4VPk`} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:site" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`https://ibb.co/61p4VPk`} />

      {/* personal meta */}
      <link rel="me" href="https://josesoria.com.ar/" type="text/html" />
      <link rel="me" href="mailto:josesoriap21@gmail.com" />
      <link rel="me" href="sms:+544816100078" />
    </Helmet>
  );
};

export default SEO;
