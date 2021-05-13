import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>What's ssl.wiki ?</p>;

const FirstRightText = () => (
  <p>
    The web's most comprehensive guide to obtain ssl cretificates for free.{' '}
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      pre-shadowed homepage template
    </a>
    . Learn how to obtain free SSL for any platform <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const SecondLeftText = () => <p>Our motto</p>;

const SecondRightText = () => (
  <p>
    We belive that encryption is a fundamental right & nobody should be paying for it.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Read more →
    </a>
  </p>
);

const BannerText = () => <h1>SSL.WIKI</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
