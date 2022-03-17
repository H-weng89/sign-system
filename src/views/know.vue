<template>
    <div class="wra" v-if="!mobile">
        <div class="descrip">
            <div class="item" v-for="(item,index) in list " :key = "index" :style="{left:item.position.x,top:item.position.y}" >
                <img :src="item.img" alt="" :style="{width:item.position.width,height:item.position.height}" v-if="!item.isClick" @mouseover.prevent="over(index)" @mouseleave.prevent="leave(index)" @click="choose(index)">
                 <img :src="item.img2" alt="" :style="{width:item.position.width,height:item.position.height}" v-else @mouseover.prevent="over(index)" @mouseleave.prevent="leave(index)" @click='choose(index)'>
                <div class="input" :style="{backgroundImage:'url('+item.input+')'}" v-if="item.isC"></div>
                 <!-- <div class="input"> <img :src="item.input" alt=""  v-if="item.isC"> </div> -->
            </div>
        </div>
       <div class="text2">
           <div v-if="!hasC">请至少选择一个感兴趣的方向</div>
           <div v-if="hasC" class="s" @click="toSign">选好了,立即报名</div>
       </div>
    </div>
    <div class="mobile" v-else>
        <div class="header">
             <a-page-header
    style="background-color:#584b4a;color:white"
    title="选择方向"
   
    @back="back"
  />
        </div>
        <div class="main">
            <div :class="{'item':true,'item2':item.isClick}" v-for="(item,index) in list" :key = "index"  @click="choose(index)">
                <div :class="{'left':!item.isClick,'left2':item.isClick}">{{item.name}}</div>
                 <div class="right">
                     <div>{{item.tech}}</div>
                     {{item.descrip}}
                     </div>
            </div>
        </div>
        <div class="footer">
            <!-- <div class="b1">    <a-button type="" shape="circle" size="middle">上一步</a-button></div> -->
          
         <div :class="{'b2':!hasC,'b12':hasC}">    <a-button type="" shape="round" size="middle" @click="toSign">下一步</a-button></div>
            


        </div>
    </div>
</template>

