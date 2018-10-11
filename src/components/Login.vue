<template>
  <div class="login-page fillcontainer">
    <div class="login-container">
      <div class="manage-tip">
        <p>知识管理后台系统</p>
      </div>
      <el-form :model="loginForm" status-icon :rules="rules" label-width="100px" class="login-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginForm)" class="submit-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(loginForm) {
      this.postdata(loginForm)
    },
    postdata(data) {
      this.$http.post('/api/login').then(res => {
        localStorage.setItem('token', res)
        location.replace('/')
      });
    }
  }
};
</script>

<style>
</style>
