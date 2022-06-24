import { App, Plugin } from 'vue';

import button from './button/button.vue';
import container from './container/container.vue';
import main from './container/main.vue';
import aside from './container/aside.vue';
import header from './container/header.vue';
import footer from './container/footer.vue';
import row from './grid/row.vue';
import col from './grid/col.vue';
import panel from './panel/panel.vue';
import card from './card/card.vue';
import menu from './menu/menu.vue';
import menu_item from './menu/menu_item.vue';
import sub_menu from './menu/sub_menu.vue';
import breadcrumb from './breadcrumb/breadcrumb.vue';
import tab from './tab/tab.vue';
import tab_item from './tab/tab_item.vue';
import iu_switch from './switch/switch.vue';
import checkbox from './checkbox/checkbox.vue';
import radio from './radio/radio.vue';
import input from './input/input.vue';
import input_number from './input/input_number.vue';
import progress from './progress/progress.vue';
import slider from './slider/slider.vue';
import carousel from './carousel/carousel.vue';
import carousel_item from './carousel/carousel_item.vue';

import test from './test/test.vue';

export let components: any = {
	'iu-test':test,

	'iu-button':button,
	'iu-container':container,
	'iu-main':main,
	'iu-aside':aside,
	'iu-header':header,
	'iu-footer':footer,
	'iu-row':row,
	'iu-col':col,
	'iu-panel':panel,
	'iu-card':card,
	'iu-menu':menu,
	'iu-menu-item':menu_item,
	'iu-sub-menu':sub_menu,
	'iu-breadcrumb':breadcrumb,
	'iu-tab':tab,
	'iu-tab-item':tab_item,
	'iu-switch': iu_switch,
	'iu-checkbox':checkbox,
	'iu-radio': radio,
	'iu-input': input,
	'iu-input-number': input_number,
	'iu-progress': progress,
	'iu-slider':slider,
	'iu-carousel':carousel,
	'iu-carousel-item':carousel_item,
};

let iu_plugin : Plugin = {
	install(app: App){
		for(let key in components){
			console.log(key);
			app.component(key, components[key]);
		}
		// app.component('iu-button', button);
	}
}

// export components;
export default iu_plugin;