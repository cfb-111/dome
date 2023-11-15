<template>
  <div class="box">
    <div class="image-preview">
      <el-image :src="url" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="4" fit="cover"
        style="width: 100px; height: 100px; border-radius: 111px" />
    </div>
    <div>
      <el-form ref="formEl" :model="loginForm" class="demo-dynamic">
        <el-form-item prop="email" :rules="[
          {
            required: true,
            message: '请输入你的邮箱',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: '请输入格式正确的邮箱',
            trigger: ['blur', 'change'],
          },
        ]">
          <el-input v-model="loginForm.email" placeholder="请输入你的邮箱" :suffix-icon="Message" />
        </el-form-item>

        <el-form-item prop="password" :rules="{
          required: true,
          message: '密码不能为空',
          trigger: 'blur',
        }">
          <el-input v-model="loginForm.password" placeholder="请输入你的密码" :suffix-icon="Lock" />
        </el-form-item>

        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm()" style="width: 100%">用户登录</el-button>
        </el-form-item> -->

        <el-form-item>
          <div style="width: 100%; display: flex">
            <el-button type="primary" @click="submitForm()" style="width: 100%">用户登录</el-button>
            <el-button type="warning" @click="toUrl('register')" style="width: 100%">用户注册</el-button>
            
          </div>
        </el-form-item>

        <br /><br /><br />

        <!-- <el-form-item>
          <el-button @click="toUrl('')" style="width: 100%">返回首页</el-button>
        </el-form-item> -->

      </el-form>
    </div>
  </div>
</template>
  
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/store/user';
import { Message, Lock } from "@element-plus/icons-vue";
import { mobile_eLogin } from '@/api/mobile';
const router = useRouter();
const userStore = useUserStore();
const url = "https://img95.699pic.com/xsj/1r/f8/us.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast";
const formEl = ref(null);
const loginForm = reactive({
  email: "cfb0315@qq.com",
  password: "12345678",
});



const submitForm = () => {
  if (!formEl.value) return;
  formEl.value.validate((valid) => {
    if (valid) {
      let data = loginForm;
      mobile_eLogin(data).then(resp => {
        if (resp.success) {
          userStore.setUserInfo(resp.data.userinfo);
          alert(resp.msg);
          router.push("/");
        } else {
          alert(resp.msg);
        }
      }).catch(err => {
        console.log(err);
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

const toUrl = (url) => {
  router.push({ path: `/${url}` });
};

</script>

<style scoped>
.el-form-item__content {
  justify-content: center;
}

.box {
  width: 95vw;
  height: 100vh;
  margin-left: 2.5vw;
}

.image-preview {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-dynamic {
  height: 50%;
}
</style>
  










<!-- <template>
  <div>
    <div class="box">
      <div class="title">Welcome</div>
      <div class="formBox">
        <div class="formItem">
          <div>登录</div>
          <div>
            <input type="text">
          </div>
        </div>

        <div class="formItem">
          <div>密码</div>
          <div>
            <input type="password">
          </div>
        </div>
        
        <div class="formItem itemBtn">
          <button type="button" class="loginBtn">立即登录</button>
        </div>
        
        <div class="formOther">
          <div>忘记密码?</div>
          <div style="margin-left:5px;margin-right:5px;">|</div>
          <div>立即注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #6BC9B7, #3778CA);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title{
  color: #fff;
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
}

.formBox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formItem{
  margin-bottom: 20px;
  width: 75%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 111px;
  color: #fff;
}

.formItem input[type='text'],
.formItem input[type='password']{
  width: 150%;
  margin-left: -50px;
  background-color: transparent;
  border: none;
  outline: none;
}

.itemBtn{
  border: none;
}

.loginBtn{
  background: #56B5F9;
  width: 100%;
  height: 100%;
  border-radius: 111px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px; 
  font-weight: 400;
}

.formOther{
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
}

</style> -->