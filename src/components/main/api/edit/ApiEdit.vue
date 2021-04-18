<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="基础信息">
      <api-base-edit/>
    </el-tab-pane>
    <el-tab-pane label="请求参数">
      <api-request-edit/>
    </el-tab-pane>
    <el-tab-pane label="响应参数">
      <api-response-edit/>
    </el-tab-pane>
    <el-tab-pane label="提交预览">
      <api-preview/>
    </el-tab-pane>
    <el-tab-pane label="接口测试">
      <api-test/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ApiBaseEdit from './ApiBaseEdit.vue'
import ApiPreview from './ApiPreview.vue'
import ApiRequestEdit from './ApiRequestEdit.vue'
import ApiResponseEdit from './ApiResponseEdit.vue'
import ApiTest from './ApiTest.vue'

export default {
  components: { 
    ApiBaseEdit,
    ApiRequestEdit,
    ApiResponseEdit,
    ApiPreview,
    ApiTest
    },

}
</script>

<style>


    </style>