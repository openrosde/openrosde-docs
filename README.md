<h1 align="center">openrosde.org</h1>

<p align="center">
  Source of the <a href="https://openrosde.org/">OpenRoSDE website and documentation</a>.
</p>

<p align="center">
  <a href="https://github.com/openrosde/openrosde-docs/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/openrosde/openrosde-docs/deploy.yml?branch=main&label=deploy" alt="Deploy to GitHub Pages"></a>
  <a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/Docusaurus-3.10.1-3ECC5F?logo=docusaurus&logoColor=white" alt="Docusaurus 3.10.1"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-%E2%89%A520-5FA04E?logo=nodedotjs&logoColor=white" alt="Node.js 20 or later"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-2E5C8A" alt="License: Apache-2.0"></a>
  <a href="https://openrosde.org/"><img src="https://img.shields.io/badge/website-openrosde.org-5E5FC2" alt="Website: openrosde.org"></a>
</p>

---

The site is built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages on every push to `main`.
OpenRoSDE itself lives in [https://github.com/openrosde/openrosde](https://github.com/openrosde/openrosde), and its platforms and devices in the other repositories of [https://github.com/openrosde](https://github.com/openrosde).

## 💻 Develop Locally

Requires [Node.js](https://nodejs.org/) 20 or later.

```bash
npm ci
npm start          # development server with live reload on http://localhost:3000
npm run build      # production build into build/, fails on broken links and anchors
npm run serve      # serve the production build locally
npm run typecheck  # type-check the configuration and the pages
```

## 📁 Structure

| Path                   | Contents                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `src/pages/index.tsx`  | Homepage                                                                                |
| `src/css/sibling.css`  | Fonts, header, footer, hero, and cards, shared word for word with `openrois.org`        |
| `src/css/custom.css`   | Palette of OpenRoSDE, taken from its logo                                               |
| `docs/`                | Documentation, organized as Getting Started, Guides, Reference, and Project             |
| `sidebars.ts`          | Documentation navigation                                                                |
| `static/CNAME`         | Custom domain of GitHub Pages                                                           |
| `docusaurus.config.ts` | Site configuration                                                                      |
| `.github/workflows/`   | `deploy.yml` builds and deploys `main`, and `test-deploy.yml` builds every pull request |

## 🚀 Deployment

The workflow `deploy.yml` builds the site on every push to `main` and deploys it with GitHub Pages to the custom domain `openrosde.org`, which `static/CNAME` names.
The workflow `test-deploy.yml` builds the site on every pull request into `main`, so a broken link fails the pull request rather than the deployment.
Both workflows pin every action to the full commit SHA of a release, with its version in a comment, and grant each job only the permissions it needs.
The settings of the repository must select GitHub Actions as the source of GitHub Pages, and `openrosde.org` as its custom domain.

## ✍️ Writing Guidelines

- Keep each page faithful to the document of the core it comes from, as the Directory Structure page lists, and change the document of the core first, so that the site and the core never contradict each other.
- Mark anything not yet implemented as in progress or planned, and never describe a feature the core does not have.
- Write one sentence per line, so that every change reads as a clean diff.
- Use "OpenRoSDE" for the project and "Apache-2.0" for the license.
- Put code identifiers, such as file names, commands, and variables, in backticks.
- Avoid em dashes, en dashes, and semicolons in prose.
- Use Docusaurus admonitions such as `:::note` in `docs/`, since a GitHub alert such as `> [!NOTE]` shows as a plain quote on the site.
- Keep `static/img/logo.svg` a copy of `profile/assets/openrosde-logo.svg` of [https://github.com/openrosde/.github](https://github.com/openrosde/.github), which holds the source of the logo.

## ⚖️ License

Content and code in this repository are licensed under the [Apache License 2.0](LICENSE).
Copyright 2019 Coarobo GK.
