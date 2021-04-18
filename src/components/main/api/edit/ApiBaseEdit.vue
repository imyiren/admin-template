<template>
  <el-form ref="form" :model="form" label-width="100px" style="width: 600px" :disabled="false">
    <el-form-item label="所属应用：">
      <el-select v-model="form.application" placeholder="请选择所属应用" style="width: 500px">
        <el-option label="应用1-结算中心" value="settle-center"></el-option>
        <el-option label="应用2-寻源中心" value="sourcing-center"></el-option>
        <el-option label="应用3-商品中心" value="item-center"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="接口类型：">
      <el-radio-group v-model="form.apiType">
        <el-radio label="HTTP"></el-radio>
        <el-radio label="Dubbo"></el-radio>
        <el-radio label="gRPC"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="接口名称：">
      <el-input 
      v-model="form.apiName"
      placeholder="请输入接口名称"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="请求地址">
      <el-input 
      v-model="form.apiPath"
      placeholder="请输入请求地址，如：/user/login"
      >
          <template #prepend>{{ data.applicationPath }}</template>
      </el-input>
    </el-form-item>
    <el-form-item label="接口描述：">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 6 }"
        placeholder="请输入描述信息"
        v-model="form.apiDesc"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="调用权限">
      <el-checkbox-group v-model="form.rules">
        <el-checkbox label="ACL" name="acl"></el-checkbox>
        <el-checkbox label="登录" name="login"></el-checkbox>
        <el-checkbox label="允许跨域" name="cors"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="负载策略">
      <el-radio-group v-model="form.loadBalance">
        <el-radio label="轮询"></el-radio>
        <el-radio label="随机"></el-radio>
        <el-radio label="权重"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        apiName: "",
        apiPath: "",
        apiDesc: "",
        apiType: "",
        application: "",
        rules: [],
        loadBalance: ""
      },
      data: {
        applicationPath: "/api"
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
  .form-width {
      width: 600px;
  }
</style>
