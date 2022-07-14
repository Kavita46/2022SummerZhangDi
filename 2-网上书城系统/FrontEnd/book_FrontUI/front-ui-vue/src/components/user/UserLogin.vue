<!-- 我的页面 -->
<template>
  <div>
    <div class="background">
      <div>
        <!-- <img  v-for = 'item in imgs' :key = 'item.url'   v-lazy="item.url" width="300px" height = "300px" display = 'block' /> -->
      </div>

      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>

<!-- 放logo的好像 -->
    <div>
      <img src="" alt="" />
    </div>
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display: block; margin: 0 auto; text-align: center"
            >用户登录</span
          >
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>

        用户名<el-input v-model="user.username"></el-input>
        <br />
        密码<el-input v-model="user.password"></el-input>
        <br />
        <div id="btn_bar">
          <el-button @click="login">登录</el-button>

          <el-button @click="register">注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {

    return {
      // imgSrc: require("../"),
      imgSrc: require("../../static/img/login/bg_login.jpg"),
      user: {
        username: "",
        password: "",
      },
    }
  },
  computed: {},
  watch: {},
  methods: {
    async login() {
      console.log('点击了登录')
    }
    ,
    async register() {
      console.log('点击了注册')
    }
  },
}
</script>

<style  scoped>
</style>
