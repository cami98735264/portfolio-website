import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './astro/server_CmvhluSl.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"language__select\").addEventListener(\"change\",n=>{const a=n.target.value,e=new URL(window.location.href);e.searchParams.set(\"lang\",a),window.location.href=e});\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:Jost Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/jost-cyrillic-wght-normal.B0_vFdaS.woff2) format(\"woff2-variations\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Jost Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/jost-latin-ext-wght-normal.B4kqP43q.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Jost Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/jost-latin-wght-normal.CfFW3YMY.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*{box-sizing:border-box;margin:0;padding:0;font-family:Jost Variable,sans-serif;font-weight:400;color:#bdbdbd}body{background:linear-gradient(90deg,#060338,#0c0c66 35%,#010f12)}html{scroll-behavior:smooth}select{background:none;border:1px solid #bdbdbd;color:#bdbdbd;padding:5px 10px;font-size:1.1rem}.navbar[data-astro-cid-5blmo7yk]{position:fixed;top:0;left:0;width:100%;z-index:1000}.navbar__container[data-astro-cid-5blmo7yk]{margin:20px;display:flex;justify-content:space-around;align-items:center;font-size:1.1rem}.navbar__container[data-astro-cid-5blmo7yk] a[data-astro-cid-5blmo7yk]{text-decoration:none;color:#bdbdbd}.navbar__items[data-astro-cid-5blmo7yk]{display:flex;gap:20px}.navbar__items[data-astro-cid-5blmo7yk] a[data-astro-cid-5blmo7yk]{position:relative}.navbar__items[data-astro-cid-5blmo7yk] a[data-astro-cid-5blmo7yk]:after{content:\"\";position:absolute;bottom:-5px;left:0;width:100%;height:2px;background-color:#bdbdbd;transform:scaleX(0);transform-origin:right;transition:transform .3s}.navbar__items[data-astro-cid-5blmo7yk] a[data-astro-cid-5blmo7yk]:hover:after{transform:scaleX(1);transform-origin:left}.aboutme__container[data-astro-cid-jlz3adq6]{display:flex;align-items:center;justify-content:space-around;gap:20px;margin:20px;flex-wrap:wrap;height:100vh}.aboutme__social[data-astro-cid-jlz3adq6]{display:flex;flex-direction:column;gap:20px;width:50%}.profile__icon[data-astro-cid-jlz3adq6]{align-items:center;display:flex;flex-direction:column;gap:20px}.aboutme__social__icons[data-astro-cid-jlz3adq6] img[data-astro-cid-jlz3adq6]{opacity:.7;width:30px;height:30px;transition:opacity .3s}.aboutme__social__icons[data-astro-cid-jlz3adq6] img[data-astro-cid-jlz3adq6]:hover{opacity:1}.aboutme__social__icons[data-astro-cid-jlz3adq6]{background:#fff3;border-radius:16px;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.3);margin-left:auto;display:flex;justify-content:space-around;width:100%;padding:8px;align-items:center;gap:0}img[data-astro-cid-jlz3adq6]:not(.aboutme__social__icons img){width:300px;height:300px;object-fit:cover;border-radius:50%}p[data-astro-cid-jlz3adq6]{font-size:1.1rem;text-align:center;color:#c3c1c1}@media screen and (max-width: 965px){.aboutme__container[data-astro-cid-jlz3adq6]{flex-direction:column;justify-content:center;align-items:center}.aboutme__social[data-astro-cid-jlz3adq6],.profile__icon[data-astro-cid-jlz3adq6]{width:100%}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Administrador_R/Desktop/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/Administrador_R/Desktop/portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/node_xvfmOpCA.mjs","/src/pages/index.astro":"chunks/index_C682UW-O.mjs","\u0000@astrojs-manifest":"manifest_ClnFvD33.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Ad8Hlk5E.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/jost-latin-ext-wght-normal.B4kqP43q.woff2","/_astro/jost-cyrillic-wght-normal.B0_vFdaS.woff2","/_astro/jost-latin-wght-normal.CfFW3YMY.woff2","/favicon.svg","/assets/github-mark-white.png","/assets/gmail_icon.png","/assets/linkedin_icon.webp","/assets/profile_picture.jpg","/assets/whatsapp_icon.png","/fonts/Jost-Light.ttf"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
