<template>
  <div class="hello">
    {{msg}}
    <p v-html='room'></p>
    <a v-bind:href="links.url">{{ links.title }}</a>
    <p v-bind:data-id="id">自定义属性</p>

    <div>
    <template v-if="flag">
      <p>唐三藏</p>
      <p>孙悟空</p>
      <p>猪悟能</p>
      <p>沙悟净</p>
    </template>

    <template v-else>
      <p>六耳猕猴1</p>
      <p>六耳猕猴2</p>
      <p>六耳猕猴3</p>
      <p>六耳猕猴4</p>
    </template>
    </div>
    
    <div>
      <ul>
        <li v-for="(item,index) in names" v-bind:key="index">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="(value,key,index) in obj" v-bind:key="index">{{ key }}:{{ value }}-{{ index }}</li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-on:click="addCount(item, $event)" v-for="(item,index) in names" v-bind:key="index">{{ item }}</li>
      </ul>
      <!-- <button v-on:click="addCount(5, $event)">按键</button> -->
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
  // data相当于状态
    return {
      msg:"HelloWorld",
      room:"<h1>我是一级标题</h1>",
      id:"2046",
      flag:true,
      count:0,
      links:{
        title:"传送门",
        url:"http://www.baidu.com"
      },
      names:["frank","jack","iwen"],
      obj:{
        name:"iwen",
        age:20,
        sex:'男'
      }
    }
  },
  methods:{
    addCount(name, event){
      console.log(event)
      console.log(name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
