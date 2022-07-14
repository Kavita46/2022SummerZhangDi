<!-- 我的页面 -->
<template>
  <div>
    <body>
      <header>
        <div class="logo"></div>
      </header>
      <div class="main">
        <p>安全设置-找回密码</p>
        <nav>
          <ul>
            <li id="label-1">
              <p>01/</p>
              <p>输入登录名</p>
            </li>
            <li>
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
          <input type="text" placeholder="验证码" />
          <p>请输入验证码</p>
          <p>
            <img src="../../assets/code.jpg" alt="" />
          </p>

          <router-link
            to="/user/forget/useMail"
            tag="button"
            replace
            active-class="laozhang"
            >验证邮箱</router-link
          >

          <!-- <form action="./1-kgl-邮箱.html">
                <button>
                    <router-link>

                    </router-link>
                    
                    </button>


            </form> -->
        </div>
      </div>
    </body>
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
* {
  margin: 0;
  padding: 0;
}
.logo {
  /* border: 1px solid red; */
  width: 173px;
  height: 60px;
  /* background-image: url(''); */
  background-repeat: no-repeat;
  background-size: 40% 40%;
  background-position: 50% 50%;
}
.main {
  /* border: 1px solid red; */
  width: 60%;
  height: 500px;
  margin: 0 auto;
  position: relative;
}
.main > p {
  font-size: 10px;
}
nav {
  /* border: 1px solid red; */
  width: 100%;
  height: 35px;
  border-bottom: 2px solid gray;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}

#label-1 {
  border-bottom: 2px solid black;
}
nav li {
  list-style: none;
  height: 20px;
  float: left;
  display: flex;
}
nav li p:nth-child(2) {
  font-size: 10px;
  /* color: red; */
  margin-top: 7px;
}
.main1 {
  /* border: 1px solid red; */
  width: 60%;
  height: 300px;
  margin: 0 auto;
  font-size: 10px;
  position: relative;
}
.main1 input {
  width: 140px;
  height: 20px;
  font-size: 8px;
  margin-top: 20px;
  border-color: rgb(185, 173, 173);
}
.main1 input:nth-child(1) {
  margin-top: 40px;
}
.main1 p {
  /* border: 1px solid red; */
  width: 50px;
  height: 20px;
  font-size: 18px;
}
.main1 p:nth-child(3) {
  width: 100px;
  font-size: 10px;
  position: absolute;
  top: 88px;
  left: 149px;
}
.main1 input:nth-child(2) {
  display: block;
}
button {
  /* border: 1px solid red; */
  width: 80px;
  height: 30px;
  margin-top: 15px;
  color: white;
  font-size: 12px;
}
</style>
