<template>
    <div>
        <!-- <input type="text" v-model.lazy="msg"> -->
        <!-- .lazy使用后input事件触发后下面不会同步更新，而是与change事件同步，即点击回车或鼠标点击才会更新 -->
        <!-- <p>{{ msg }}</p> -->
        <!-- {{ this.$refs.usernameInput.setInput() }} -->
    </div>
</template>
<script>
export default {
    name:'APIDemo2',
    data(){
        return{
            msg:""
        }
    }
}
</script>
