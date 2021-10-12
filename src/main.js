import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import getImageURLMixin from '@/mixins/getImageURL.js'

Vue.use(VueCarousel);

Vue.config.productionTip = false

Vue.mixin(getImageURLMixin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
