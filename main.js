// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  data:{
    rootMsg:'我是团藏，也就是传说中的根实例!'
  },
  methods:{
    getMsg(){
      return this.rootMsg
    }
  },
  components: { App },
  template: '<App/>'
})
