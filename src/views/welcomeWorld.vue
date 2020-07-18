<template>
  <div class="hello">
      <commonTab :isShow="true"  @tabEvent='changeTab' ></commonTab>
      欢迎进入赵广雪个人系统哈哈
      <el-button  type="primary" plain @click='goBack'>返回</el-button>
       <el-card>

       {{message | capitalize  }}
      <el-table :data="tableDate" stripe size="small">
        <el-table-column prop="xh" label="序号" width="100" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="handleareaName" label="办案区名称" width="120"></el-table-column>
        <el-table-column prop="phone" label="电话号码" width="150"></el-table-column>
        <el-table-column prop="appointmentTime" label="预约时间" width="150"></el-table-column>
        <el-table-column prop="personNum" label="预约人数量" width="150"></el-table-column>
        <el-table-column prop="howLong" label="预约使用时长"></el-table-column>
        <el-table-column prop="interrogateNum" label="民警使用数" width="150" align="center"> </el-table-column>
         <!--   -->
      </el-table>
      <!-- 分页 -->
     <div class="pagination-wrap">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, sizes, prev, pager, next, jumper"
              :total="paginationData.total"
        ></el-pagination>
        </div>
    </el-card>   
  </div>

  
</template>
<script>
// import {handleareaNum} from '../utils.js'; 
import * as utils from '../utils.js';
import commonTab from '@/components/commonTab';
console.log('$route.params.id');
export default {
  name: 'WelcomeWorld',
  components:{
    commonTab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App-----雪广赵',
      message:'2020不一样的高考',
      tableDate:[],
       paginationData: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      // activeName:'second',
    }
  },
  filters: {
    capitalize(value){
         console.log('value------',value);
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)+"88888"
    },
  },
  methods: {
   
    changeTab (data){
             console.log('data---------',data); // tabEvent直接接收子组件传递过来的数值
    },
    goBack(){
        this.$router.push('/')
    },
     handleSizeChange(num) {
      this.paginationData.pageSize = num;
      this.getData();
    },
        handleCurrentChange(num) {
      this.paginationData.currentPage = num;
      this.getData();
    },
     async getData() {
       let handleareaNum = utils.handleareaNum;
       this.$http
            .post(`${utils.requestUrl}/appointment/listAppointmentPgListPage`, {
                currentPage: this.paginationData.currentPage,
                 pd: {
                   name: "",
                   handleareaNum, 
                   roleCode: "all"
                  },        
                 handleareaNum,
                name: "",
                roleCode: "all",
                showCount: this.paginationData.pageSize,
            })
            .then(res => {
              this.tableDate = res.data.data.list;
              //page
               this.paginationData.total = res.data.data.page.totalResult;
            
            });
    },
  },
  computed: {
    
  },
  mounted() {
     this.getData();
     this.changeTab();
       console.log('$route.params.id',this.$route);
  }
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
.filter-bar::v-deep {
  margin-bottom: 20px;
  .el-card__body {
    padding: 10px 20px 20px 20px;
  }
}
.el-form-item {
  margin-bottom: 0;
}
.btn {
  display: inline-block;
  margin-right: 15px;
  font-size: 18px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
}
.btn:nth-child(1) {
  color: #409eff;
}
.btn:nth-child(2) {
  color: #f56c6c;
}

.pagination-wrap {
  padding: 20px 0 0 0;
  text-align: right;
}
</style>
