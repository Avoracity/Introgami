import Vue from 'vue'
import App from '../components/QnA.vue'
import './scripts/accordion.js'
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')