<template>
    <div>
        动态组件:
        <button @click="changeComponent">切换</button>
        <keep-alive>
            <component :is='currentComponent'></component>
        </keep-alive>
        <!-- {{ this.$parent.value }} -->
        
    </div>
</template>

<script>
import AComponent from './child/AComponent'
import BComponent from './child/BComponent'
    export default{
        name:'MyComponent3',
        data(){
            return{
                currentComponent:AComponent
            }
        },
        components:{
            AComponent,
            BComponent
        },
        methods:{
            changeComponent(){
                if(this.currentComponent === AComponent){
                    this.currentComponent = BComponent
                }else{
                    this.currentComponent = AComponent
                }
            }
        }
        
    }
</script>