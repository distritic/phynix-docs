import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        The Phynix framework was designed for ease of use in Lua, so that you can focus
        on what matters most - <b>development</b>.
      </>
    ),
  },
  {
    title: 'Maintainable',
    description: (
      <>
        Our code is designed and written for future maintainability. It
        couldn't be easier to manage your own roleplay server.
      </>
    ),
  },
  {
    title: 'Powered by Cfx.re',
    description: (
      <>
        Designed to run on the Cfx.re/FiveM platform only, we guarantee you
        will be supplied with state-of-the-art content.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h3>Why Phynix?</h3>
          <p>
            We guarantee that we maintain our resources to fully working order and will provide support with any bugs or errors for the packages you purchase. We will provide you with careful installation steps, guides and package dependencies where appropriate. Our Phynix codebase will receive regular updates where necessary, with the potential of future packages being introduced. Our packages are fully integrated with the Phynix framework and between Phynix resources.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://store.phynix.gg/">
              Buy Now
            </Link>
          </div>
        </div>
        <br/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br/>
        <div className="text--center">
          <h3>Improve Our Documentation</h3>
          <p>Help us improve our docs by visiting our <Link to="https://github.com/distritic/phynix-docs">GitHub Page</Link> and submitting a pull request with your changes/additions. 
          <br/>
          Our top 3 monthly contributors which help maintain our project by writing documentation will receive a 50% discount on any purchase, for each month of contribution. If you are selected as a top contributor, you will be contacted via Discord or GitHub with steps to claim your reward.
          <br/>
          <br/>
          Our docs can always improve, and with your help we can make them better! Whether it be chat commands, general features, information or more - any contribution helps. 

          </p>
        </div>
      </div>
    </section>
  );
}
