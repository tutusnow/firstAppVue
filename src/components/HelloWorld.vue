<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-show='togdleH2'>Essential Links</h2>
    <el-button type="success" @click='togdle' >更改store中的值</el-button>
    <el-button  type="primary" plain @click='loginEvent'>登录系统首页</el-button>
  </div>
</template>
<script>
import * as utils from '../utils.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App-----雪广赵',
      pid :'7788'
    }
  },
  methods: {
    togdle(){
      this.$store.commit("toggleSiderBar");  //执行store中的mutation函数
      console.log('-----85--',this.$store.state.common.isCollapse);
    },
    loginEvent(){
          this.$http
            .post(`${utils.securityCenter}/api/login`, {
              username:'789456',
              password: '670b14728ad9902aecba32e22fa4f6bd',
              sid:"8e503d6f-5a4c-4601-a599-7c07fb752f86",
            })
            .then(res => {
              // localStorage.userName = res.data.data.userName;
              // localStorage.userId = res.data.data.userId;
              localStorage.token = res.data.data.token;
              this.$router.push(`/welcome:${this.pid}`)
            });
    }
  },
  computed: {
     togdleH2(){  //监听store中isCollapse得变化
     return  this.$store.state.common.isCollapse;
    }
  },
  mounted() {
  

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
