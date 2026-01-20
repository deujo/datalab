import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
            to="/docs/databricks/academy-notes">
            ⏱️ Accéder aux Cheat Sheets
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil | ${siteConfig.title}`}
      description="Le lab Data Engineering de Jonathan Delattre">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h3>⚡ Snippets Prêts à l'emploi</h3>
                <p>Ne réinventez pas la roue. Copiez-collez mes scripts PySpark, SQL et DAX testés en production.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h3>🏗️ Architecture & Databricks</h3>
                <p>Retours d'expérience sur le Lakehouse, Delta Lake et l'optimisation des pipelines Azure.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h3>📊 Power BI Lab</h3>
                <p>Templates de dashboards et astuces de modélisation pour passer au niveau supérieur.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}