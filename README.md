# Portfolio Website

A modern, responsive portfolio website built with Astro, featuring a clean and professional design with multiple interactive components.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.15.1
- **UI Components**: 
  - Swiper for carousels
  - Tippy.js for tooltips
  - PhotoSwipe for image galleries
  - Reveal.js for presentations
  - Splide for additional carousel functionality
- **Icons**: Iconify with Simple Icons
- **TypeScript**: For type safety and better development experience

## 📁 Detailed Project Structure

```
/
├── public/                          # Static assets
│   ├── assets/                     # Media files
│   │   ├── projects_screenshots/   # Project screenshots
│   │   └── sample-profile.jpg      # Profile image
│   ├── css/                        # Stylesheets
│   │   ├── themes/                 # Theme-specific styles
│   │   ├── splide-core.min.css     # Splide core styles
│   │   └── splide.min.css          # Splide styles
│   ├── js/                         # JavaScript files
│   └── fonts/                      # Custom fonts
│
├── src/                            # Source code
│   ├── components/                 # Reusable UI components
│   │   ├── ExperienceCard.astro    # Experience card component
│   │   ├── Project.astro           # Project showcase component
│   │   ├── SkillCard.astro         # Skills display component
│   │   ├── Navbar.astro            # Navigation bar
│   │   ├── Pickbar.astro           # Selection bar component
│   │   └── Card.astro              # Base card component
│   │
│   ├── views/                      # Main view components
│   │   ├── Experience.astro        # Experience section
│   │   ├── Skills.astro            # Skills section
│   │   ├── Projects.astro          # Projects section
│   │   └── AboutMe.astro           # About section
│   │
│   ├── layouts/                    # Layout templates
│   │   └── Layout.astro            # Main layout template
│   │
│   ├── pages/                      # Route-based pages
│   │   ├── en/                     # English pages
│   │   ├── es/                     # Spanish pages
│   │   └── index.astro             # Main entry point
│   │
│   ├── i18n/                       # Internationalization
│   │   ├── ui.ts                   # UI translations
│   │   └── utils.ts                # i18n utilities
│   │
│   ├── utils/                      # Utility functions
│   ├── icons/                      # Icon components
│   └── env.d.ts                    # TypeScript environment declarations
│
├── .astro/                         # Astro build cache
├── dist/                           # Production build output
├── .vscode/                        # VS Code settings
├── node_modules/                   # Dependencies
├── .git/                           # Git repository
├── astro.config.mjs                # Astro configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project metadata and dependencies
├── package-lock.json               # Dependency lock file
└── .gitignore                      # Git ignore rules
```

## 🛠️ Development

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
```

### Available Scripts

| Command           | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`    | Start development server at `localhost:4321`     |
| `npm run start`  | Start dev server with host access                |
| `npm run build`  | Build production site to `./dist/`               |
| `npm run preview`| Preview production build locally                 |
| `npm run astro`  | Run Astro CLI commands                           |

## 🌐 Features

- Responsive design
- Multi-language support (English and Spanish)
- Interactive components:
  - Image galleries
  - Carousels
  - Tooltips
  - Presentation slides
- Modern UI with custom styling
- Optimized performance
- TypeScript support

## 📦 Dependencies

Key dependencies include:
- `@astrojs/check`: Type checking
- `@splidejs/splide`: Carousel functionality
- `photoswipe`: Image gallery
- `reveal.js`: Presentation framework
- `swiper`: Touch slider
- `tippy.js`: Tooltip library
- `astro-icon`: Icon integration

## 🔧 Configuration

- `astro.config.mjs`: Astro configuration
- `tsconfig.json`: TypeScript configuration
- `.gitignore`: Git ignore rules

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
