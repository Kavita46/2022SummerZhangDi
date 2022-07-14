<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: { Header, Footer },

  data() {
    return {

    }
  },

  mounted() {

  },

  watch: {


  },
  methods: {

  },

}

</script>
<style lang="scss">
html,
body,
.el-container {
  margin: 0px;
  padding: 0px;
  // height: 100%;
}

#app {
  margin: 0px;
  padding: 0px;
  height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  // position: fixed;
  position: relative;
  width: 100%;
  height: 80px;
}

.el-footer {
  height: 60px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

Footer {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#middle {
  height: 700px;
}

.el-aside {
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 60px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  height: 100%;
  position: absolute;
  left: 180px;
  top: 80px;
  right: 0;
  bottom: 60px;
  overflow-y: scroll;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
