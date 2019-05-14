<template>
    <div style="height:100%;">
        <demo-header></demo-header>
        <router-view></router-view>
        <demo-footer :page-name='pageName'></demo-footer>
    </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
export default {
    components:{
        'demo-header':Header,
        'demo-footer':Footer
    },
    data(){
        return{
            title:'',
            pageName:'/r1'
        }
    },
    watch:{
        $route(val){
            this.pageName = val.path;
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>
