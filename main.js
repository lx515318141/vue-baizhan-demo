// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 注册全局自定义指令
// Vue.directive('focus',{
//   inserted:function(el){
//     el.focus();
//   }
// })

// import "./directive"
// 引入自定义指令

// 定义全局过滤器
Vue.filter('capitalize', function(value){
  if(value){
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
    // charAt(0)取到第一个字符
    // toUpperCase()转换成大写
    // slice(1)切割掉第一个字符
  }else{
    return ''
  }
  
})

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
