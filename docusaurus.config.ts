import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js. Do not use client-side code here (browser APIs, JSX).

const GITHUB_ORG = 'https://github.com/openrosde';
const GITHUB_REPO = 'https://github.com/openrosde/openrosde';
// The DOI of the paper in Advanced Robotics (vol. 36, no. 11, 2022).
// Keep in sync with src/pages/index.tsx.
const PAPER_URL = 'https://doi.org/10.1080/01691864.2022.2068353';
const COAROBO_URL = 'https://coarobo.com/';

const config: Config = {
  title: 'OpenRoSDE',
  tagline:
    'The open-source Software Development Environment for collaborative research in robotic system integration',

  future: {
    v4: true,
  },

  url: 'https://openrosde.org',
  baseUrl: '/',

  organizationName: 'openrosde',
  projectName: 'openrosde-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: 'OpenRoSDE',
        alternateName: 'Open Robotic SDE',
        url: 'https://openrosde.org/',
        description:
          'The open-source Software Development Environment (SDE) for collaborative research in robotic system integration, containerized with Docker for ROS 1 and ROS 2.',
        codeRepository: GITHUB_REPO,
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        citation: PAPER_URL,
        author: {'@type': 'Organization', name: 'Coarobo GK', url: COAROBO_URL},
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/openrosde/openrosde-docs/edit/main/',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'OpenRoSDE, Open Robotic SDE, SDE, Software Development Environment, robotic system integration, collaborative research, ROS, ROS 2, Docker, Gazebo, FlexBE, open-source',
      },
      {name: 'author', content: 'Coarobo GK'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    navbar: {
      title: 'OpenRoSDE',
      hideOnScroll: false,
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentation'},
        {to: '/docs/getting-started/quick-start', label: 'Quick Start', position: 'left'},
        {to: '/docs/platforms', label: 'Platforms', position: 'left'},
        {to: '/docs/project/contributing', label: 'Contributing', position: 'left'},
        {href: PAPER_URL, label: 'Paper', position: 'right'},
        {
          href: GITHUB_REPO,
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
          title: 'Documentation',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Quick Start', to: '/docs/getting-started/quick-start'},
            {label: 'Basic Usage', to: '/docs/getting-started/basic-usage'},
            {label: 'Extensions', to: '/docs/guides/extensions'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Platforms & Devices', to: '/docs/platforms'},
            {label: 'Contributing', to: '/docs/project/contributing'},
            {label: 'Citing OpenRoSDE', to: '/docs/project/citing'},
            {label: 'License', to: '/docs/project/license'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'OpenRoSDE GitHub Organization', href: GITHUB_ORG},
            {label: 'Issues', href: `${GITHUB_REPO}/issues`},
            {label: 'Advanced Robotics Paper', href: PAPER_URL},
            {label: 'Coarobo GK', href: COAROBO_URL},
          ],
        },
      ],
      copyright: `Copyright © 2019 Coarobo GK. Developed by Coarobo GK and the OpenRoSDE community under the Apache License 2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'docker', 'ini', 'json', 'yaml'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
