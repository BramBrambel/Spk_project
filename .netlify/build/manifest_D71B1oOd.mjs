import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_VXPzUY6D.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/user/spk-pro-astro/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.json.ts","pathname":"/api/search.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/articles/main","isIndex":false,"type":"page","pattern":"^\\/articles\\/main\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"main","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/main.astro","pathname":"/articles/main","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/articles/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/articles\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/articles/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"},{"type":"inline","content":"p{margin:20px 0}h2{margin:20px 0;font-size:1.8rem}\n"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.jIzkq_mW.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://brambrambel.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/user/spk-pro-astro/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/articles/main.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/articles/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/user/spk-pro-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/spk-pro-astro/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/spk-pro-astro/src/layouts/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/main@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/user/spk-pro-astro/src/pages/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/search.json@_@ts":"pages/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/main@_@astro":"pages/articles/main.astro.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"pages/articles/search.astro.mjs","\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro":"pages/articles/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D71B1oOd.mjs","C:/Users/user/spk-pro-astro/src/content/blog/characterised-by-superior-quality.md?astroContentCollectionEntry=true":"chunks/characterised-by-superior-quality_DHrOHooG.mjs","C:/Users/user/spk-pro-astro/src/content/blog/develops-atmospheric-and-individual.md?astroContentCollectionEntry=true":"chunks/develops-atmospheric-and-individual_D8v7UtgU.mjs","C:/Users/user/spk-pro-astro/src/content/blog/directly-with-customers.md?astroContentCollectionEntry=true":"chunks/directly-with-customers_CaaYn4PH.mjs","C:/Users/user/spk-pro-astro/src/content/blog/lighting-projectss-for-developers.md?astroContentCollectionEntry=true":"chunks/lighting-projectss-for-developers_WVtO2Vge.mjs","C:/Users/user/spk-pro-astro/src/content/blog/matched-to-the-needs.md?astroContentCollectionEntry=true":"chunks/matched-to-the-needs_NyH5aRd1.mjs","C:/Users/user/spk-pro-astro/src/content/blog/offers-many- products.md?astroContentCollectionEntry=true":"chunks/offers-many- products_DEjvUQB_.mjs","C:/Users/user/spk-pro-astro/src/content/blog/standard-lighting-systems .md?astroContentCollectionEntry=true":"chunks/standard-lighting-systems _DddeAoHz.mjs","C:/Users/user/spk-pro-astro/src/content/blog/characterised-by-superior-quality.md?astroPropagatedAssets":"chunks/characterised-by-superior-quality_CB1wpAjT.mjs","C:/Users/user/spk-pro-astro/src/content/blog/develops-atmospheric-and-individual.md?astroPropagatedAssets":"chunks/develops-atmospheric-and-individual_C6wfwo2m.mjs","C:/Users/user/spk-pro-astro/src/content/blog/directly-with-customers.md?astroPropagatedAssets":"chunks/directly-with-customers_BQMhsSck.mjs","C:/Users/user/spk-pro-astro/src/content/blog/lighting-projectss-for-developers.md?astroPropagatedAssets":"chunks/lighting-projectss-for-developers_DThYOBfZ.mjs","C:/Users/user/spk-pro-astro/src/content/blog/matched-to-the-needs.md?astroPropagatedAssets":"chunks/matched-to-the-needs_DODveZ-x.mjs","C:/Users/user/spk-pro-astro/src/content/blog/offers-many- products.md?astroPropagatedAssets":"chunks/offers-many- products_Bht6PR6Y.mjs","C:/Users/user/spk-pro-astro/src/content/blog/standard-lighting-systems .md?astroPropagatedAssets":"chunks/standard-lighting-systems _Bz-BV-wa.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/user/spk-pro-astro/src/content/blog/characterised-by-superior-quality.md":"chunks/characterised-by-superior-quality_bYjXisj4.mjs","C:/Users/user/spk-pro-astro/src/content/blog/develops-atmospheric-and-individual.md":"chunks/develops-atmospheric-and-individual_DJZMy1Qo.mjs","C:/Users/user/spk-pro-astro/src/content/blog/directly-with-customers.md":"chunks/directly-with-customers_CNCHSRKK.mjs","C:/Users/user/spk-pro-astro/src/content/blog/lighting-projectss-for-developers.md":"chunks/lighting-projectss-for-developers_Cpv73zQp.mjs","C:/Users/user/spk-pro-astro/src/content/blog/matched-to-the-needs.md":"chunks/matched-to-the-needs_BasD6tBO.mjs","C:/Users/user/spk-pro-astro/src/content/blog/offers-many- products.md":"chunks/offers-many- products_D9whYYKt.mjs","C:/Users/user/spk-pro-astro/src/content/blog/standard-lighting-systems .md":"chunks/standard-lighting-systems _DqgmsXwS.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/error-404.Ox42KQdE.png","/_astro/SPK_Logo-test.C0qJpVK4.png","/_astro/spk1.BsM7n-ZO.jpg","/_astro/about.jIzkq_mW.css","/favicon.svg","/images/modern.jpg","/images/modern2.jpg","/images/spk1.jpg","/images/SPK_Logo-1.png","/images/SPK_Logo-test.png","/images/SPK_Logo.png","/images/vertical.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"FQBD5iFSqN3lraBCvElYTCHIWC1AlEpa8Yh1XuYg4hA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
