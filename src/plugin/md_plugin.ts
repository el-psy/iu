import Markdown from "../vite_plugin_md";
// import Markdown from 'vite-plugin-md';
import container from "markdown-it-container";
import md_show from "./md_show";
import md_title from "./md_title";
import md_descript from './md_descript';
import md_table from "./md_table";

export default Markdown({
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
    },
    markdownItSetup(md) {
      md.use(container, "show", md_show)
      .use(container, 'title', md_title)
      .use(container, 'descript', md_descript)
      .use(container, 'table', md_table)
    },
})