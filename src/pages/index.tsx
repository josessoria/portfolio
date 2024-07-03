import React from 'react';

import Layout from '../containers/Layout';
import SEO from '../containers/SEO';
import Home from '../containers/Home';
import Navbar from '../components/Navbar';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <SEO title="Intro" />
    <Home />
  </Layout>
);

export default IndexPage;
