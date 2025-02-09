/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_yyZj5EEL.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_DnikvAMK.mjs';
export { renderers } from '../renderers.mjs';

const spk = new Proxy({"src":"/_astro/spk1.BsM7n-ZO.jpg","width":5184,"height":3456,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/spk-pro-astro/src/images/spk1.jpg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About Company" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-5"> О компании</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": spk, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
Кто мы
</h2> <p class="text-gray-700 leading-relaxed mb-6">
Мы создаем современные, функциональные и эстетичные световые решения, гармонично дополняющие любое пространство. 
                Наша команда тщательно изучает каждый проект, чтобы учесть все ваши потребности и требования.
</p> <p class="text-gray-700 leading-relaxed mb-6">
Мы постоянно совершенствуемся и развиваемся, чтобы создавать лучшие решения в области освещения.</p> </div> </div>  <div class="mt-10"> <h2 class="text-3xl font-extrabold text-gray-900 mb-8">
Основные направления
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> <img src="images/team1.png" alt="Team Member 1" class="w-full h-auto"> <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Проектирование</h3> <p class="text-gray-70">Мы используем передовые технологии и программное обеспечение для разработки проектов. 
                    Это позволяет нам создавать проекты с высокой степенью точности и эффективности.
</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> <img src="images/" alt="Team Member 2" class="w-full h-auto"> <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Интелектуальные системы освещения</h3> <p class="text-gray-70">Мы разрабатываем  интеллектуальные системы освещения, которые оптимизируют расходы и повышают комфорт.</p> </div> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> <img src="images/team3.png" alt="Team Member 3" class="w-full h-auto"> <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2">Комплексная поставка</h3> <p class="text-gray-70"> Вам не нужно тратить время и ресурсы на поиск разных поставщиков, координацию их работы и решение возникающих проблем.</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/user/spk-pro-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/user/spk-pro-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
