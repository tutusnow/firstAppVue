<template>
  <div class="hello">
    <div v-if='isShow'>
        <el-tabs v-model='activeName' @tab-click="handleClick">
               <el-tab-pane   v-for ='item in tabObject' :label="item.lable"  :key = "item.key" :name="item.name">{{item.content}}</el-tab-pane>
        </el-tabs>
     </div> 
  </div>
</template>
<script>
import * as utils from '../utils.js'
export default {
  name: 'commonTab',
  props:['isShow'],//从父组件中传过来
  data () {
    return {
        tabObject :[
           {lable:'用户管理1',name :'first',content:'这是一个管理用户管理页面应用',key:1},
           {lable :'配置管理2',name:'second',content :'这是一个关于配置管理的页面应用',key:2},
           {lable:'角色管理3',name :'thirld',content :'这是一个关于角色管理的页面应用',key:3},
           {lable:'设备管理4',name:'fourth',content :'这是一个关于设备管理的页面应用',key:4},
        ],
        activeName:'second',
    }
  },
  methods: {
        handleClick (tab, event){
          console.log('tab---',tab);
            this.$emit("tabEvent", tab.name);  //激发 父组件tabEvent方法，向父组件传值
          }
  },
  computed: {
     
  },
  mounted() {
        console.log('6666666',this.isShow);//接受父组件传过来的 isShow字段
        
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
