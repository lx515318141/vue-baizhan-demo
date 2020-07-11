# 1.Vue 介绍

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

# 2.安装

```
npm install -g @vue/cli   ***OR***   yarn global add @vue/cli      3.x
    vue create my-project-name(创建项目)
npm install -g @vue/cli-init                                       2.x
    vue init webpack my-project-name(创建项目)
```

（用 git bash 创建项目时，有些项目信息需要通过上下箭头进行选项选择，但是 git bash 不支持，可以使用 winpty vue.cmd create hello-world 这个命令进行创建，如果仍想使用上面的两个命令，可以在 .bashrc 中添加 alias vue='winpty vue.cmd' 此命令，然后重启 bash 就可以使用上下箭头来选择选项了）
项目创建完成后，进入项目内，使用 npm start 启动项目。

# 3.结构

build：存放依赖关系。
config：存放配置文件。
static：存放静态资源文件(可以存放一些没有其他合适地方存放的项目文档和项目资料，这些文档和资料用到是就会被打包，用不到时则不会被打包)。
src：存在源码文件。

## 3.1.根目录的其他文件

.babelrc：ES6 的配置文件。
.editorconfig：编辑器的配置文件。
.gitignore：git 的配置文件。
.postcssrc：css 的插件(此插件对 css 的兼容性问题其作用，css3 的新特性可以直接使用)。
.package：依赖文件

## 3.2.安装插件

Vetur(有高亮)

# 4.API

## 4.1.模板语法:

插值：渲染文本，使用 {{ msg }} ，msg 要在 data 中声明；可以识别单行表达式，非单行表达式不会生效，不是表达式(是语句，表达式有结果或返回值，语句没有)或不是单行(如 if)都不行。(if 是流控制，不是单行，所以不会生效，可以用三元表达式代替)
原始 HTML：单纯使用插值的方法无法渲染出标签的效果，所有需要使用原始 HTML，在 data 中声明 room，
`room:"<h1>我是一级标题</h1>"`
在 template 中使用 `<p v-html='room'></p>`，就可以在 p 标签中渲染出 h1 标签了。
特性：v-bind: 用于绑定标签属性，使标签属性变为动态的，它不仅可以识别标签自带属性，也可以识别自定义属性。
v-once：能执行一次性地插值，当数据改变时，插值处的内容不会更新。
缩写：v-bind:

```
<a v-bind:href="url">...</a>
<!-- 完整语法 -->

<a :href="url">...</a>
<!-- 缩写 -->

<a :[key]="url"> ... </a>
<!-- 动态参数的缩写 (2.6.0+) -->

v-on:
<a v-on:click="doSomething">...</a>
<!-- 完整语法 -->

<a @click="doSomething">...</a>
<!-- 缩写 -->

<a @[event]="doSomething"> ... </a>
<!-- 动态参数的缩写 (2.6.0+) -->
```

例：HelloWorld.vue

## 4.2.条件渲染：

v-if/v-if-else/v-else：当以组为单位的数据需要进行条件渲染时，可在 <template> 元素上使用 v-if 条件渲染分组，即可以在 <template> 模板的根元素中再建立 <template> ，在其上使用 v-if。
v-show：根据条件*展示*不同的元素。
v-if 和 v-show 的区别：
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。而 v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 中的 display 属性进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
例：HelloWorld.vue

## 4.3.列表渲染：

数组:v-for="(item,index) in items" items(数组名 Array)、item(数组内容 value)、index(索引、下标 key)
对象:v-for="(value,key,index) in obj"
### 数组更新检测：
变异法(mutation method)
this.names.push('jocker')
替换数组
let newNames = ['lilei', 'hanmeimei']
let totalName = this.names.concat(newNames)
this.names = totalName
### 对象变更检测：
使用常规方法改变数组或对象内容无法生效，需要使用set方法
Vue.set(object, propertyName, value) 其中 Vue 应替换为 this
例：HelloWorld.vue

## 4.4.事件处理

