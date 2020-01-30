import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import ElementUI from 'element-ui';
import CommonComp from './components/common/index';

Vue.use(ElementUI, { size: 'small' });

// 全局组件
Object.keys(CommonComp).forEach((v, i) => {
  Vue.component(v, CommonComp[v]);
});

const app = new Vue({
  router,
  store,
  ...App
});

app.$mount('#App');
