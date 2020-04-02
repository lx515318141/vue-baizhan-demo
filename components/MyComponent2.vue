<template>
    <div>
        <div>
            <p>{{ title }}</p>
            <button @click="eventHandler">send</button>
            <input type="text" v-model="message" @change="msgChange">
        </div>
    </div>
</template>
<script>
    export default{
        name:'MyComponent2',
        data(){
            return{
                count:0,
                checked:false,
                message:''
            }
        },
        props:{
            title:{
                type:String,
                default:'hello'
            }
        },
        methods:{
            eventHandler(){
                this.$emit('myEvent',this.count)
            },
            msgChange(){
                this.$emit('myChange',this.message)
                // 此方法只有在点击回车或鼠标是传递数据
            }
        },
        watch:{
        // 侦听器中的watch属性，可以让父组件实时获取子组件中v-model的数据，不再需要点击回车或鼠标
            message(value){
                this.$emit('myWatch',this.message)
            }
        }
    }
</script>
<style>

</style>