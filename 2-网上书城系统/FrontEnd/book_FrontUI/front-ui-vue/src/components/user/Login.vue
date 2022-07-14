<!-- 我的页面 -->
<template>
<main>
      <div class="content">
        <div class="logo">
          <img src="../../static/img/login/logo1.png" alt="logo" />
        </div>
        <form action="2-index.html">
          <input
            type="text"
            placeholder="公共场所不建议自动登录，以防账号丢失"
            disabled
          />
          <input type="text" placeholder="昵称/邮箱/用户名" />
          <input type="password" placeholder="密码" />
          <input type="submit" value="登录" />
          <div class="bottom">
            <a href="1-zh-register.html"><span>免费注册</span></a>
            <a href="./html/1-kgl-修改密码.html"><span>忘记密码？</span></a>
          </div>
          <!-- <input type="text" placeholder="昵称/邮箱/用户名"> -->
        </form>
      </div>

      </main>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>


<style  rel="stylesheet/scss" lang="scss" scoped src='../../static/scss/login.scss'></style>
