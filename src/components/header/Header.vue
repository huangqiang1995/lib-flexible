<template>
    <div>
        lib-flexible-demo  
        <button style='height:50px;width:100px;font-size:20px;' @click='go'>返回</button>
    </div>
</template>

<script>
export default {
    methods:{
        go(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    div{
        height:47px;
        background:rgba(255, 0, 0, 0.733);
        text-align: left;
        line-height: 47px;
        padding:0 10px;
        color:#fff;
        position: relative;
        top:0;
    }
</style>