v-on 指令
内联处理器中的方法(事件传递参数)
`<button v-on:click="addCount(5, $event)">按键</button>`
事件修饰符、按键修饰符（按键码）、系统修饰符（exact 修饰符、鼠标按钮修饰符）
`<button v-on:click.prevent="addCount(5, $event)">提交</button>`
.prevent:提交事件不再重新加载页面

```
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

例：HelloWorld.vue

# 5.计算属性和侦听器

computed vs methods 的区别
两者都可存放函数，两种方法最终获得的结果是相同的，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数，而 methods 中的方法都会执行函数之后再返回结果
侦听器
watch 功能可实时侦听数据的变化。
例：APIDemo1.vue

# 6.Class 与 Style 绑定

绑定 HTML Class
对象语法
`<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>`
(div 自带的 class 可有可无，不冲突)

数组语法

```
<p :class="[c1,c2]">我是数组样式</p>
<p :class="[isActive ? 'active' : '',c2]">我是三元表达式样式</p>
```

数组对象合并语法
`<p :class="[isActive ? 'active' : '',{'text-danger': hasError},c2]">我是数组对象嵌套样式</p>`
(必须是数组内嵌套对象)

绑定内联样式
对象语法
`<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`
(value 中的值可以是写死的，也可以是动态的)

数组语法
`<div v-bind:style="[baseStyles, overridingStyles]"></div>`
自动添加前缀
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。
例：APIDemo1.vue

# 7.表单输入绑定

v-model:可实现文本、多行文本、复选框、单选按钮、选择框的双向绑定(双向绑定，选中或输入的值，可以在下面显示，也可通过下面显示的值设置默认选项)。
修饰符：.lazy/.number/.trim
双向绑定的原理：
参考网址：https://www.cnblogs.com/zhuzhenwei918/p/7309604.html
什么是数据双向绑定？
vue 是一个 MVVM 框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着发生变化。
为什么要实现数据的双向绑定？
在 vue 中，如果使用 vuex，实际上数据还是单向的，之所以说是数据双向绑定，这是用的 UI 控件来说，对于我们处理表单，vue 的双向数据绑定用起来就特别舒服了。即两者并不互斥，在全局性数据流使用单项，方便跟踪；局部性数据流使用双向，简单易操作。 1.访问器属性
Object.defineProperty()函数可以定义对象的属性相关描述符，其中的 set 和 get 函数对于完成数据双向绑定起到了至关重要的作用。
例：APIDemo2.vue

# 8.组件

vue 单文件组件后缀名为.vue，组件由三部分组成：template script style，template 只能存在一个根节点，script 里的 data 必须是一个纯函数，在 style 中增加 scoped 属性，样式只能在当前组件中生效。

## 组件的引用：

### 1.组件引入。

`import HelloWorld from './components/HelloWorld'`

### 2.组件注入或依赖注入。

```
components: {
    HelloWorld,
}
```

### 3.组件加载(加载时可以用驼峰法和短横杆法两种写法都可以)。

`<HelloWorld />`
组件的复用：因为你每用一次组件，就会有一个它的新实例被创建。

## 组件间数据传递

### 通过 Prop 向子组件传递数据(父传子)
例：MyComponent1.vue
传递：`<MyComponent :key="item"/>`
读取：`props：['key']`
Prop 可以验证，而且分数据类型进行验证，且可以规定默认值和是否必须传参

### 通过自定义事件完成数据的传递(子传父)
例：MyComponent2.vue
```
// 子组件
<button @click="eventHandler">send</button>
method:{
    eventHandler(){
        this.$emit('eventName',this.count)
    },
}

// 父组件
<MyComponent2 @eventName='eventHandler' />
method:{
    eventHandler(data){
        console.log(data)
    },
}
```
或
```
// 子组件
<input type="text" v-model="message" @change="msgChange">
method:{
    msgChange(){
        this.$emit('eventName',this.message)
    }
}

// 父组件
<MyComponent2 title="标题" @eventName='inputChange'/>
method:{
    inputChange(data){
        this.msg = data
    },
}
```
传递：`this.$emit(eventName,data)` （此方法只会在点击回车或点击鼠标的时候传递数据）

### 侦听器
若想实时获得子组件中 v-model 的数据，可以使用侦听器中的 watch 属性：
侦听器中的watch属性，可以让父组件实时获取子组件中v-model的数据，不再需要点击回车或鼠标

```
// 子组件
<input type="text" v-model="message">
watch:{
    message(value){
        this.$emit('eventName',this.message)
    }
}

