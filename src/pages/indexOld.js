import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Getting Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// Discussion
function DiscussionBoard() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className={clsx('hero hero--secondary', styles.heroBanner)}>
        <p className="container hero__subtitle">
          Join our discussion
          <br/>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/kuhlaid/carrrboro-composting/discussions/2">
            What are the key characteristics you typically look for in dataset statistics? 🤔
          </Link>
        </p>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline} homepage`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <DiscussionBoard />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
