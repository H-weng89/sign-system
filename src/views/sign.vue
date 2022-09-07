<template>

<div class="wra" v-if="!isMobile()">
<div class="header">
    <h4>欢迎报名西二在线</h4>
</div>

<div :class="{'main':!isMobile(),'mobile':isMobile()}">
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
    labelAlign = 'right'
  >
    <a-form-item  label="学号" name="no">
      <a-input v-model:value="formState.no" type="text" autocomplete="off" size="small"   maxlength="9" />
    </a-form-item>
    <a-form-item has-feedback label="姓名" name="name">
      <a-input v-model:value="formState.name" type="text" autocomplete="off" size="small"/>
    </a-form-item>
    <!-- <a-form-item has-feedback label="Age" name="age">
      <a-input-number v-model:value="formState.age" />
    </a-form-item> -->
     <a-form-item label="学习方向(可多选)">
         <br v-if="!isMobile()">
      <a-checkbox-group v-model:value="formState.jobs">
        <a-checkbox value="前端" name="type">前端</a-checkbox>
        <br>
        <a-checkbox value="Java" name="type">Java</a-checkbox>
        <br>
        <a-checkbox value="Python" name="type">Python</a-checkbox>
        <br>
        <a-checkbox value="产品" name="type">产品</a-checkbox>
        <br>
         <a-checkbox value="美术" name="type">美术</a-checkbox>
        <br> <a-checkbox value="Golang" name="type">Golang</a-checkbox>
        <br> <a-checkbox value="安卓" name="type">安卓</a-checkbox>
        <br> <a-checkbox value="iOS" name="type">iOS</a-checkbox>
        <br> <a-checkbox value="Unity" name="type">Unity</a-checkbox>
        <br>
      </a-checkbox-group>
    </a-form-item>
     <a-form-item has-feedback label="校区" >
      <a-radio-group v-model:value="formState.campus">
      <a-radio value="铜盘">铜盘</a-radio>
      <a-radio value="旗山">旗山</a-radio>
     
    </a-radio-group>
    </a-form-item>
     <a-form-item has-feedback label="年级" >
      <a-radio-group v-model:value="formState.grade">
      <a-radio value="大一">大一</a-radio>
      <a-radio value="大二">大二</a-radio>
     
    </a-radio-group>
    </a-form-item>
    <a-form-item has-feedback label="学院专业" name="profession">
      <a-input v-model:value="formState.profession" type="text" autocomplete="off" size="small"/>
    </a-form-item>
      <a-form-item label="了解渠道(可多选):" >
         <br v-if="!isMobile()">
      <a-checkbox-group v-model:value="formState.access">
        <a-checkbox value="福大助手" name="type">福大助手</a-checkbox>
        <br>
        <a-checkbox value="海报" name="type">海报</a-checkbox>
        <br>
        <a-checkbox value="班导" name="type">班导</a-checkbox>
        <br>
         <a-checkbox value="辅导员推荐" name="type">辅导员推荐</a-checkbox>
        <br>
        <a-checkbox value="其他" name="type" class="others" @click="others">其他  <a-input v-model:value="othersMain" size="small"   style="position: absolute;width: 50%;margin-left: 14px;"  v-if="isothers" /></a-checkbox>
        <br>
        
        <br>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item has-feedback label="选择西二的理由" name="reason">
      <a-textarea v-model:value="formState.reason" placeholder="选择西二的理由(100字以内)" :rows="4"   showCount = true  maxlength="100" />
    </a-form-item>
    <a-form-item has-feedback label="自我介绍" name="introduction">
      <a-textarea v-model:value="formState.introduction" placeholder="自我介绍(100以内)" :rows="4" showCount = true  maxlength="100"/>
    </a-form-item>
     <a-form-item  label="邮箱" name="mail">
      <a-input v-model:value="formState.mail" type="text" autocomplete="off" size="small"/>
    </a-form-item>
     <a-form-item  label="手机号" name="phone">
      <a-input v-model:value="formState.phone" type="text" autocomplete="off" size="small"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary" html-type="submit">提交</a-button>
      <div class="result">
         <a-modal v-model:visible="visible" title="提示" @ok="handleOk" okText="确认" cancelText="取消" :mask="false">
            <div class="first" v-if="!isSecond">恭喜报名成功!!! 请加入纳新Q群获取最新资讯（群号：{{group}}）</div>
          <div class="second" v-else>报名信息更新成功
    
          </div>
    </a-modal>
      </div>

    </a-form-item>
  </a-form>
