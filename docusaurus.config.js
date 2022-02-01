// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const githubRepoUrl = 'https://github.com/viagogo/viagogo-api-docs';
const githubRepoEditUrl = githubRepoUrl + '/tree/main';

/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: 'account-api',
        spec: './static/openapi/account.json',
        routePath: '/api-reference/account',
      },
      {
        id: 'inventory-api',
        spec: './static/openapi/inventory.json',
        routePath: '/api-reference/inventory',
      },
      {
        id: 'sales-api',
        spec: './static/openapi/sales.json',
        routePath: '/api-reference/sales',
      },
      {
        id: 'webhooks-api',
        spec: './static/openapi/webhooks.json',
        routePath: '/api-reference/webhooks',
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#a2d165',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      redocOptions: {
        disableSearch: true,
        expandResponses: '200,201',
        hideDownloadButton: true,
        noAutoAuth: true,
      },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'viagogo API',
  tagline: "viagogo's Developer Portal",
  url: 'https://viagogo.github.io/',
  baseUrl: '/viagogo-api-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'viagogo',
  projectName: 'viagogo-api-docs',
  deploymentBranch: 'gh-pages',

  presets: [
    redocusaurus,
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: githubRepoEditUrl,
        },
        blog: {
          showReadingTime: true,
          editUrl: githubRepoEditUrl,
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
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'viagogo API',
        logo: {
          alt: 'viagogo Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/introduction',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Announcements', position: 'left'},
          {
            label: ' API Reference',
            position: 'left',
            items: [
              {
                label: 'Account',
                to: '/api-reference/account'
              },
              {
                label: 'Inventory',
                to: '/api-reference/inventory'
              },
              {
                label: 'Sales',
                to: '/api-reference/sales'
              },
              {
                label: 'Webhooks',
                to: '/api-reference/webhooks'
              },
            ]
          },
          {
            href: githubRepoUrl,
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview/introduction',
              },
              {
                label: 'Client Libraries',
                to: '/docs/overview/libraries',
              },
              {
                label: 'Authentication',
                to: 'docs/authentication/',
              },
              {
                label: 'Guides',
                to: 'docs/guides/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://www.stubhub.com/about-us',
              },
              {
                label: 'Careers',
                href: 'https://www.stubhub.com/jobs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: githubRepoUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} viagogo Entertainment Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'php', 'ruby']
      },
    }),
};

module.exports = config;
