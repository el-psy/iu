import { App, Plugin } from 'vue';

import md_show from './show_component.vue';
import md_title from './title.vue';
import md_descript from './descript.vue';
import md_table from './table.vue';
import color_show from './color.vue';

export let base_plugin : Plugin = {
	install(app: App){
		app.component('md_show', md_show);
		app.component('md_title', md_title);
		app.component('md_descript', md_descript);
		app.component('md_table', md_table);
		app.component('color_show', color_show);
	}
}