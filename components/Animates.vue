<template>
    <div>
        <div>
            动画效果
            <button @click="show">Toggle</button>
            <transition name='fade'>
                <p v-show="status">单元素过渡</p>
            </transition>
            <transition name='slide-fade'>
                <p v-show="status">CSS过渡</p>
            </transition>
            <transition name="bounce">
                <p v-show="status">CSS动画</p>
            </transition>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated zoomInDown"
                leave-active-class="animated zoomOutDown"
            >
                <p v-show="status">CSS动画库</p>
            </transition>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Animates',
        data(){
            return{
                status:true,
            }
        },
        methods:{
            show(){
                this.status = !this.status
            }
        }
        
    }
</script>
<style>
/* fade显示过程和消失过程 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
/* fade显示前和消失后 */
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* fade消失前和显示后 */
.fade-enter-to, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
.slide-fade-enter,.slide-fade-leave-to{
    transform: translateX(10px);
    opacity:0
}
.slide-fade-enter-active{
    transition: all 0.3s;
}
.slide-fade-leave-active{
    transition: all 0.8s;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>