<template>
  <div id="header">
    <div class="nav-login" style="z-index: 6">
      <div class="nl-logo"></div>
      <div class="nl-login">
        <div class="login-a">
          <a href="1-zh-login.html">登录</a>
          <div class="vline"></div>
          <a href="1-zh-register.html">注册</a>
        </div>
        <input type="text" placeholder="热门搜索：小王子" />
        <button class="login-search"></button>

        <router-link to = '/userCenter/myCenter' >
        <div class="user"></div>
        </router-link>
        <a href="4-userCenter-myCenter.html"></a>
        <a href="2-index.html" class="QRcode"><div class="QRcode-img"></div></a>
        <a href="./html/3-dy-shoppingCart.html"
          ><div class="nav-shopping"></div
        ></a>
      </div>
    </div>

    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu> -->
  </div>
</template>


<script>
export default {

}
</script>


<style scoped>
#header {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

.el-menu-demo {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

.nav-login {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
}
.nl-logo {
  width: 220px;
  height: 100%;
  /* border: 1px solid black; */
  margin-left: 70px;
  background: url(../imgs/logo1.png) no-repeat center/contain;
}
.nl-login {
  width: 600px;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-a a {
  color: black;
  text-decoration: none;
}
.vline {
  display: inline-block;
  width: 0.5px;
  height: 12px;
  background-color: gray;
  margin: 0 8px;
}
.nl-login input {
  margin-left: 30px;
  width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
.login-search {
  width: 30px;
  height: 30px;
  background: url(../imgs/ss.png) no-repeat center/contain;
  border: none;
  border-bottom: 1px solid black;
}
.user {
  width: 30px;
  height: 30px;
  background: url(../imgs/grzx.png) no-repeat center/contain;
  margin-left: 20px;
}
.QRcode {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  background: url(../imgs/ewm.png) no-repeat center/contain;
  margin-left: 20px;
}

.QRcode:hover .QRcode-img {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid red;
  top: 38px;
  left: -7px;
  background: url(../imgs/smewm.png) no-repeat center/contain;
}

.QRcode:hover .QRcode-img::before {
  position: absolute;
  top: -5px;
  left: 12px;
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 5px solid red;
}

.nav-shopping {
  width: 30px;
  height: 30px;
  background: url(../imgs/gt1.png) no-repeat center/contain;
  margin-left: 20px;
}
</style>