// 父组件
<MyComponent2 title="标题" @eventName='msgWatch' />
method:{
    msgWatch(data){
        this.msg = data
    },
}
```

wathc 与 method 同级。
在父组件中监听 eventName 事件就可以获取到子元素中的数据了
获取：
```
@eventName="xxx"
methods:{
    xxx(data){
    ...
    }}
```

## 插槽
slot
例：SlotComponent.vue
在子组件中显示一个UI结构，但是这个UI结构具体形式由父组件决定。
```
// 子组件
<slot></slot>

// 父组件
<SlotComponent>
    <template>
        <div>我是插槽啊 <p>{{ slotShow }}</p></div>
    </template>
</SlotComponent>
```
编译作用域：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。(写在哪里就在哪里声明)
例如上面的slotShow，就应该在父组件中声明。
后备内容(默认数据/默认内容)：当插槽内没有内容时，渲染出默认内容。
`<SlotComponent>这就是后备内容</SlotComponent>`

## 具名插槽
缩写：v-slot: -> #
```
// n1即为插槽名
<SlotComponent v-slot:n1></SlotComponent>
// 缩写
<SlotComponent #n1></SlotComponent>
```

## 作用域插槽
传递数据，子组件中显示的结构有父级决定，但是假如子组件有自己的数据需要显示，则需要用的作到域插槽，来讲数据传递给父组件。
```
// 子组件
<slot :msg='msg'></slot>

// 父组件,default处，如果该插槽有名字则写名字，若没有则写default
<template v-slot:default="slotProps">
    <div>
        <div>{{ slotProps.msg }}</div>
    </div>
</template>
```

## 动态组件和异步组件
### 动态组件
例：MyComponent3.vue
component: 通过 `<component :is='key'></component>` 实现对子组件的动态切换。通过监听其 is 属性，key 写在 data 中，key 的 value 是哪个组件就显示哪个组件。所有组件命名时不要用这种保留词
`<keep-alive></keep-alive>`:用于缓存，使用此标签包裹住显示的组件，当两组件进行切换时，若其中一个组件变化了，此变化会被缓存，组件间进行切换后，此组件仍显示变化后的值。只要需要被缓存都可以使用，在路由中同样生效。
### 异步组件
例：child
异步组件加载，不需要显示时不加载，需要显示时再加载：
AMD和CMD
AMD：因为推崇依赖前置，会提前执行，所以用户体验会更好，因为没有延迟，依赖模块提前执行。
CMD：因为推崇依赖就近，会延迟执行，所以性能更好，用户不需要是不加载，也就是类似于懒加载。
异步组件加载就是依赖就近
`const CComponent = () => import('./CComponent')` 使用这种方式引入组件，可以实现组件的异步加载
这里的异步组件工厂函数也可以返回一个如下格式的对象：
```
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

## 处理边界情况：
访问根实例:\$root,可以直接读根实例上的属性，后面可以接属性名，也可以接函数。

```
// main.js中
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

// 需要读取rootMsg数据的组件中
{{ this.$root.rootMsg }}
{{ this.$root.getMsg() }}
```
```
// 获取根组件的数据
this.$root.foo

// 写入根组件的数据
this.$root.foo = 2

// 访问根组件的计算属性
this.$root.bar

// 调用根组件的方法
this.$root.baz()
```

访问父组件实例：$parent,与$root 类似，不过只能访问父组件实例。
```
// 父组件
data(){
    return{
        values:"读取父组件的数据"
    }

// 子组件
{{ this.$parent.value }}
```
访问子组件实例：ref 和 \$refs 结合使用(读取 DOM 操作)
```
// 父组件
<input ref="input">
<APIDemo2 ref="usernameInput" />
mounted(){
    // 可在此获取到Dom节点，可以对他进行任意操作，但不推荐操作
    this.$refs.input.value='haha'
    // 聚焦输入框
    this.$refs.input.focus()
}
methods:{
    setInput(){
      this.$refs.input.value='new'
    }
  }

// 子组件
{{ this.$refs.usernameInput.setInput() }}
```

