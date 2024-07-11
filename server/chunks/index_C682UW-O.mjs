import { k as createComponent, l as renderTemplate, n as addAttribute, p as renderHead, q as renderSlot, o as createAstro, m as maybeRenderHead, t as renderComponent } from './astro/server_CmvhluSl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  let language = Astro2.url.searchParams.get("lang") || "es";
  return renderTemplate`<html> <head${addAttribute(language, "lang")}><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
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
        }]
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
        }
    ],
    }
};

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  console.log(Astro2.url.searchParams.get("lang"));
  let currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  console.log(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-5blmo7yk> <div class="navbar__container" data-astro-cid-5blmo7yk> <div class="navbar__logo" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk>Cristián ~ Full Stack Dev</a> </div> <div class="navbar__items" data-astro-cid-5blmo7yk> ${languages[currentLanguage].navbarItems.map((item) => renderTemplate`<a${addAttribute(item.redirectUrl, "href")} data-astro-cid-5blmo7yk>${item.name}</a>`)} </div> <div class="navbar__language" data-astro-cid-5blmo7yk> <select id="language__select" data-astro-cid-5blmo7yk> ${languages[currentLanguage].languagesList.map((language) => renderTemplate`<option${addAttribute(language.value, "value")}${addAttribute(currentLanguage === language.value, "selected")} data-astro-cid-5blmo7yk>${language.name}</option>`)} </select> </div> </div></nav>  `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const currentLanguage = Astro2.url.searchParams.get("lang") === "en" ? "en" : "es";
  return renderTemplate`${maybeRenderHead()}<main class="aboutme__container" data-astro-cid-jlz3adq6> <div class="profile__icon" data-astro-cid-jlz3adq6> <img src="/assets/profile_picture.jpg" alt="Cristian's profile picture" data-astro-cid-jlz3adq6> <div class="aboutme__social__icons" data-astro-cid-jlz3adq6> <a href="" class="aboutme__icons" data-astro-cid-jlz3adq6> <img src="/assets/github-mark-white.png" alt="Github icon" data-astro-cid-jlz3adq6> </a> <a href="" class="aboutme__icons" data-astro-cid-jlz3adq6> <img src="/assets/linkedin_icon.webp" alt="Linkedin icon" data-astro-cid-jlz3adq6> </a> <a href="" class="aboutme__icons" data-astro-cid-jlz3adq6> <img src="/assets/whatsapp_icon.png" id="whatsapp_icon" alt="Whatsapp icon" data-astro-cid-jlz3adq6> </a> <a href="" class="aboutme__icons" data-astro-cid-jlz3adq6> <img src="/assets/gmail_icon.png" id="gmail_icon" alt="Gmail icon" data-astro-cid-jlz3adq6> </a> </div> </div> <div class="aboutme__social" data-astro-cid-jlz3adq6> <p data-astro-cid-jlz3adq6> ${languages[currentLanguage].aboutMe} </p> </div> </main> `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/components/AboutMe.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cristi\xE1n Dev - Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ` })} `;
}, "C:/Users/Administrador_R/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrador_R/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
