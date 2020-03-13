<template>
  <div id="app">
    <MyComponent2 title="标题" @myEvent='eventHandler' @myWatch='msgWatch' />
    {{ msg }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import APIDemo1 from './components/APIDemo1'
import APIDemo2 from './components/APIDemo2'
import MyComponent from './components/MyComponent'
import MyComponent1 from './components/MyComponent1'
import MyComponent2 from './components/MyComponent2'
// 1.引入组件

export default {
  name: 'App',
  data(){
    return{
      names:['iwen','ime','frank'],
      fs:['18','19','20'],
      msg:''
    }
    
  },
  components: {
    // 2.注入组件，依赖注入
    HelloWorld,
    APIDemo1,
    APIDemo2,
    MyComponent,
    MyComponent1,
    MyComponent2
  },
  methods:{
    eventHandler(data){
      console.log(data)
    },
    msgWatch(data){
      this.msg = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