<script>
import ios1 from '../assets/ios透明.png'
import ios2 from '../assets/ios.png'
import ios3 from '../assets/ios+边框.png'
import cp1 from '../assets/产品透明.png'
import cp2 from '../assets/产品.png'
import cp3 from '../assets/产品+边框.png'
import Uni1 from '../assets/unity透明.png'
import Uni2 from '../assets/unity.png'
import Uni3 from '../assets/unity+边框.png'
import anz1 from '../assets/安卓透明.png'
import anz2 from '../assets/安卓.png'
import anz3 from '../assets/安卓+边框.png'
import java1 from '../assets/java透明.png'
import java2 from '../assets/java.png'
import java3 from '../assets/java+边框.png'
import mei1 from '../assets/美术透明.png'
import mei2 from '../assets/美术泡泡.png'
import mei3 from '../assets/美术+边框.png'
import golang1 from '../assets/golang透明.png'
import golang2 from '../assets/golang.png'
import golang3 from '../assets/go+边框.png'
import front1 from '../assets/前端透明.png'
import front2 from '../assets/前端.png'
import front3 from '../assets/前端+边框.png'
import python1 from '../assets/python透明.png'
import python2 from '../assets/python.png'
import python3 from '../assets/python+边框.png'
export default {
    name: 'DemoKnow',

    data() {
        return {
             list2:[],
            list:[{name:'iOS',descrip:'主要学习使用swift进行iOS App的开发，通过考核后将参与到福大助手iOS版的开发与维护中。iOS开发作为移动端开发的重要组成部分，拥有广阔的就业前景。',position:{x:'20%',y:'15%',width:'225px',height:'185px'},img:ios1,img2:ios2,isC:false,input:ios3,isClick:false,tech:'技能：Objective-C，Swift....'},
            {name:'产品',descrip:'如果你，愿意面对攻击和挑战，有很好的抗压能力；如果你，喜欢跟人搭档工作，有很强的协同能力，喜欢研究和探索；如果你，有很强的逻辑分析和决断力，有很好的项目管理能力。那么在西二，你可以与最优秀的工程师合作，把最牛逼的技术变成最受欢迎的产品！',position:{x:'8%',y:'35%',width:'255px',height:'213px'},img:cp1,img2:cp2,isC:false,input:cp3,isClick:false,tech:'技能：需求分析、运营思维......'},
            {name:'Unity',descrip:'Unity3D是由Unity Technologies开发的一个让玩家轻松创建诸如三维视频游戏、建筑可视化、实时三维动画等类型互动内容的多平台的综合型开发工具，是一个全面整合的实时3D开发平台。加入西二，一起用Coding的力量构建真实的虚拟世界吧！',position:{x:'25%',y:'40%',width:'250px',height:'215px'},img:Uni1,img2:Uni2,isC:false,input:Uni3,isClick:false,tech:'技能：Unity3D，C#......'},
              {name:'安卓',descrip:'Android系统是一个轻薄短小、功能强大、基于linux的开源移动操作系统。你想要打造出一款符合自己畅想的APP吗？你想要体验改变生活的魅力吗？加入我们，在智能手机 、平板电脑上随心所欲地发挥自己的创意吧！',position:{x:'35%',y:'34%',width:'255px',height:'214px'},img:anz1,img2:anz2,isC:false,input:anz3,isClick:false,tech:'技能：Java，Kotlin.....'},
                {name:'Java',descrip:'Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。熟练学习Java后可以编写桌面应用程序、Web应用程序、分布式系统和嵌入式系统应用程序等。',position:{x:'50%',y:'8%',width:'255px',height:'214px'},img:java1,img2:java2,isC:false,input:java3,isClick:false,tech:'技能：Java，SpringBoot，MySQL......'},
                {name:'美术',descrip:'UI设计是指软件的人机交互、操作逻辑、界面美观的整体设计。一个好的UI设计，不仅让软件或网页有美感、有个性、有品味，还能让操作舒适、简单、自由。加入西二美术组，完成你专属的UI设计和海报设计吧！',position:{x:'50%',y:'30%',width:'260px',height:'218px'},img:mei1,img2:mei2,isC:false,input:mei3,isClick:false,tech:'技能：海报设计，游戏美工......'},
                 {name:'Golang',descrip:'Golang属于静态类型语言，同时拥有动态语言的特点。具有编写效率高、语言层面天生支持并发的特点。天生的基因和整容是有区别的，大家一样美丽，但是你喜欢整容的还是天生基因的美丽呢？Golang就是基因里面支持的并发，可以充分的利用多核，很容易地实现并发。',position:{x:'32%',y:'8%',width:'255px',height:'213px'},img:golang1,img2:golang2,isC:false,input:golang3,isClick:false,tech:'技能：Gin，BCT，MicroService.....'},
                  {name:'前端',descrip:'主要用html css js做网页  后续会用到框架，也学习做小程序和app 对后端感兴趣的也可以用node做后端',position:{x:'67%',y:'32%',width:'255px',height:'213px'},img:front1,img2:front2,isC:false,input:front3,isClick:false,tech:'技能：HTML，JS，CSS......'},
                  {name:'Python',descrip:'具有开发效率高，学习成本低、简单易学，可扩展性强，项目周期短的特点。可通过flask，fastapi等库快速搭建一个功能强大的web服务，更可使用大量人工智能方面的库进行开发。Python不仅可在简单工作中提供超过Excel的数据分析能力，更能够在大型项目数据处理方面提供极高效可靠的服务。',position:{x:'65%',y:'2%',width:'300px',height:'251px'},img:python1,img2:python2,isC:false,input:python3,isClick:false,tech:'技能：flask，AI，spider.....'},

            ],
            hasC:false,
            flag:0,
            mobile:false,
            // height:document.body.clientHeight,
            // width:document.body.clientWidth

            
        };
    },

    watch:{
    //   height:function(val){
    //       if(val<=668){
    //           this.mobile = true
    //       }
    //       if(val>668&&this.width>688){
    //           this.mobile = false
    //       }
    //   },
    //    width:function(val){
    //       if(val<=1100){
    //           this.mobile = true
    //       }
    //       if(val>1100&&this.height>668){
    //           this.mobile = false
    //       }
    //   }
    },

    mounted() {
    //   window.onresize = () =>{

    //     return (() => {


    //        this.width = document.body.clientWidth
    //        this.height = document.body.clientHeight

    //         // console.log(this.height)

    //     })()

    // }
      this.mobile = this.isMobile()
      if(sessionStorage.getItem('data')){
          this.list = JSON.parse(sessionStorage.getItem('data'))
      }
       for(let i = 0;i<this.list.length;i++){
              if(this.list[i].isClick){
                 
                  this.hasC = true
                  break
              }
          }
        this.set()
    },

    methods: {
        set(){  
  document.body.style.zoom = 1.0;
  document.body.style.cssText += '; -moz-transform: scale(' + 1.0 + ');-moz-transform-origin: 0 0; '; 
},
       
        over(index){
            this.list.forEach(item=>{
                item.isC = false
            })
            this.list[index].isC = true
           
        
        },
        leave(index){
            this.list[index].isC = false
            
        },
        choose(index){
            this.list[index].isClick = !this.list[index].isClick
           this.hasC = false
          for(let i = 0;i<this.list.length;i++){
              if(this.list[i].isClick){
                 
                  this.hasC = true
                  break
              }
          }
        },
        toSign(){
            if(this.hasC){
 this.list.forEach(item=>{
                if(item.isClick){
                    this.list2.push(item)
                }
            })
            sessionStorage.setItem('list',JSON.stringify(this.list2))
            sessionStorage.setItem('data',JSON.stringify(this.list))
            this.$router.push('/sign')
            }
           
        },
        isMobile () {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true // 手机端
  } else {
    return false // alert('PC端')
  }
},
back(){

    this.$router.push('/home')
}
    },
};
</script>

