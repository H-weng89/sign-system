<template>
    <div id="chart"> 
        <div id="chart1"></div>
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart4"></div>
        <div id="chart5"></div>
        
    </div>
</template>

<script>
import * as echarts from 'echarts'
     
          
export default {
  

    mounted() {
   var myChart = echarts.init(document.getElementById('chart1'));
        let option1 = {
  title: {
    text: '学习方向',
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'A'
        },
        {
          value: 234,
          name: 'B'
        },
        {
          value: 1548,
          name: 'C'
        }
      ],
      radius: ['40%', '70%']
    }
  ]
};
        myChart.setOption(option1)
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
#chart1{
    width: 200px;
    height: 200px;
}

</style>