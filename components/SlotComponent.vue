<template>
    <div>
        <div>
            <slot name="n1">我是默认内容</slot>
            <p>---------------------------------</p>
            <slot name="n2" :msg='msg'></slot>
            <p>---------------------------------</p>
            <slot :msg='msg'></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'SoltComponent',
        data(){
            return{
                msg:'我是插槽的数据呀'
            }
        },
        
    }
</script>
<style>

</style>