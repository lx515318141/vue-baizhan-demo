<template>
    <div>
        实例生命周期:{{ msg }}
        <button @click="changeMsg">修改</button>

        <input type="text" v-focus placeholder="全局自定义指令">
        <p v-red>局部自定义指令</p>
    </div>
</template>
<script>
export default {
    name:'Life',
    data(){
        return{
            msg:'hello'
        }
    },
    directives:{
        // 注册局部自定义指令
        red:{
            inserted(el){
                el.style.color = 'red'
            }
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('brforeMount')
    },
    mounted(){
        console.log('mountde')
    },
    beforeUpdate(){
        console.log('brforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    },
    methods:{
        changeMsg(){
            this.msg = 'World'
        }
    }
    
}
</script>
