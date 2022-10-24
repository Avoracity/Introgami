import Vue from 'vue'
import App from '../components/QnA.vue'
import './scripts/accordian.js'
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')