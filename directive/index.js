// 注册全局自定义指令的文件
import Vue from "vue";

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  },
  bind(el) {
    el.value = "输入";
  }
});
