<template>
    <div>
        B组件：{{ msg }}
        <button @click="changeMsg">修改</button>
        <CComponent />
    </div>
</template>
<script>
// import CComponent from './CComponent'
const CComponent = () => import('./CComponent')
    export default{
        name:'BComponent3',
        data(){
            return{
                msg:'B的初始值'
            }
        },
        components:{
            CComponent
        },
        methods:{
            changeMsg(){
                this.msg = 'B的更新值'
            }
        }
        
    }
</script>