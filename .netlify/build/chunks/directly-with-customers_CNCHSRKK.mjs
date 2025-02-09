import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_VXPzUY6D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>При подборе освещения нашей основной задачей было создать ощущение простора и комфорта,\r\nчтобы каждый уголок  был наполнен светом, способствующим как сосредоточенной работе,\r\nтак и расслабленному общению. Мы стремились к атмосфере, которая вдохновляет на учебу и делает\r\nпребывание приятным. Свет должен был стать\r\nсоюзником, а не помехой, подчеркивая архитектурные особенности пространства и создавая ощущение легкости и воздушности.</p>";

				const frontmatter = {"title":"Дом детского творчества г.Химки","pubDate":"2024-10-03T00:00:00.000Z","author":"Дом детского творчества","image":"modern2.jpg","tags":["Акцентное освещение","Образование"],"slug":"directly-with-customers"};
				const file = "C:/Users/user/spk-pro-astro/src/content/blog/directly-with-customers.md";
				const url = undefined;
				function rawContent() {
					return "\r\nПри подборе освещения нашей основной задачей было создать ощущение простора и комфорта, \r\nчтобы каждый уголок  был наполнен светом, способствующим как сосредоточенной работе,\r\n так и расслабленному общению. Мы стремились к атмосфере, которая вдохновляет на учебу и делает\r\n пребывание приятным. Свет должен был стать\r\n союзником, а не помехой, подчеркивая архитектурные особенности пространства и создавая ощущение легкости и воздушности.\r\n\r\n\r\n\r\n";
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
