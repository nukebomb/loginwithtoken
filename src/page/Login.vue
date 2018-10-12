<template>
  <div class="login-page fillcontainer">
    <div class="login-container">
      <div class="manage-tip">
        <p>知识管理后台系统</p>
      </div>
      <div class="manage-pannel">
        <el-form :model="loginForm" status-icon :rules="rules" label-width="100px" color="#fff" class="login-form">
          <el-form-item label="用户名" prop="username" class="form-item-name">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-item-name">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <button type="primary" @click="submitForm(loginForm)" class=".btn submit-btn">登录</button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="blue-ball"></div>
    <div class="blue-trangle"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(loginForm) {
      this.postdata(loginForm)
    },
    postdata(data) {
      this.$http.post('/api/login').then(res => {
        localStorage.setItem('token', res)
        location.replace('/')
      })
    }
  }
}
</script>

<style>
.login-page {
  background: linear-gradient(180deg, #4f48ad, #1d185e);
  overflow: hidden;
  position: relative;
}
.manage-tip {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 200px;
  height: 200px;
  color: #fff;
  font-size: 2em;
  letter-spacing: 2px;
}
.manage-pannel {
  width: 30%;
  height: 200px;
  background: linear-gradient(
    320.84deg,
    #80c3ff -16.99%,
    #349bf7 18.92%,
    #714dd6 101.11%
  );
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 50px 20px 20px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 2px 2px 12px rgba(100, 100, 100, 0.4);
}
.submit-btn {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: linear-gradient(0.31deg, #3cac8a 0.7%, #5cceac 99.3%);
  color: #fff;
  font-size: 1.3em;
  letter-spacing: 1.1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
}
.submit-btn:hover {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
.el-form-item__label {
  color: #fff;
  letter-spacing: 2px;
}
.blue-ball {
  position: absolute;
  top: 300px;
  left: -100px;
  width: 429px;
  height: 517px;
  background-image: url("../assets/blueball.svg");
  background-repeat: no-repeat;
  background-position: 100% 0;
}
.blue-trangle {
  width: 100px;
  height: 100px;
  background-image: url("../assets/bluetrangle.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 100%;
  content: " ";
  height: 300px;
  width: 300px;
  z-index: 0;
  position: absolute;
  right: 0px;
}
</style>
