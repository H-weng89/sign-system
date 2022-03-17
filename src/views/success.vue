<template>
  <a-result
    status="success"
    title="恭喜你成功报名！"
    
  >
    <template #extra>
      <a-button key="console" type="primary" @click="back">回到首页</a-button>
    
    </template>
  </a-result>
</template>


<script>
export default {
    methods:{
        back(){
            this.$router.push('/')
        }
    }
}
</script>