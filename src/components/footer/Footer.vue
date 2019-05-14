<template>
    <div class='footer'>
        <ul class="list">
            <li v-for='item in demoList' :class="item.isShow?'active':''" @click="toPage(item.props)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        pageName:{
            type:String,
            default:'/r1'
        }
    },
    data(){
        return {
            list:[
                {
                    name:"r1",
                    props:'/r1',
                    isShow:false
                },
                {
                    name:"r2",
                    props:'/r2',
                    isShow:false
                },
                {
                    name:"r3",
                    props:'/r3',
                    isShow:false
                }
            ]
        }
    },
    mounted(){
        
    },
    computed:{
        demoList(){
            this.list.forEach((item,index)=>{
                if(this.pageName == item.props){
                    item.isShow = true;
                }else{
                    item.isShow = false;
                }
            })
            return this.list;
        }
    },
    methods:{
        toPage(url){
            this.$router.push({
                path:url
            })
        }
    }
}
</script>

<style scoped>
    .footer{
        position: fixed;;
        bottom:0;
        height:50px;
        width:100%;
    }
    .active{
        color:red;
        font-weight: 600;
    }
    .list{
        display: flex;
        justify-content:space-around
    }
</style>
