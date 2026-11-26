import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Security Engineer World',
  tagline: 'Trilha de estudos em Security Engineering — da Foundation ao Master',
  favicon: 'img/favicon.svg',

  url: 'https://GuerraAna.github.io',
  baseUrl: '/security-engineer-world/',

  organizationName: 'GuerraAna',
  projectName: 'security-engineer-world',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/GuerraAna/security-engineer-world/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['pt', 'en'],
        highlightSearchTermsOnTargetPage: true,
        searchBarPosition: 'right',
        searchBarShortcut: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: true,
    },
    navbar: {
      title: 'SEC World',
      logo: {
        alt: 'Security Engineer World',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentação',
          className: 'nav-icon nav-icon-docs',
        },
        {
          href: 'https://github.com/GuerraAna/security-engineer-world',
          label: 'GitHub',
          position: 'right',
          className: 'nav-icon nav-icon-github',
        },
        {
          type: 'custom-colorModeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Trilha',
          items: [
            {label: 'Introdução', to: '/docs/intro'},
            {label: 'Foundation', to: '/docs/foundation'},
          ],
        },
        {
          title: 'Referências',
          items: [
            {label: 'OWASP', href: 'https://owasp.org'},
            {label: 'NIST', href: 'https://www.nist.gov'},
            {label: 'MITRE ATT&CK', href: 'https://attack.mitre.org'},
            {label: 'PortSwigger Academy', href: 'https://portswigger.net/web-security'},
          ],
        },
      ],
      copyright: `Documentação pessoal de estudos · Ana Guerra · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'python', 'diff', 'powershell', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