</div>
</div>
<div class="mobileW" v-else>
      <div class="header">
            <a-page-header
    style="background-color:#584b4a"
    title="在线报名"
 
    @back="back"
  />
  <div class="main">
     <a-form
    ref="formRef"
    name="custom-validation"
    layout=""
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item  label="学号" name="no">
      <a-input v-model:value="formState.no" type="text" autocomplete="off" size="small"  maxlength="9" />
    </a-form-item>
    <a-form-item has-feedback label="姓名" name="name">
      <a-input v-model:value="formState.name" type="text" autocomplete="off" size="small"/>
    </a-form-item>
    <!-- <a-form-item has-feedback label="Age" name="age">
      <a-input-number v-model:value="formState.age" />
    </a-form-item> -->
     <a-form-item label="学习方向(可多选)">
         <br v-if="!isMobile()">
      <a-checkbox-group v-model:value="formState.jobs">
        <a-checkbox value="前端" name="type">前端</a-checkbox>
        <br>
        <a-checkbox value="Java" name="type">Java</a-checkbox>
        <br>
        <a-checkbox value="Python" name="type">Python</a-checkbox>
        <br>
        <a-checkbox value="产品" name="type">产品</a-checkbox>
        <br>
         <a-checkbox value="美术" name="type">美术</a-checkbox>
        <br> <a-checkbox value="Golang" name="type">Golang</a-checkbox>
        <br> <a-checkbox value="安卓" name="type">安卓</a-checkbox>
        <br> <a-checkbox value="=iOS" name="type">iOS</a-checkbox>
        <br> <a-checkbox value="Unity" name="type">Unity</a-checkbox>
        <br>
      </a-checkbox-group>
    </a-form-item>
     <a-form-item has-feedback label="校区" >
      <a-radio-group v-model:value="formState.campus">
      <a-radio value="铜盘">铜盘</a-radio>
      <a-radio value="旗山">旗山</a-radio>
     
    </a-radio-group>
    </a-form-item>
     <a-form-item has-feedback label="年级" >
      <a-radio-group v-model:value="formState.grade">
      <a-radio value="大一">大一</a-radio>
      <a-radio value="大二">大二</a-radio>
     
    </a-radio-group>
    </a-form-item>
    <a-form-item has-feedback label="学院专业" name="profession">
      <a-input v-model:value="formState.profession" type="text" autocomplete="off" size="small"/>
    </a-form-item>
      <a-form-item label="了解西二在线的渠道(可多选)">
         <br v-if="!isMobile()">
      <a-checkbox-group v-model:value="formState.access">
        <a-checkbox value="福大助手" name="type">福大助手</a-checkbox>
        <br>
        <a-checkbox value="海报" name="type">海报</a-checkbox>
        <br>
        <a-checkbox value="班导" name="type">班导</a-checkbox>
        <br>
         <a-checkbox value="辅导员推荐" name="type">辅导员推荐</a-checkbox>
        <br>
        <a-checkbox value="其他" name="type" class="others" @click="others">其他  <a-input v-model:value="othersMain" size="small"   style="position: absolute;width: 50%;margin-left: 14px;"  v-if="isothers" /></a-checkbox>

        <br>
        
        <br>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item  label="选择西二的理由(100字以内)" name="reason">
      <a-textarea v-model:value="formState.reason" placeholder="选择西二的理由" :rows="4"  maxlength="100" />
    </a-form-item>
    <a-form-item  label="自我介绍(100字以内)" name="introduction">
      <a-textarea v-model:value="formState.introduction" placeholder="自我介绍" :rows="4"  maxlength="100"/>
    </a-form-item>
     <a-form-item  label="邮箱" name="mail">
      <a-input v-model:value="formState.mail" type="text" autocomplete="off" size="small"/>
    </a-form-item>
     <a-form-item  label="手机号" name="phone">
      <a-input v-model:value="formState.phone" type="text" autocomplete="off" size="small"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="" html-type="submit" shape="round">提交</a-button>
      <div class="result">
     
         <a-modal v-model:visible="visible" title="提示" @ok="handleOk" okText="确认" cancelText="取消" class="button" :centered="false" :mask="false">
          <div class="first" v-if="!isSecond">恭喜报名成功!!! 请加入纳新Q群获取最新资讯（群号：{{group}}）</div>
          <div class="second" v-else>报名信息更新成功
    
          </div>
    </a-modal>
      </div>

    </a-form-item>
  </a-form>
  </div>
        </div>

