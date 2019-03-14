<template>
  <div id="app"> 
    <flex-home></flex-home>
  </div>
</template>
<script>
import Home from '@/views/Home';
export default {
  components:{
    'flex-home' : Home
  },  
}
</script>

<style lang="scss">
 
*{margin:0;padding:0} 
html,body{height:100%;}
  .clear{
    zoom: 1;
  }
  #app{
    width:100%;
    height:100%;
  }
  .clear:after{
    display: block;
    clear:both;
    content:'';
    visibility: hidden;
    height:1; }
</style>
