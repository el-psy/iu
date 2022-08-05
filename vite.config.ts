import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Markdown from 'vite-plugin-md';
import Pages from "vite-plugin-pages";
// import voie from 'vite-plugin-voie';
import ViteComponents from 'vite-plugin-components';
import {resolve} from 'path';
import Markdown from './src/plugin/md_plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root:'./src',
  base:'/',
  // mode:'development',
  publicDir:'./public',
  build:{
    outDir:'../dist',
    rollupOptions:{
      input:{
        main:resolve(__dirname, './src/homepage/index.html'),
        docs:resolve(__dirname, './src/docs/index.html'),
        start:resolve(__dirname, './src/index.html')
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    // voie({
    //   pagesDir:'./src/docs/md_component',
    //   extensions:['vue', 'md']
    // }),
    // Markdown(
    //   {
    //     markdownItOptions:{
    //       html: true,
		//       linkify: true,
		//       typographer: true,
    //     }
    //   }
    // ),
    Markdown,
    Pages({
      extensions:['vue', 'md'],
      pagesDir:'./docs/md_component',
      // dirs:[
      //   {dir:'./src/docs/md_component', baseRoute:''}
      // ]
      // extendRoute(route) {
      //   const path = resolve(__dirname, route.component.slice(1));

      //   if (path.includes('.md')) {
      //       // const md = fs.readFileSync(path, 'utf-8');
      //       // const { data } = matter(md);
      //       // route.meta = Object.assign(route.meta || {}, { frontmatter: data });
      //       route.meta = route.meta;
      //   }

      //   return route;
      // },
    }),
    // Markdown,
    ViteComponents({
      dirs:[
        'src/docs/base_component',
        'base_component'
      ],
      globalComponentsDeclaration:true,
      extensions: ['vue', 'md'],
      customLoaderMatcher: path => path.endsWith('.md'),
    }),
  ]
})