</div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL = 'https://www.jessieback.top'
// axios.defaults.baseURL = process.env.VUE_APP_URL
import { defineComponent, reactive, ref,toRaw,onMounted,watch } from 'vue';
import{useRouter} from 'vue-router'
import qs, { stringify } from 'qs'
export default defineComponent({
  data(){
    return{

    
    }
  },
  async mounted(){
     const config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
          let date = new Date
                let time = date.getFullYear()

    let result = await axios.post('/joinus/admin/getAllQQGroup',qs.stringify({year:time}),config)
    console.log(result.data.data[0])
   this.group = result.data.data[0].groupNum

  },
  setup() {
    let isothers = ref(false)
    let othersMain = ref('')
    function others(){
      isothers.value = !isothers.value
    }
  let group = ref('')
 
    onMounted(async()=>{
      if(sessionStorage.getItem('list')){
 let list = JSON.parse(sessionStorage.getItem('list')) 
        list.forEach(item=>{
          formState.jobs.push(item.name)
         
        })
        console.log(formState.jobs)
      }
        // let list = JSON.parse(sessionStorage.getItem('list')) 
        // list.forEach(item=>{
        //   formState.jobs.push(item.name)
         
        // })
  //       const config = {
  //       headers: {
  //         'content-type': 'application/x-www-form-urlencoded'
  //       }
  //     }
  //         let date = new Date
  //               let time = date.getFullYear()

  //   let result = await axios.post('/joinus/admin/getAllQQGroup',qs.stringify({year:time}),config)
  //   console.log(result)
  //  group.value = result.data.data[0].groupNum
    })
    
    const visible = ref(false);
   var isSecond = ref(false)
    const router = useRouter()
    const formRef = ref();
    let timer =null
    const formState = reactive({
      no: '',  //学号
      name: '',
     jobs:[],
     campus:'',
     grade:'',
     profession:'',
     access:[],
     reason:'',
     introduction:'',
     mail:'',
     phone:''

    });
    watch(()=>formState.reason,(val,old)=>{
      console.log(val.length)
    })
     const handleOk = e => {
      console.log(e);
      visible.value = false;
       sessionStorage.setItem('list','')
            sessionStorage.setItem('data','')
  
      router.push('/')
    };


    let checkNo = async (_rule, value) => {
         const config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
       isSecond.value = false
       if(timer){clearTimeout(timer)}
        timer = setTimeout(() => {
          check()
        }, 1000);
     
       let check = async ()=>{
        let result = await axios.post('/joinus/exists',qs.stringify({
          no:value
      }),config
)
    if(!value){
         return Promise.reject('请输入学号');
    }
    if(result.data.status==true){
      isSecond.value = true
        return Promise.reject('该学号已报名,继续报名会覆盖上次信息');
        

    }
       }
      
    

 
    };
       
    let checkMail = async (_rule, value) => {
       
		var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!reg.test(value)){
       return Promise.reject('请输入正确的邮箱');
    }
    };

    let checkPhone = async(_rule,value)=>{
       var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
     
         if (!myreg.test(value)){
             return Promise.reject('请输入正确的手机号');
                }
                else{
                  return Promise.resolve();
                }
    }

    // let validatePass2 = async (_rule, value) => {
    //   if (value === '') {
    //     return Promise.reject('Please input the password again');
    //   } else if (value !== formState.pass) {
    //     return Promise.reject("Two inputs don't match!");
    //   } else {
    //     return Promise.resolve();
    //   }
    // };

    const rules = {
      no: [{
    
        validator: checkNo,
        trigger: 'change',
      }],
      mail: [{
        validator: checkMail,
        trigger: 'change',
      }],
      phone: [{
        validator: checkPhone,
        trigger: 'change',
      }],
    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };

    const handleFinish =async  values => {
      if(othersMain.value){
        console.log(formState.access)
        formState.access.push(othersMain.value)
      }
     
      formState.access = formState.access.toString()
      formState.reason = formState.reason.substring(0,100)
      formState.introduction = formState.introduction.substring(0,100)
      
      const config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
      console.log(toRaw(formState));
      axios.post('/joinus/apply',qs.stringify(toRaw(formState)),config).then(res=>{
          if(res.data.code==200){
            group.value = res.data.data[0].groupNum
             console.log(res)
             visible.value = true
          }
          else{
            alert('请检查信息是否按照正确格式完整填写')
          }
      })
    };

    const handleFinishFailed = errors => {
      console.log(errors)
      if(errors.errorFields[1]||errors.errorFields[0].name[0]!='no'){
      alert('请检查信息是否按照正确格式完整填写')

    
      }
      else{
         if(othersMain.value){
           console.log(formState.access)
        formState.access.push(othersMain.value)
      }
         formState.access = formState.access.toString()
      formState.reason = formState.reason.substring(0,100)
      formState.introduction = formState.introduction.substring(0,100)
      
      const config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
      console.log(toRaw(formState));
      axios.post('/joinus/apply',qs.stringify(toRaw(formState)),config).then(res=>{
          if(res.data.code==200){
            group.value = res.data.data[0].groupNum
             console.log(res)
             visible.value = true
          }
          else{
            alert('请检查信息是否按照正确格式完整填写')
          }
      })
      }
      //  formState.access = formState.access.toString()
      
      // const config = {
      //   headers: {
      //     'content-type': 'application/x-www-form-urlencoded'
      //   }
      // }
      // console.log(toRaw(formState));
      // axios.post('/joinus/apply',qs.stringify(toRaw(formState)),config).then(res=>{
      //     if(res.data.code==200){
      //       group.value = res.data.data[0].groupNum
      //        console.log(res)
      //        visible.value = true
      //     }
      //     else{
      //       alert('有必填项未填')
      //     }
      // })
  
      //  formState.access = formState.access.toString()
      
      // const config = {
      //   headers: {
      //     'content-type': 'application/x-www-form-urlencoded'
      //   }
      // }
      // console.log(toRaw(formState));
      // axios.post('/joinus/apply',qs.stringify(toRaw(formState)),config).then(res=>{
      //     if(res.data.code==200){
      //      console.log(res)
      //       group.value = res.data.data[0].groupNum
      //     visible.value = true
      //     }
      // })
      
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    const handleValidate = (...args) => {
      console.log(args);
    };
  function isMobile () {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true // 手机端
  } else {
    return false // alert('PC端')
  }
}
function back(){
  router.push('/know')
}
    return {
      othersMain,
      others,
           isothers,
           back,
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      handleValidate,
      isMobile,
      visible,
      isSecond,
      handleOk,
      group
    

    };
  },


});
</script>


