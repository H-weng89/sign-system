<template>
    <div :class="{'wra':true,'mobile':mobile}">
        <div class="top">
            <div class="left">
                <div :class="{'flag':flag}" @click="list">列表视图</div>
                <div :class="{'flag':!flag}" @click="chart">统计视图</div>
            </div>
            <div :class="{'right':!mobile,'rmobile':mobile}">
                 <a-dropdown placement="bottomCenter" :trigger="['click']" >
    <a class="ant-dropdown-link" @click.prevent>
           {{time}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item >
          <a href="javascript:;" style="font-size:13px">2022</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" style="font-size:13px">2020</a>
        </a-menu-item>
        <a-menu-item >
          <a href="javascript:;" style="font-size:13px">2019 </a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
            
        </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue'
export default defineComponent( {
    components:{
        DownOutlined
    },
    data(){
        return{
            flag:true,
            time:2021,
            mobile:false
            
        }
    },
  

    mounted() {
        if(this.isMobile()){
           this.mobile = true
           console.log(this.mobile)
        }
    },
  

    methods: {
        list(){
            this.$router.push('/about')
            this.flag = true
        },
        chart(){
             this.$router.push('/chart')
             this.flag = false
        },
         isMobile () {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true // 手机端
  } else {
    return false // alert('PC端')
  }
}

        
    },
});
</script>

<style lang="less" scoped>

.wra{
    width: auto;
    height: 100%;
   
}

.mobile{
    width: 170% !important;

  .rmobile{
      position: absolute;
      right: -60%;
      /deep/ span svg{
         font-size: 9px;
     }
   /deep/.ant-dropdown-menu-title-content a{
         font-size: 8px !important;
     }
        }
}
.top{
    width: auto;
    height: 5%;
    background-color: #5a5a5a;
    line-height: 26px;
    text-align: center;
    display: flex;
       align-items: flex-end;
        align-content: flex-end;
     .left{
        display: flex;
        height: 80%;
     
       
        width: 35%;
       div{
            margin-left: 5px;
            padding-left: 5px;
            padding-right: 5px;
           background-color: gray;
       }
       div:hover{
           cursor: pointer;
       }
       .flag{
           background-color: white;
       }
    }
    .right{
     position: absolute;
     right: 10%;
     /deep/ span svg{
         font-size: 9px;
     }
   /deep/.ant-dropdown-menu-title-content a{
         font-size: 8px !important;
     }
    }
}

.main{
    height: 80%;
    margin-top: 6%;
width: 88%;
margin-left: 5%;
}

</style>