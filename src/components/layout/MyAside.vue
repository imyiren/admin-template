<template>
  <a href="/" class="header-link-a">
    <div class="aside-header">
      <img src="/logo.png" />
      <span> | Gateway</span>
    </div>
  </a>
  <el-menu router default-active="1" class="el-menu-vertical-my">
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-s-unfold"></i>
        <span>路由配置</span>
      </template>
      <el-menu-item index="/api/create">
        新建接口
      </el-menu-item>
      <el-menu-item index="/api/list">接口列表</el-menu-item>
      <el-menu-item index="/api/这是一个UUID">详情信息</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span>导航三</span>
    </el-menu-item>
    <el-menu-item index="4" disabled>
      <i class="el-icon-document"></i>
      <span>导航四</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span>导航五</span>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu-vertical-my {
  text-align: left;
  height: cal(100% - 100px);
}

.aside-header {
  height: 100px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  width: 180px;
}

.aside-header img {
  height: 80px;
  width: 80px;
}
.aside-header span {
  font-size: 20px;
  line-height: 80px;
  font-weight: 800;
}

.header-link-a {
  display: block;
  line-height: 80px;
  text-decoration: none;
  color: #6743a7;
  border-right: solid 1px #e6e6e6;
}
/* 不让文字被选中 */
.el-menu a::selection,
.header-link-a span,
.header-link-a img,
.el-menu span::selection {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