<style lang="less" scoped>

.wra{
     :global(.ant-form-item-label > label){
     font-size: 14px !important;
    //  .others{
    //    display: flex;
    //  }
 }
 :global(.ant-form label){
     font-size: 14px !important;
 }
 button{
   width: 100px;
 }

    .header h4{
        background-color: #1d202e;
     height: 30px;
     line-height: 30px;
     text-align: center;
     font-size: 20px;
     color: white;

    }

    .main{
      margin-top: 10%;
      /deep/ .ant-col-offset-8{
        margin-left: 40%  ;
      
      }
    }

    /deep/ form {
       font-size: 16px !important;
       button{
         background-color: #1d202e;
       }
      
        
    }

 

  :global(.ant-btn-primary){  

         background-color: #1d202e !important;
       }

    .main{
    margin-left: 16%;
    width: 80%;
     
    }

    .mobile{
       margin-left: 100px;
    width: 50%;
    }}

    .mobileW{
     
      background-color:#fdfdfd;
     width: 100%;
     height: 100%;
    .header{
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
    }
    .main{
      margin-left: 20px;
   /deep/  .ant-col-offset-8{
        // margin-left: 40px;
        // margin: auto;
        margin-left: 11%;
      }
      :global(.ant-btn-round){
          border-radius: 50px;
        background-color: #f79a58 !important;
        border: 1px solid #f79a58;
        width: 250px;
      }
        :global(.ant-form label){
          font-size: 18px;
        }
      overflow-x: hidden;
      margin-top: 80px;
      height: 100%;
      width: 95%;

      :global(.ant-form-item-label > label){
        font-size: 20px;
      
      }
      input{
        height: 35px;
        width: 90%;
      
      }
      textarea{
        width: 90%;
      }
    
    
    }
    
    }
</style>