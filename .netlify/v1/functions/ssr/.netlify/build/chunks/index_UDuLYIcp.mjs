import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, s as spreadAttributes, f as renderComponent } from './astro/server_CD7H2ze5.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DeC3eU71.mjs';

const $$Astro$5 = createAstro("https://cami98735264.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  let language = Astro2.url.searchParams.get("lang") || "es";
  return renderTemplate`<html> <head${addAttribute(language, "lang")}><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/layouts/Layout.astro", void 0);

const languages = {
    es: {
        aboutMe: "¡Hola! 👋,  Mi nombre es Cristián. Soy un desarrollador Full Stack especializado en backend y con amplios conocimientos en JavaScript, ReactJS y ExpressJS. Me destaco en programación avanzada, gestión de bases de datos y diseño de experiencias de usuario (UI/UX).",
        languagesList: [{
            name: "Español",
            value: "es"
        }, {
            name: "Inglés",
            value: "en"
        
        }],
        navbarItems: [
        {
            name: "Sobre mí",
            redirectUrl: "#sobre-mi"
        },
        {
            name: "Proyectos",
            redirectUrl: "#proyectos"
        },
        {
            name: "Contacto",
            redirectUrl: "#contacto"
        }],
        whatsappText: "¡Hola! 👋, ¿Cómo estás? Me gustaría saber más sobre tus servicios.",
        projects: {
            projectsTitle: "Mis Proyectos",
            github: "¡Míralo en github!",
            live: "¡Míralo en vivo!"
        }
    },
    en: {
        aboutMe: "Hello! 👋, My name is Cristián. I'm a Full Stack developer specializing in backend and with extensive knowledge in JavaScript, ReactJS, and ExpressJS. I excel in advanced programming, database management, and user experience design (UI/UX).",
        languagesList: [{
            name: "Spanish",
            value: "es"
        }, {
            name: "English",
            value: "en"
        
        }],
        navbarItems: [
        {
            name: "About me",
            redirectUrl: "#about-me"
        },
        {
            name: "Projects",
            redirectUrl: "#projects"
        },
        {
            name: "Contact",
            redirectUrl: "#contact"
        },
    ],
    whatsappText: "Hello! 👋, How are you? I would like to know more about your services.",
    projects: {
        projectsTitle: "My Projects",
        github: "Check it out on github!",
        live: "Check it out live!"
    }
    }
};

const $$Astro$4 = createAstro("https://cami98735264.github.io/");
const $$ThreeBars = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThreeBars;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"${spreadAttributes(props)}> <path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75m0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75M1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5"></path> </svg>`;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/icons/ThreeBars.astro", void 0);

const $$Astro$3 = createAstro("https://cami98735264.github.io/");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  console.log(Astro2.url.searchParams.get("lang"));
  let currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  console.log(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-5blmo7yk> <div class="navbar__container" data-astro-cid-5blmo7yk> <div class="navbar__logo" data-astro-cid-5blmo7yk> <a href="/" class="navbar__logo__name" data-astro-cid-5blmo7yk>Cristián ~ Full Stack Dev</a> ${renderComponent($$result, "ThreeBars", $$ThreeBars, { "class": "threebars__icon", "data-astro-cid-5blmo7yk": true })} </div> <div class="navbar__items" data-astro-cid-5blmo7yk> ${languages[currentLanguage].navbarItems.map((item) => renderTemplate`<a${addAttribute(item.redirectUrl, "href")} data-astro-cid-5blmo7yk>${item.name}</a>`)} </div> <div class="navbar__language" data-astro-cid-5blmo7yk> <select id="language__select" data-astro-cid-5blmo7yk> ${languages[currentLanguage].languagesList.map((language) => renderTemplate`<option${addAttribute(language.value, "value")}${addAttribute(currentLanguage === language.value, "selected")} data-astro-cid-5blmo7yk> ${language.name} </option>`)} </select> </div> </div> <div class="navbar__items__mobile" style="display: none;" data-astro-cid-5blmo7yk> ${languages[currentLanguage].navbarItems.map((item) => renderTemplate`<a${addAttribute(item.redirectUrl, "href")} data-astro-cid-5blmo7yk>${item.name}</a>`)} </div> </nav>  `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro("https://cami98735264.github.io/");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-jlz3adq6> <section class="aboutme__container"${addAttribute(currentLanguage === "en" ? "about-me" : "sobre-mi", "id")} data-astro-cid-jlz3adq6> <div class="profile__icon" data-astro-cid-jlz3adq6> ${renderComponent($$result, "Image", $$Image, { "width": 300, "height": 300, "loading": "eager", "src": "/assets/profile_picture.jpg", "alt": "Profile", "data-astro-cid-jlz3adq6": true })} <div class="aboutme__social__icons" data-astro-cid-jlz3adq6> <a href="https://github.com/cami98735264" target="_blank" class="aboutme__icons" data-astro-cid-jlz3adq6> ${renderComponent($$result, "Image", $$Image, { "width": 30, "height": 30, "loading": "eager", "src": "/assets/github-mark-white.png", "alt": "Github icon", "data-astro-cid-jlz3adq6": true })} </a> <a href="https://www.linkedin.com/in/cristi%C3%A1n-camilo-rodr%C3%ADguez-montealegre-8a8697272/" target="_blank" class="aboutme__icons" data-astro-cid-jlz3adq6> ${renderComponent($$result, "Image", $$Image, { "width": 30, "height": 30, "loading": "eager", "src": "/assets/linkedin_icon.webp", "alt": "Linkedin icon", "data-astro-cid-jlz3adq6": true })} </a> <a${addAttribute(`https://wa.me/573186562061?text=${languages[currentLanguage].whatsappText}`, "href")} target="_blank" class="aboutme__icons" data-astro-cid-jlz3adq6> ${renderComponent($$result, "Image", $$Image, { "width": 30, "height": 30, "loading": "eager", "src": "/assets/whatsapp_icon.png", "id": "whatsapp_icon", "alt": "Whatsapp icon", "data-astro-cid-jlz3adq6": true })} </a> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mashlowtm0510@gmail.com&su=Hi! I'd like to talk about your services :)&body=Hey!" target="_blank" class="aboutme__icons" data-astro-cid-jlz3adq6> ${renderComponent($$result, "Image", $$Image, { "width": 30, "height": 30, "loading": "eager", "src": "/assets/gmail_icon.png", "id": "gmail_icon", "alt": "Gmail icon", "data-astro-cid-jlz3adq6": true })} </a> </div> </div> <div class="aboutme__social" data-astro-cid-jlz3adq6> <p data-astro-cid-jlz3adq6> ${languages[currentLanguage].aboutMe} </p> </div> </section> </main> `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/AboutMe.astro", void 0);

const $$Astro$1 = createAstro("https://cami98735264.github.io/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  const { title, description, github_url, live_url, images, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project__card" data-astro-cid-mspuyifq> <div class="swiper" data-astro-cid-mspuyifq> <div class="swiper-wrapper" data-astro-cid-mspuyifq> ${images.map((image) => {
    return renderTemplate`<a${addAttribute(image.url, "href")} class="swiper-slide" data-pswp-width="1920" data-pswp-height="1080" data-astro-cid-mspuyifq> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "width": 300, "height": 300, "src": image.url, "alt": image.alt, "data-astro-cid-mspuyifq": true })} </a>`;
  })} </div> <div class="swiper-pagination" data-astro-cid-mspuyifq></div> </div> <h3 data-astro-cid-mspuyifq>${title}</h3> <p data-astro-cid-mspuyifq>${description}</p> <div class="project__card__links" data-astro-cid-mspuyifq> <a${addAttribute(github_url, "href")} target="_blank" data-astro-cid-mspuyifq>${languages[currentLanguage].projects.github}</a> <a${addAttribute(live_url, "href")} target="_blank" data-astro-cid-mspuyifq>${languages[currentLanguage].projects.live}</a> </div> </div>  `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://cami98735264.github.io/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  return renderTemplate`${maybeRenderHead()}<section class="projects__container"${addAttribute(currentLanguage === "en" ? "projects" : "proyectos", "id")} data-astro-cid-amng4zvp> <h2 class="projects__title" data-astro-cid-amng4zvp>${languages[currentLanguage].projects.projectsTitle}</h2> <div class="projects__cards" data-astro-cid-amng4zvp> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp",
      alt: "Project "
    }
  ], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    }
  ], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 3", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    }
  ], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 4", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    }
  ], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 5", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    }
  ], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Project 6", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "github_url": "https://github.com/project1", "live_url": "https://project1.com", "images": [
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    },
    {
      url: "https://static-00.iconduck.com/assets.00/javascript-icon-512x512-q5abze8k.png",
      alt: "Project 1"
    }
  ], "data-astro-cid-amng4zvp": true })} </div> </section> `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cristi\xE1n Dev - Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ` })} `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrador_R/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
