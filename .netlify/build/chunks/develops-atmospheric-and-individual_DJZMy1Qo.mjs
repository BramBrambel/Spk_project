import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>При подборе освещения, нашей основной задачей было не просто наполнить пространство светом,\r\nа создать ощущение простора и комфорта, благоприятное для учебного процесса. Мы тщательно продумали каждый аспект,\r\nчтобы обеспечить максимально комфортную атмосферу для преподавателей и школьников. Это включало в себя подбор светильников,\r\nобеспечивающих равномерное рассеивание света, контроль цветовой температуры для создания теплой и уютной атмосферы, а также\r\nиспользование энергоэффективных технологий для снижения нагрузки на электросети. Нашей целью было создание освещения,\r\nкоторое поддерживает хорошее самочувствие и повышает эффективность учебной деятельности.</p>";

				const frontmatter = {"title":"Школа на 1500 мест г.Екатеринбург","pubDate":"2024-12-24T00:00:00.000Z","author":"Школа","image":"modern2.jpg","tags":["Образование","Системы управления"],"slug":"develops-atmospheric-and-individual"};
				const file = "C:/Users/user/spk-pro-astro/src/content/blog/develops-atmospheric-and-individual.md";
				const url = undefined;
				function rawContent() {
					return "\r\n  При подборе освещения, нашей основной задачей было не просто наполнить пространство светом, \r\nа создать ощущение простора и комфорта, благоприятное для учебного процесса. Мы тщательно продумали каждый аспект, \r\nчтобы обеспечить максимально комфортную атмосферу для преподавателей и школьников. Это включало в себя подбор светильников, \r\nобеспечивающих равномерное рассеивание света, контроль цветовой температуры для создания теплой и уютной атмосферы, а также \r\nиспользование энергоэффективных технологий для снижения нагрузки на электросети. Нашей целью было создание освещения, \r\nкоторое поддерживает хорошее самочувствие и повышает эффективность учебной деятельности.\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
