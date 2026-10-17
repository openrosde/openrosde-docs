import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js. Do not use client-side code here (browser APIs, JSX).

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/quick-start', 'getting-started/basic-usage'],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/advanced-usage',
        'guides/user-overlay',
        'guides/extensions',
        'guides/ros2',
        'guides/robot-models',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['platforms', 'reference/directory-structure'],
    },
    {
      type: 'category',
      label: 'Project',
      collapsed: false,
      items: ['project/roadmap', 'project/contributing', 'project/citing', 'project/authors', 'project/license'],
    },
  ],
};

export default sidebars;
