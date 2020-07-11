<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <!-- <APIDemo1 /> -->
    <!-- <APIDemo2 /> -->
    <!-- <MyComponent :name="names"/>
    <ul>
      <li v-for="(item,index) in names" :key="index">
        <MyComponent :name="item"/>
      </li>
    </ul> -->
    <!-- <MyComponent1 :title="hello" :age="20" :friends="fs"/> -->
    <!-- <MyComponent2 title="标题" @myEvent='eventHandler' @myWatch='msgWatch' />
    {{ msg }} -->
    <!-- <SlotComponent>
      <template #n1>
        <div>
          我是n1的内容
          <p>{{ showSlot }}</p>
        </div>
      </template>
      <template v-slot:n2="slotProps">
        <div>
          我是n2的内容
          <p>{{ showSlot }}</p>
          <div>{{ slotProps.msg }}</div>
        </div>
      </template>
      <template v-slot:default="slotProps">
        
        <div>我是没有名字的插槽：{{ slotProps.msg }}</div>
      </template>
    </SlotComponent> -->
    <!-- <MyComponent3 />
    {{ this.$root.rootMsg }}
    {{ this.$root.getMsg() }} -->
    <!-- <input ref="input"> -->
    <!-- <APIDemo2 ref="usernameInput" /> -->
    <!-- <Animates /> -->
    <!-- <life /> -->
    <JSXFile>
      <div>我是非具名插槽</div>
      <template name='header'>我是具名插槽</template>
    </JSXFile>

    <div>
      <p>{{ message | capitalize }}</p>
      <p>{{ '33'|rm }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import APIDemo1 from './components/APIDemo1'
import APIDemo2 from './components/APIDemo2'
import MyComponent from './components/MyComponent'
import MyComponent1 from './components/MyComponent1'
import MyComponent2 from './components/MyComponent2'
import SlotComponent from './components/SlotComponent'
import MyComponent3 from './components/MyComponent3'
import Animates from './components/Animates'
import life from './components/life'
import JSXFile from './components/JSXFile'

// 1.引入组件

export default {
  name: 'App',
  data(){
    return{
      names:['iwen','ime','frank'],
      fs:['18','19','20'],
      msg:'',
      showSlot:"编译作用域",
      value:'读取APP的数据',
      message:'hello world',
      hello:"hi",
      // values:"读取父组件的数据"
    }
    
  },
  components: {
    // 2.注入组件，依赖注入
    HelloWorld,
    APIDemo1,
    APIDemo2,
    MyComponent,
    MyComponent1,
    MyComponent2,
    SlotComponent,
    MyComponent3,
    Animates,
    life,
    JSXFile
  },
  mounted(){
    // this.$refs.input.value='haha'
    // this.$refs.input.focus()
    // 聚焦输入框
    // console.log(this.$refs.input)
    // 可在此获取到Dom节点，可以对他进行任意操作，但不推荐操作
  },
  methods:{
    eventHandler(data){
      console.log(data)
    },
    msgWatch(data){
      this.msg = data
    },
    // setInput(){
    //   this.$refs.input.value='new'
    // }
  },
  filters:{
    rm:function(value){
      return "￥"+value;
      console.log(value)
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
