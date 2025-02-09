import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>При подборе освещения, нашей основной задачей было не просто наполнить пространство светом,\r\nа создать ощущение простора и комфорта, благоприятное для учебного процесса. Мы тщательно продумали каждый аспект,\r\nчтобы обеспечить максимально комфортную атмосферу для преподавателей и школьников. Это включало в себя подбор светильников,\r\nобеспечивающих равномерное рассеивание света, контроль цветовой температуры для создания теплой и уютной атмосферы, а также\r\nиспользование энергоэффективных технологий для снижения нагрузки на электросети. Нашей целью было создание освещения,\r\nкоторое поддерживает хорошее самочувствие и повышает эффективность учебной деятельности.</p>\n<h2 id=\"1-какие-приборы-были-использованы\"><strong>1. Какие приборы были использованы</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<h2 id=\"2-параметры-энергоэффективности\"><strong>2. Параметры энергоэффективности</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<h2 id=\"3-параметры-энергоэффективности\"><strong>3. Параметры энергоэффективности</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<div style=\"display: flex; align-items: center;\">\n<img src=\"/images/modern.jpg\" alt=\"\" width=\"1300\" height=\"1100\" style=\"margin-right: 20px;\">\n <div>\n     Этот текст будет отображаться сбоку от изображения. Можно добавлять абзацы, списки и другие элементы.\n  </div>\n</div>";

				const frontmatter = {"title":"Школа. Московская обл г.о. Ступино, квартал, \"Надежда\"","pubDate":"2024-01-15T00:00:00.000Z","author":"Школа","image":"modern.jpg","tags":["Образование","Внутреннее освещение"],"slug":"characterised-by-superior-quality"};
				const file = "C:/Users/user/spk-pro-astro/src/content/blog/characterised-by-superior-quality.md";
				const url = undefined;
				function rawContent() {
					return "\r\nПри подборе освещения, нашей основной задачей было не просто наполнить пространство светом, \r\nа создать ощущение простора и комфорта, благоприятное для учебного процесса. Мы тщательно продумали каждый аспект, \r\nчтобы обеспечить максимально комфортную атмосферу для преподавателей и школьников. Это включало в себя подбор светильников, \r\nобеспечивающих равномерное рассеивание света, контроль цветовой температуры для создания теплой и уютной атмосферы, а также \r\nиспользование энергоэффективных технологий для снижения нагрузки на электросети. Нашей целью было создание освещения, \r\nкоторое поддерживает хорошее самочувствие и повышает эффективность учебной деятельности.\r\n## **1. Какие приборы были использованы**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n \r\n## **2. Параметры энергоэффективности**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n\r\n## **3. Параметры энергоэффективности**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n<div style=\"display: flex; align-items: center;\">\r\n<image src=\"/images/modern.jpg\" alt=\"\" width=\"1300\" height=\"1100\"  style=\"margin-right: 20px;\">\r\n <div>\r\n     Этот текст будет отображаться сбоку от изображения. Можно добавлять абзацы, списки и другие элементы.\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-какие-приборы-были-использованы","text":"1. Какие приборы были использованы"},{"depth":2,"slug":"2-параметры-энергоэффективности","text":"2. Параметры энергоэффективности"},{"depth":2,"slug":"3-параметры-энергоэффективности","text":"3. Параметры энергоэффективности"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
