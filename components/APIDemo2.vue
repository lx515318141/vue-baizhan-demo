<template>
    <div>
        <input type="text" v-model.lazy="msg">
        <!-- .lazy使用后input事件触发后下面不会同步更新，而是与change事件同步，即点击回车或鼠标点击才会更新 -->
        <p>{{ msg }}</p>

        <input type="checkbox" v-model="checked">
        <p>{{ checked }}</p>

        <input type="checkbox" id="jack" value="jack" v-model="checkeds">
        <input type="checkbox" id="join" value="join" v-model="checkeds">
        <input type="checkbox" id="mike" value="mike" v-model="checkeds">
        <p>{{ checkeds }}</p>

        <ul>
            <li v-for="(item, index) in checkeds" :key="index">{{ item }}</li>
        </ul>

        <input type="text" name="" id="">
        <!-- {{ this.$refs.usernameInput.setInput() }} -->
    </div>
</template>
<script>
export default {
    name:'APIDemo2',
    data(){
        return{
            msg:"hi",
            checked:false,
            checkeds: []
        }
    }
}
</script>
