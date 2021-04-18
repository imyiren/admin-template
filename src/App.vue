<template>
  <el-container class="main-container">
    <el-aside width="240px">
      <my-aside/>
    </el-aside>
    <el-container>
      <el-header>
        <my-header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyAside from './components/layout/MyAside.vue';
import MyHeader from './components/layout/MyHeader.vue';

export default {
  name: "App",
  components: {
    MyAside,
    MyHeader
  }
};
</script>

<style>
.el-header,
.el-footer {
  line-height: 45px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.main-container {
  min-height: 600px;
  min-width: 1000px;
  height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-header {
  background-color: #eee;
  height: 45px!important;
}
</style>
