/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      collapsible: true,
      items: [
        'overview/introduction',
        'overview/libraries',
        'overview/media-type',
        'overview/sandbox-environment',
        'overview/pagination',
        'overview/sorting',
        'overview/localization',
        'overview/sparse-fieldsets'
      ]
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'generated-index',
        title: 'Authentication',
        description: 'The viagogo API uses OAuth2 for all authentication. OAuth2 is a protocol that lets external applications access public viagogo resources and private viagogo user details without getting their password.'
      },
      items: [
        'authentication/basic-steps',
        'authentication/application-only-authentication-flow',
        'authentication/user-login-authentication-flow',
        'authentication/token-expiration',
        'authentication/scopes'
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
