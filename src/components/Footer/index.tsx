import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
// import classnames from "classnames";

import GitHubSVG from '../../assets/icons/github.svg';
import TwitterSVG from '../../assets/icons/twitter.svg';
// import StackOverflowSVG from '../../assets/icons/stackoverflow.svg';
// import MediumSVG from '../../assets/icons/medium.svg';
// import HabrSVG from '../../assets/icons/habr.svg';
// import DouSVG from '../../assets/icons/dou.svg';
// import NpmSVG from '../../assets/icons/npm.svg';
// import BehanceSVG from '../../assets/icons/behance.svg';
// import DribbbleSVG from '../../assets/icons/dribbble.svg';
import LinkedInSVG from '../../assets/icons/linkedin.svg';

import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.resources}>

      <OutboundLink
        href="https://github.com/josessoria"
        target="_blank"
        title="Link to my GitHub"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <GitHubSVG />
      </OutboundLink>

      <OutboundLink
        href="https://www.linkedin.com/in/josessoria/"
        target="_blank"
        title="Link to my LinkedIn"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        <LinkedInSVG />
      </OutboundLink>
    </footer>
  );
};

export default Footer;
