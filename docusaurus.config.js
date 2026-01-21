// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Ops Lab',
  tagline: "Le carnet de notes d'un Data Engineer",
  // GitHub Pages values for repo https://github.com/deujo/repo
  url: 'https://deujo.github.io',
  baseUrl: '/datalab/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Future flags
  future: {
    v4: true,
  },

  // GitHub pages deployment config
  organizationName: 'deujo',
  projectName: 'datalab',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/deujo/repo/edit/main/', // facultatif : adapte si tu veux afficher "Edit this page"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Data Ops Lab',
        logo: {
          alt: 'Logo Data',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Ressources',
          },
          { to: 'docs/about', label: 'À propos', position: 'left' },
          {
            href: 'https://github.com/deujo/repo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'DAX — Agrégations', to: '/docs/PowerBI/Dax/01-aggregations-counting' },
            ],
          },
          {
            title: 'Réseaux',
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathandelattre/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonathan Delattre. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;