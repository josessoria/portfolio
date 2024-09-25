import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Home from '../containers/Home';
import Navbar from '../components/Navbar';
import { graphql } from 'gatsby';

const IndexPage = ({ data }: any) => (
  <Layout>
    <Navbar />
    <SEO title="Intro" />
    <Home data={data} /> {/* Pasa data como prop al componente Home */}
  </Layout>
);

export const query = graphql`
  query {
    estudio: file(relativePath: { eq: "estudio.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    gestini: file(relativePath: { eq: "gestini.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    carnesmockup: file(relativePath: { eq: "carnesmockup.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    academy: file(relativePath: { eq: "academy.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    dreamavant: file(relativePath: { eq: "dreamjunk (2).png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    gestinilanding: file(relativePath: { eq: "gestinilanding.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    lootieverse: file(relativePath: { eq: "lootieverse.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    explorador: file(relativePath: { eq: "explorador.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    naka: file(relativePath: { eq: "naka.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    aivision: file(relativePath: { eq: "aivision.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    astrax: file(relativePath: { eq: "astrax.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    cresi: file(relativePath: { eq: "cresi.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    henryshop: file(relativePath: { eq: "henryshop.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    cyt: file(relativePath: { eq: "cyt.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
    portfoilold: file(relativePath: { eq: "portfoilold.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
  }
`;

export default IndexPage;
