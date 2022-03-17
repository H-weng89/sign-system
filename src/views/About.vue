<template>


<div class="btn">
  <div class="add">
    <span>添加成员</span>
    <img src="" alt="">
  </div>
  <div class="excel">导出
  </div>

</div>
  <a-table :columns="columns" :data-source="data" @change="onChange" />

</template>
<script>
import { defineComponent } from 'vue';
const columns = [
  {
  title: '序号',
  dataIndex: 'number',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.num - b.num,
},
{
  title: '提交时间',
  dataIndex: 'time',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.time - b.time,
},
{
  title: '学号',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},

{
  title: '姓名  ',
  dataIndex: 'name',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
  sortDirections: ['descend'],
}, 
{
  title: '方向',
  dataIndex: 'age',
  filters: [{
    text: '前端',
    value: '前端',
  }, {
    text: 'java',
    value: 'java',
  }],
  defaultSortOrder: 'descend',
 
},
{
  title: '校区',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: '邮箱',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: '手机',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
{
  title: '自我介绍',
  dataIndex: 'age',
  width:'350px',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
},
  ];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];
export default defineComponent({
 
  setup() {
    const onChange = (pagination, filters, sorter) => {
      console.log('params', pagination, filters, sorter);
    };
     for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

    return {
      data,
      columns,
      onChange,
    };
  },

});
</script>

<style lang="less" scoped>

.btn{
  display: flex;
  height: 50px;
  width: 300px;
  line-height: 50px;
   margin-left: 75%;
   font-size: 16px;


.wra{
  width: 100%;
  height: 100%;
}
  

.add{
  flex: 2;

}

.excel{
  flex: 1;
}
}

  
</style>