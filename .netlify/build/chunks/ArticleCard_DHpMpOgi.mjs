import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import { f as formatDate } from './MainLayout_yyZj5EEL.mjs';
import { $ as $$Tags } from './Tags_Cusn-a6Q.mjs';

const $$Astro = createAstro("https://brambrambel.github.io");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md mx-auto mt-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out"> </a> <div class="p-6"> <h2 class="text-2xl font-semibold mb-2"> <a${addAttribute("/articles/" + article.slug, "href")}> ${article.data.title} </a> </h2> <p class="text-gray-600 text-sm mb-4">${formatDate(article.data.pubDate)}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </div> </div>`;
}, "C:/Users/user/spk-pro-astro/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
