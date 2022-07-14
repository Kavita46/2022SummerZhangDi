<!-- 我的页面 -->
<template>
  <div>
    <header>
      <div class="logo"></div>
    </header>
    <div class="main">
      <p>安全设置-找回密码</p>
      <nav>
        <ul>
          <li>
            <p>01/</p>
            <p>输入登录名</p>
          </li>
          <li id="label-2">
            <p>02/</p>
            <p>验证信息</p>
          </li>
          <li>
            <p>03/</p>
            <p>重置密码</p>
          </li>
        </ul>
      </nav>
      <div class="main1">
        <input type="text" placeholder="昵称、邮箱" /> 请输入昵称/邮箱
        <input type="text" placeholder="验证码" /> 请输入验证码
        <p>5G27</p>
        <form action="">
          <button>下一步</button>
        </form>
      </div>
      <div class="main2">
        <p>电子邮箱：<font color="red">1111***222qq.com</font></p>
        <p>验证邮件已发往您的电子邮件，请点击邮件中的链接完成验证</p>
        <form action="">
          <button><a href="../1-zh-login.html">去邮箱验证</a></button>
        </form>
      </div>
    </div>
  </div>
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

<style  scoped>
</style>

<style   scoped src='../../static/css/useMail.css'> </style>
