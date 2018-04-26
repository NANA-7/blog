// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	icon
} from 'element-ui';
import EntranceAnimate from '@/common/js/entrance-animate';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(icon);

Vue.use(EntranceAnimate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
