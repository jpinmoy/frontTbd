import Vue from 'vue'
import App from './App.vue'
import VuePaginate from 'vue-paginate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(VuePaginate)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
