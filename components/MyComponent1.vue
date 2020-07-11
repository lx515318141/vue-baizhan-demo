<template>
    <div>
        <div>
            {{ title }}-{{ age }}-{{ friends }}
        </div>
    </div>
</template>
<script>
    export default{
        name:'MyComponent1',
        data(){
            return{
                count:0,
                checked:false
            }
        },
        props:{
            title:{
                type:[String,Number],
                required:true
                // 正常情况下参数可传可不传，不传时就不会显示，但是存在 required:true 此属性时，则必须传，不传会有警告
            },
            age:{
                type:Number,
                default:1
                // 默认值与 required:true 互斥，若不传参数时则显示默认值
                // 当 type为 number，string，Boolean 时可以使用default：1 定义默认值
            },
            friends:{
                // 当 type 为对象，数组，函数时要以工厂模式进行返回,即返回一个函数
                type:Array,
                default:function(){
                    return ['0']
                }
            }
        }
    }
</script>
<style>

</style>