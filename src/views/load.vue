<template>
    <div class="load">
    <div class="blakc"></div>
    <div class="img">
<img src="../assets/west.png" alt="">
    <img src="../assets/文字.png" alt="">
    </div>
    


  </div>
</template>

<script>
export default {
    name: 'DemoLoad',

    data() {
        return {
            
        };
    },

    mounted() {
        localStorage.setItem('load','true')
        setTimeout(()=>{
this.$router.push('/home')
        },3000)
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.load{
  width: 100%;
  height: 100%;
  background: #1d202e;

  overflow: hidden;

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
     width: 30px;
     margin-right: 20px;
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

</style>