# 9.过渡与动画

css 动画：使用 <transition name='v'></transition> 此标签将要进行动画处理的 DOM 包裹起来。过渡的六个类名： v-enter、
v-enter-active、v-enter-to、v-leave、v-leave-active、v-leave-to (enter 是显示、出现，leave 是消失、离开，v-enter/leave 是状态开始前，v-enter/leave-to 是状态结束，v-enter/leave-active 是状态中间过程，v 是 name 的值)
自己写的：
```
/* fade显示过程和消失过程 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
/* fade显示前和消失后 */
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* fade消失前和显示后 */
.fade-enter-to, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
```
动画库：
```
<transition name="custom-classes-transition" enter-active-class="animated zoomInDown" leave-active-class="animated zoomOutDown">
    <p v-show="status">CSS动画库</p>
</transition>
```

# 10.生命周期函数

Vue 实例生命周期：实例创建(create)、实例渲染(mount)、实例更新(update)、实例销毁(destroy)。每个时期有两个生命周期函数。
实例创建：beforeCreate、create
实例挂载：beforeMount、mounted
实例更新：beforeUpdate、updated
实例销毁：beforeDestroy、destroyed

# 11.可复用性 & 组合

自定义指令：
## 全局自定义指令：
需要创建在 main.js 中，也可以单独创建一个 directive 文件夹，在其中创建一个专门存放全局自定义属性的 js 文件，再在 main.js 中引入，全局中都可以使用。
在main中创建：
```
// main中
// 注册全局自定义指令
Vue.directive('focus',{
  inserted:function(ele){
    ele.focus();
  }
})

// 引用自定义指令的模块中
<input type="text" v-focus placeholder="全局自定义指令">
```

单独创建全局自定义指令文件：
```
// directive/index.js中
// 注册全局自定义指令的文件
import Vue from "vue";

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  },
  // 钩子函数
  bind(el) {
    el.value = "输入";
  }
});

// main中
// 引入自定义指令
import "./directive"
```
## 局部自定义指令：
创建在需要使用的组件中，也只能在该组件中使用。
```
<p v-red>局部自定义指令</p>
directives:{
    // 注册局部自定义指令
    red:{
        inserted(ele){
            ele.style.color = 'red'
        }
    }
},
```
## 钩子函数：
每个自定义指令都会提供以下三个钩子函数：
bind：只调用一次，初始化调用。
inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
unbind：只调用一次，指令与元素解绑时调用。
## 钩子函数的参数：
el：指令所绑定的元素，可以用来直接操作 DOM。
binding：一个对象，包含以下属性：name(指令名)，value(指令绑定值)，oldValue(指令绑定的前一个值)，
expression(字符串形式的指令表达式)，arg(传给指令的参数),modifiers(一个包含修饰符的对象)
vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

# 12.渲染函数 & JSX

支持 JSX 语法，使用此语法时，不需要 <template></template> 标签，需要在 <script></script> 中的 render 中书写。
```
<script>
export default {
    name:'JSX',
    data(){
        return{
            msg:'JSX'
        }
    },
    methods:{
        clickHandler(){
            this.msg = 'hello'
        }
    },
    render(){
        return(
            <div>
            我是：{ this.msg }
            <button onClick={ this.clickHandler }>点击</button>
            { this.$slots.default }
            { this.$slots.header }
            </div>
        )
    }
}
</script>
```

# 13.过滤器

过滤器也分全局和局部过滤器用法与自定义指令类似，区别在于指令可以完成业务逻辑，但过滤器只是对数据的再次处理。
## 全局过滤器
```
// main.js中
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

// 使用过滤器的组件中
<p>{{ message | capitalize }}</p>
```

## 局部过滤器
```
<p>{{ '33.00'|rm }}</p>
filters:{
    rm:function(value){
      return "￥"+value;
      console.log(value)
    }
  }
```
如果过滤器较多可以与自定义函数类似，整理到单独的文件中去。
