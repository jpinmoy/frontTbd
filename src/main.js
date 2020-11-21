import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VuePaginate)

new Vue({
  render: h => h(App),
}).$mount('#app')
