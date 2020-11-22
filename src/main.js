import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VuePaginate)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
