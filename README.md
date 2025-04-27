# Portfolio Website

A modern, multilingual portfolio website built with Astro, featuring a responsive design, interactive components, and a beautiful gradient background. The site showcases projects, skills, and contact information in a clean and professional manner.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro 4.11.5 for optimal performance
- **Multilingual Support**: Language switching capability (default: Spanish)
- **Responsive Design**: Fully responsive layout with smooth scrolling
- **Interactive Components**:
  - Swiper for carousel functionality
  - PhotoSwipe for image gallery
  - SweetAlert2 for beautiful notifications
  - Dynamic navbar with scroll effects
- **Styling**:
  - Jost Variable font for modern typography
  - Beautiful gradient background
  - Custom scroll behavior
- **Deployment**: Netlify with GitHub Pages backup
- **State Management**: NanoStores for persistent state
- **Icon System**: Material Symbols Light and Simple Icons integration

## 🏗️ Project Structure

```text
/
├── public/                              # Static assets
│   ├── assets/                         # General assets (images, etc.)
│   ├── fonts/                          # Custom font files
│   ├── portfolio-website/              # Portfolio-specific assets
│   ├── projects_screenshots/           # Project demonstration images
│   └── favicon.svg                     # Website favicon
│
├── src/
│   ├── components/                     # Reusable UI components
│   │   ├── Navbar.astro               # Responsive navigation with language switcher
│   │   ├── ProjectCard.astro          # Project showcase card with gallery
│   │   └── SkillBar.astro             # Animated skill level visualization
│   │
│   ├── data/                          # Data and content
│   │   └── languages.js               # Multilingual content and skills data
│   │
│   ├── icons/                         # Custom SVG icon components
│   │   ├── Globe.astro               # Language selection icon
│   │   └── ThreeBars.astro           # Mobile menu icon
│   │
│   ├── layouts/                       # Page layouts
│   │   └── Layout.astro              # Main layout with global styles and scripts
│   │
│   ├── pages/                         # Route pages
│   │   └── index.astro               # Single-page application structure
│   │
│   ├── states/                        # State management
│   │   └── persistentStates.js       # Persistent state configuration
│   │
│   ├── views/                         # Main content sections
│   │   ├── AboutMe.astro             # Personal introduction section
│   │   ├── ContactMe.astro           # Contact form section
│   │   ├── Projects.astro            # Projects showcase section
│   │   └── Skills.astro              # Skills visualization section
│   │
│   └── env.d.ts                       # TypeScript environment declarations
│
├── astro.config.mjs                    # Astro configuration with Netlify adapter
├── package.json                        # Project dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
└── .gitignore                         # Git ignore rules
```

## 🛠️ Tech Stack

- **Core Framework**: Astro 4.11.5
- **Deployment**:
  - Primary: Netlify (@astrojs/netlify)
  - Backup: GitHub Pages (gh-pages)
- **Styling**:
  - CSS with global styles
  - Jost Variable font
  - Custom gradients and animations
- **Icons**: 
  - Material Symbols Light
  - Simple Icons
  - Custom SVG components
- **State Management**: 
  - NanoStores
  - @nanostores/persistent
- **UI Components**:
  - Swiper 11.1.9
  - PhotoSwipe 5.4.4
  - SweetAlert2 11.12.4

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Development

```bash
# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Configuration

The project is configured in `astro.config.mjs`:
- Site URL: https://cami98735264.netlify.app/
- Server-side rendering enabled
- Netlify adapter for deployment
- Astro Icon integration for icon management

## 🌐 Features in Detail

- **Multilingual Support**: 
  - Language switching via URL parameter (?lang=es|en)
  - Default language: Spanish
  - Persistent language selection

- **Responsive Design**:
  - Mobile-first approach
  - Dynamic navbar with scroll effects
  - Smooth scrolling behavior
  - Responsive image galleries

- **Performance**:
  - Server-side rendering
  - Optimized assets
  - Lazy-loaded components
  - Efficient state management

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

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
