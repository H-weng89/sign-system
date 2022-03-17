<template> 

 
   
 <div class="w2online" >
<div class="mobile-wrapper">
<div id="mobile-bg">

<div class="join"><p>JOIN US</p></div>
<div class="slogan"><p>用你的一个想法/一段代码改变世界</p></div>
<div class="logo"></div>
</div>
<div class="mobile-nav nav" style="display: none;">
<ul class="mobile-nav1">
<li><span><a href="http://www.west2online.com">西二在线</a></span></li>
<li><span class="active"><a href="javascript:;">首页</a></span></li>
<li><span><a href="https://join.w2fzu.com/index.php/job/index">职位分类</a></span>
<ul class="mobile-nav2">
<li class="detail"><a href="https://join.w2fzu.com/index.php/job/index/45">程序猿</a></li>
<li class="detail"><a href="https://join.w2fzu.com/index.php/job/index/46">产品汪</a></li>
<li class="detail"><a href="https://join.w2fzu.com/index.php/job/index/47">设计狮</a></li>
</ul>
</li>
<li class="mobile-nav1"><span><a href="https://join.w2fzu.com/index.php/about/index">西二概况</a></span></li>
</ul>
</div>
<div class="mobile-process">
<div class="center-bar">
</div>
<div class="process-detail">
<div class="step step1 position-right">
<a href="http://join.w2fzu.com/index.php/job/index" style="color: #2c1f1b"><div class="icon-box"><span class="step-icon"><img src="https://join.w2fzu.com/static/image/nav1.png" alt=""></span></div>
<span class="step-name" style="text-decoration:underline" @click.prevent="toKnow">在线报名</span></a>
</div>
<div class="step step2 position-left">
<span class="step-name">初步筛选</span>
<div class="icon-box"><span class="step-icon"><img src="https://join.w2fzu.com/static/image/nav2.png" alt=""></span></div>
</div>
<div class="step step2 position-right">
<div class="icon-box"><span class="step-icon"><img src="https://join.w2fzu.com/static/image/nav3.png" alt=""></span></div>
<span class="step-name">通知面试</span>
</div>
<div class="step step3 position-left">
<span class="step-name">实习锻炼</span>
<div class="icon-box"><span class="step-icon"><img src="https://join.w2fzu.com/static/image/nav4.png" alt=""></span></div>
</div>
<div class="step step4 position-right">
<div class="icon-box"><span class="step-icon"><img src="https://join.w2fzu.com/static/image/nav5.png" alt=""></span></div>
<span class="step-name">正式成员</span>
</div>
</div>
</div>
</div>
<div class="back" id="large-header">
<canvas id="demo-canvas"></canvas>
<div style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">
<div class="index header">
<div class="nav clearfix">
<!-- <ul>
<li class="website fl"><a href="http://www.west2online.com"><img class="w2logo" src="https://join.w2fzu.com/static/image/w2logo.png"></a></li>
<li class="active fl"><a href="#">首页</a></li>
<li class="fl"><a href="https://join.w2fzu.com/index.php/job/index">职位分类</a></li>
<li class="fl"><a href="https://join.w2fzu.com/index.php/about/index">西二概况</a></li>
</ul> -->
</div>
</div>
<div class="main">
<div class="join"><p>JOIN US</p></div>
<div class="subnav">
<ul class="clearfix">
<li class="fl" style="background: url(https://join.w2fzu.com/static/image/nav1.png) no-repeat;background-size: 48% "><a href="http://join.w2fzu.com/index.php/job/index" style="color: #FFF"><p>在线报名</p></a></li>
<li class="fl arrow-down" style="background: url(https://join.w2fzu.com/static/image/jiantou.png) no-repeat;background-size: 90%;margin-top: 5.5%;width: 7.14%;"></li>
<li class="fl" style="background: url(https://join.w2fzu.com/static/image/nav2.png) no-repeat;background-size: 48%;margin-top: 14%;"><p>初步筛选</p></li>
<li class="fl arrow-up" style="background: url(https://join.w2fzu.com/static/image/jiantou1.png) no-repeat;background-size: 90%;margin-top: 5.5%;width: 7.14%;"></li>
<li class="fl" style="background: url(https://join.w2fzu.com/static/image/nav3.png) no-repeat;background-size: 48% "><p>通知面试</p></li>
<li class="fl arrow-down" style="background: url(https://join.w2fzu.com/static/image/jiantou.png) no-repeat;background-size: 90%;margin-top: 5.5%;width: 7.14%;"></li>
<li class="fl " style="background: url(https://join.w2fzu.com/static/image/nav4.png) no-repeat;background-size: 48%;margin-top: 14%;"><p>实习锻炼</p></li>
<li class="fl aroow-up" style="background: url(https://join.w2fzu.com/static/image/jiantou1.png) no-repeat;background-size: 90%;margin-top: 6%;width: 7.14%;"></li>
<li class="fl" style="background: url(https://join.w2fzu.com/static/image/nav5.png) no-repeat;background-size: 48%; "><p>正式成员</p></li>
</ul>
</div>
<!-- <div class="logo"></div> -->
 <div class="next">
   <div class="title">九大方向介绍</div>
   <div class="arr" @click="toKnow">
  <i></i>
  <i></i>

