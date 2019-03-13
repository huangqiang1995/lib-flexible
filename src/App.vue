<template>
  <div id="app">
    <div class='box1'></div>
    <div class='box2'></div>
    <div class='box3'></div>
    <div class='box4'></div>
    <div class='box5'></div>
    <div class='box6'></div>
    <p>字体适配测试</p>
  </div>
</template>

<style lang="scss">
p{
  font-size:30px;/*px*/
}
*{margin:0;padding:0}
  #app{
    width:100%;
    div{
      height:100px;
    }
  }
  .box1{
    width:75px;
    background:red;
  }
  .box2{
    width:200px;
    background:darkblue;
  }
  .box3{
    width:300px;
    background:yellowgreen;
  }
  .box4{
    width:500px;
    background:slategrey;
  }
  .box5{
    width:650px;
    background:green;
  }
  .box6{
    width:750px;
    background:skyblue;
  }
  .clear{
    zoom: 1;
  }
  .clear:after{
    display: block;
    clear:both;
    content:'';
    visibility: hidden;
    height:1; }
</style>
