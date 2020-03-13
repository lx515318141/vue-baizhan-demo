<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="setCountHandler">按钮</button>

        <ul>
            <li v-for="(item,index) in names" :key="index">{{ item }}</li>
        </ul>
        <button @click="addName">添加</button>
        <ul>
            <li v-for="(value,key,index) in obj" :key="index">{{ value }}</li>
        </ul>
        <button @click="addAttr">添加</button>

        <div>
            {{ getMsg }}
        </div>
        
        <div>
            <p :class="{active:isActive}">hello</p>
            <button @click="changeActive">修改</button>
        </div>
        <div>
            <p :class="[c1,c2]">我是数组样式</p>
            <p :class="[isActive ? 'active' : '',c2]">我是数组三元表达式样式</p>
            <p :class="[isActive ? 'active' : '',{'text-danger': hasError},c2]">我是数组对象嵌套样式</p>
        </div>

    </div>
</template>
<script>
export default {
    name:"APIDemo",
    data(){
        return{
            count:10,
            names:['frank','iwen','jack'],
            obj:{
                name:'lix',
                age:20,
            },
            msg:'Hello Vue',
            isActive:false,
            hasError:true,
            c1:"cs1",
            c2:"cs2"
        }
    },
    methods:{
        setCountHandler(){
            this.count +=1
        },
        addName(){
            // this.names.push('jocker')
            // 上面是变异法
            let newNames = ['lilei', 'hanmeimei']
            let totalName = this.names.concat(newNames)
            this.names = totalName
            // 上面是替换数组法
            this.$set(this.names,1,'lix')
            this.names.splice(0,0,'bob')
            // 上面两方法可单独修改数组某一个值（$set和set通用），第二种方法还可以删除、增加项目
            // this.names.splice(newLength)
            // 上面代码可修改数组的长度
        },
        addAttr(){
            this.$set(this.obj,'sex','男')
            // 此方法可为对象添加属性
        },
        changeActive(){
            this.isActive = !this.isActive
        }
    },
    computed:{
    // 计算属性
        getMsg(){
            return this.msg.split('').reverse().join('')
        }
    }
}
</script>
<style>
.active{
    color: red;
}
.cs1{
    color: blue;
}
.cs2{
    background: #666;
}
</style>