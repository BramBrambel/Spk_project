import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<h2 id=\"1параметры-энергоэффективности\"><strong>1.Параметры энергоэффективности</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<h2 id=\"2-параметры-энергоэффективности\"><strong>2. Параметры энергоэффективности</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>\n<h2 id=\"3-параметры-энергоэффективности\"><strong>3. Параметры энергоэффективности</strong></h2>\n<p>In today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.</p>";

				const frontmatter = {"title":"Система дистанционного управления","pubDate":"2024-01-16T00:00:00.000Z","author":"Sarah Davis","image":"modern2.jpg","tags":["light","tech","button"],"slug":"standard-lighting-systems"};
				const file = "C:/Users/user/spk-pro-astro/src/content/blog/standard-lighting-systems .md";
				const url = undefined;
				function rawContent() {
					return "\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n\r\n## **1.Параметры энергоэффективности**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n\r\n## **2. Параметры энергоэффективности**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n\r\n## **3. Параметры энергоэффективности**\r\n\r\nIn today’s extremely dynamic and constantly expanding market, we try to not only keep our eye on the big picture, but also always to act with the future in mind. To be on the same wavelength as our customers as well as to think ahead, to generate new momentum and to set new standards.\r\n\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1параметры-энергоэффективности","text":"1.Параметры энергоэффективности"},{"depth":2,"slug":"2-параметры-энергоэффективности","text":"2. Параметры энергоэффективности"},{"depth":2,"slug":"3-параметры-энергоэффективности","text":"3. Параметры энергоэффективности"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