</div>

 </div>
</div>
</div>
</div>
<div style="z-index:1;position: absolute; bottom: 0;right:26px;">
<a href="https://www.upyun.com/?w2" title="又拍云赞助" rel="noreferrer" data-ss1548322861="1"><img style="width: 75px;" src="https://www.w2fzu.com/usr/uploads/logos/upyun-white.png" alt="又拍云"></a>
</div>

 </div>

</template>


<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
      load:true

    }
  },
  beforeCreate(){

  },

  mounted(){
    if(localStorage.getItem('load')=='true'){
      localStorage.setItem('load','false')
      location.reload()
    }
    // if(this.load){
    //   this.load = false
    //   location.reload()
    // }
    
  },
  methods:{
    toKnow(){
      localStorage.setItem('load','true')
   this.$router.push('/know')
     }
 
  }
 
}
</script>


<style  lang="less" scoped>
   .w2online .back {
    position: relative;
    width: 100%;
    background-color: black !important;
    overflow: hidden;
    z-index: 1;
         background-image: url(../assets/星空.png),url(../assets/流星.png);
    background-repeat: no-repeat;
    background-position: center, top center;
   background-size: contain;
}
  .arr{
    overflow: hidden;
    text-align: center;
    position: fixed;
    left: 38%;
    z-index: 100;
    top:95%;
    transform: rotate(90deg);
   
}
.arr i{
    display: inline-block;
    width:20px;
    height:15px;
    border-width:0;
    border-right-width:2px;
    border-top-width:2px;
    border-style:solid;
    border-color:#0181BF;
    -o-transform: rotateZ(45deg);//旋转箭头角度
    -moz-transform:rotateZ(45deg);
    -ms-transform:rotateZ(45deg);
    -webkit-transform:rotateZ(45deg);
    transform: rotateZ(45deg);
     -webkit-animation: twinkling 2s infinite linear;
  

}
.arr i:nth-child(2){
  animation-delay: -1s !important;
  position: relative;
  top: -10px;
}
.arr i:nth-child(3){
  animation-delay: -0.4s;
}
@-webkit-keyframes twinkling{    /*透明度由0到1*/
0% { opacity: 0.5; }
	40% { opacity: 1; }
	80% { opacity: 0.5; }
	100% { opacity: 0.5; }
}

.load{
  width: 100%;
  height: 100%;
  background: #1d202e;

 .img{
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   
   img:nth-child(1){
     width: 70px;
   }
   img:nth-child(2){
    
     height: 40px;
   }
 }

 .blakc{
   height: 100px;
   width: 273px;
   background-color: #1d202e;
   position: absolute;
     left: 55%;
   top: 50%;
   transform: translate(-50%,-50%);
   z-index: 100;
   animation: move 3s infinite linear;
 
 }

}
 @keyframes move{
   
   0%{
     width: 273px;
   }
   100%{
     width: 0;
   }
 }



.next{
  position:fixed;
  left:50%;
  bottom:8%;
  transform: translate(-50%,-5%);

  .title{
    color:white;
    font-size: 16px;

  }

  .arr{
    left: 30%;
    i{
      border-color:white;
      left:30%
     
    }
  }
   
  }

</style>