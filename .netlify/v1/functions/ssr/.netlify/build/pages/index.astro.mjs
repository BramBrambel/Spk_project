/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CGlWWWDq.mjs';
import 'kleur/colors';
import { f as formatDate, $ as $$MainLayout, H as HOMEPAGE_ARTICLE_LIMIT } from '../chunks/MainLayout__Du3uMhX.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_B_yPCfOI.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_DIsJgMp0.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_BZvNe7hJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://brambrambel.github.io");
const $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostRecentArticle;
  const { article } = Astro2.props;
  return renderTemplate`<!-- Most Recent Article -->${maybeRenderHead()}<div class=" relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4">${formatDate(article.data.pubDate)}</p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2">${tag}</span>`)} </div> </div> </div> </a> </div>`;
}, "C:/Users/user/spk-pro-astro/src/components/MostRecentArticle.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Performing lighting design & creating the light concept " }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">
Создаем атмосферу светом
</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> ${renderComponent($$result2, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })} </div>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/user/spk-pro-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/spk-pro-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
