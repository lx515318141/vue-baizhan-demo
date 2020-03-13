<template>
    <div>
        <div>
            <p>{{ name }}</p>
            <input type="checkbox" v-model="checked">
        </div>
    </div>
</template>
<script>
    export default{
        name:'MyComponent',
        data(){
            return{
                count:0,
                checked:false
            }
        },
        props:['name']
    }
</script>
<style>

</style>