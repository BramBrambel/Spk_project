/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import { A as ARTICLES_PER_PAGE, $ as $$MainLayout } from '../../chunks/MainLayout_yyZj5EEL.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_DHpMpOgi.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_D4q9BQr8.mjs';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content_BRblkXtg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://brambrambel.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`<!-- Pagination -->${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles/main?page=" + (currentPage - 1), "href")}${addAttribute(
    disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg",
    "class"
  )}>
Previous
</a> <a${addAttribute("/articles/main?page=" + (currentPage + 1), "href")}${addAttribute(
    disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg",
    "class"
  )}>
Next
</a> </div>`;
}, "C:/Users/user/spk-pro-astro/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://brambrambel.github.io");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} ` })}`;
}, "C:/Users/user/spk-pro-astro/src/pages/articles/main.astro", void 0);

const $$file = "C:/Users/user/spk-pro-astro/src/pages/articles/main.astro";
const $$url = "/articles/main";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Main,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
