// 将项目和远程仓库连接起来 
// 1.在父文件目录下git clone https://github.com/hello883/supermall.git  (下载code的地方复制的路径)
// 将创建的项目复制到新生成的文件夹里除了git和model


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