<style lang="less" scoped>

.wra{
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    // background-color: #1D202E;
    background-color: black;
    background-image: url(../assets/星空.png),url(../assets/流星.png),url(../assets/宇航员.png);
    background-repeat: no-repeat;
    background-position: center, top,center;
 
 .descrip{
     width: 100%;
     height: 100%;
     overflow: hidden;
 }

     .item{
         
        
        overflow: hidden;
      
        
        // overflow: hidden;
        position: absolute;
        img{
            border-radius: 50%;
        }

        
    }
    .input{
position: relative;
width: 250px;
height:135px;
 object-fit: 100% 100%;
top: -60px;
 
//  img{
//      object-fit: cover;
//      position: absolute;
//      width: 100%;
//      height: 100%;
//      object-fit: cover;
//  } 

    
         
        background-repeat: no-repeat;
        // background-position: 0px -20px;
        background-size: 100% 100%;
   
   
       margin: 0;
    
        //  background-size: contain;
       
     
       z-index: 1;


        // background-size: cover;
        // background-color: black;
        // background-color: rgba(29, 32, 46, 0);
        
     
        //  background-position: top;
        color: aliceblue;
    //  background-position: 100%;
        .text{
            position: absolute;
            top: 25%;
            left: 20%;
            
        }
        
    }
    .item:nth-child(9){
        .input{
  height: 135px;
        }
      
    }
    .text2{
        position: absolute;
        bottom: 30px;
        color: white;
        left: 50%;
        transform: translate(-50%);
        font-size: 16px;
        .s{
           margin-left: 45px;
        }
        .s:hover{
            cursor: pointer;
        }
    }
    
}

.mobile{
    width: 100%;
    // height: 299%;
    height: 2200px;
    position: relative;
    .main {
    position: absolute;
    top: 2%;
    width: 100%;
    height: 80%;

.item2{
     border: 0.2px solid #f79a58 !important;
}
    .item{
       display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 15px;
        height: 200px;
     border: 0.2px solid #584a4b;
        width: 90%;
        margin-left: 5%;
        border-radius: 5px;
        border-left: 0px solid !important;
        .left{
           margin-right: 10px;
         flex: 1;
            height: 200px;
            border-radius: 5px;
            background-color: #584a4b;
            margin-left: 0;
            line-height: 180px;
            text-align: center;
            color: white;
            font-size: 14px;
            
        }
        .left2{
               margin-right: 10px;
              flex: 1;
            height: 200px;
            border-radius: 5px;
            background-color: #f79a58;
            margin-left: 0;
            line-height: 180px;
            text-align: center;
            color: white;
            font-size: 14px;
        }
        .right{
            flex: 5;
           
            font-size: 14px;
        }
    }
}
:global(.ant-page-header-heading-title){
    margin-left: 100px;
    color: white;
}
:global(.anticon svg){
    color: white;
}
:global(.ant-page-header){
    padding: 5px 20px;
}
.footer{
    height: 200px;
   width: 50%;
    position: absolute;
    // bottom: -30px;
    bottom:-30px;
    left: 42.5%;
    transform: translate(-50%);
    text-align: center;
    .b1{
        margin-bottom: 15px;
    }
   /deep/ .b1 
   {
.ant-btn-circle{

        border-radius: 50px;
        background-color: gray;
        border: 1px solid gray;
        width: 250px;
        
    
    } 
   }
   /deep/ .b12
   {
.ant-btn-round{

        border-radius: 50px;
        background-color: #f79a58 ;
        border: 1px solid #f79a58;
        width: 250px;
        
    
    } 
   }
   /deep/ .b2 .ant-btn-round{
       border-radius: 50px;
        background-color: gray;
        border: 1px solid gray;
        width: 250px;
   }
   
}
}

</style>