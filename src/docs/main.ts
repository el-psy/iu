import { createApp } from 'vue'
import store from './store';
import App from './base_component/App.vue';
import { base_plugin } from './base_component';
import iu_plugin from '../components';
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css';
import './css/md.scss';
import './css/index.scss';
import 'prismjs/themes/prism-coy.css';

import * as vue_router from "vue-router";

// import routes from 'vite-plugin-voie';
import routes from 'pages-generated';
// import routes from '~pages';

// console.log(routes);

// import md_show from './base_component/show_component.vue';
// import md_title from './base_component/title.vue';
// import md_descript from './base_component/descript.vue';
// import md_table from './base_component/table.vue';
// import color_show from './base_component/color.vue';

let router = vue_router.createRouter({
	history:vue_router.createWebHashHistory(),
	routes
});

const app = createApp(App);

// app.component('md_show', md_show);
// app.component('md_title', md_title);
// app.component('md_descript', md_descript);
// app.component('md_table', md_table);
// app.component('color_show', color_show);

app.provide('md_route', routes as any);
app.use(base_plugin);
app.use(iu_plugin);
app.use(store);
app.use(router);
app.use(Layui);

app.mount('#app');


