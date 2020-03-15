<script>
export default {
    name:'JSX',
    data(){
        return{
            msg:'JSX'
        }
    },
    methods:{
        clickHandler(){
            this.msg = 'hello'
        }
    },
    render(){
        return(
            <div>
            我是：{ this.msg }
            <button onClick={ this.clickHandler }>点击</button>
            { this.$slots.default }
            { this.$slots.header }
            </div>
        )
    }
}
</script>
<style scoped>

</style>