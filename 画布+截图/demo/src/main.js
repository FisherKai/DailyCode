import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from "moment";

Vue.filter("timeStamptoDate", (timeStamp) => {
  return timeStamp && moment(timeStamp).format("YYYY-HH-DD HH:mm:ss")
})

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
