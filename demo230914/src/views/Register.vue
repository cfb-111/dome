<template>
  <div class="box">
    <div class="image-preview">
      <el-image :src="url" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="4" fit="cover"
        style="width: 100px; height: 100px; border-radius: 111px" />
    </div>
    <div>
      <el-form ref="formEl" :model="regForm" class="demo-dynamic">
        <el-form-item prop="userName" :rules="[
          {
            required: true,
            message: '请输入你的姓名',
            trigger: 'blur',
          },
        ]">
          <el-input v-model="regForm.userName" placeholder="请输入你的姓名" autofocus :suffix-icon="User" />
        </el-form-item>
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
          <el-input v-model="regForm.email" placeholder="请输入你的邮箱" :suffix-icon="Message" />
        </el-form-item>
        <el-form-item prop="password" :rules="{
          required: true,
          message: '密码不能为空',
          trigger: 'blur',
        }">
          <el-input v-model="regForm.password" placeholder="请输入你的密码" show-password :suffix-icon="Lock" />
        </el-form-item>
        <el-form-item prop="repassword" :rules="{
          required: true,
          message: '确认密码不能为空',
          trigger: 'blur',
        }">
          <el-input v-model="regForm.repassword" placeholder="请确认你的密码" show-password :suffix-icon="Lock" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" style="width: 100%">用户注册</el-button>
        </el-form-item>

        <el-form-item>
          <el-button @click="toUrl('login')" style="width: 100%">已有账号</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { User, Message, Lock } from "@element-plus/icons-vue";
import { mobile_eRegister } from "@/api/mobile";
const router = useRouter();
const url = "https://img95.699pic.com/xsj/1r/f8/us.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast";
const formEl = ref(null);
const regForm = reactive({
  email: "",
  password: "",
  userName: "",
  repassword: "",
});

const submitForm = () => {
  if (!formEl.value) return;
  formEl.value.validate((valid) => {
    if (valid) {
      let data = regForm;
      mobile_eRegister(data).then((resp) => {
        if (resp.success) {
          alert(resp.msg);
          router.push("/login");
        } else {
          alert(resp.msg);
        }
      }).catch((err) => {
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
  height: 40%;
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







<!-- <template>
  <div class="box">
    <div class="box_card">
      <div class="title">REGESTER</div>
      <div>
        <div class="formBox">
          <div class="formItem">
            <div>用户姓名：</div>
            <div>
              <input type="text" class="input_ctrl" />
            </div>
          </div>
          <div class="formItem">
            <div>用户密码：</div>
            <div>
              <input type="text" class="input_ctrl" />
            </div>
          </div>
          <div class="formItem">
            <div>确认密码：</div>
            <div>
              <input type="text" class="input_ctrl" />
            </div>
          </div>
          <div class="formItem">
            <div>用户类型：</div>
            <div>
              <select name="" id="">
                <option value="">请选择</option>
              </select>
            </div>
          </div>
          <div class="formItem">
            <div>用户性别：</div>
            <div>
              <input type="radio" name="sex" />男
              <input type="radio" name="sex" />女
            </div>
          </div>
          <div class="formItem">
            <div>出生日期：</div>
            <div>
              <input type="date" class="input_ctrl" />
            </div>
          </div>
          <div class="formItem">
            <div>兴趣爱好：</div>
            <div>
              <input type="checkbox" name="hobby" />阅读
              <input type="checkbox" name="hobby" />音乐
              <input type="checkbox" name="hobby" />运动
            </div>
          </div>
          <div class="formItem">
            <div>电子邮件：</div>
            <div>
              <input type="email" class="input_ctrl" />
            </div>
          </div>
          <div class="formItem">
            <div>自我介绍：</div>
            <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>

        <div class="btns">
          <div>
            <button type="button" class="btn">提交</button>
          </div>
          <div>
            <button type="button" class="btn">重置</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
        type: "",
        sex: "",
        birthday: "",
        hobby: "",
        email: "",
        introduction: "",
      },
    };
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: url("https://img.tukuppt.com/bg_grid/00/17/02/tHTUtq8vhC.jpg!/fh/350");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.box_card {
  width: 35%;
  height: 85%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.24),
    0 12px 16px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formBox{
  width: 100%;
}

.formItem {
  margin-bottom: 5px;
  display: flex;
}

.formItem input[type="text"],
.formItem input[type="email"],
.formItem input[type="date"],
.formItem input[type="text"],
.formItem select,
.formItem textarea {
  background: #c4b6cd;
  opacity: 0.8;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #fff;
}

.formItem input[type="text"],
.formItem input[type="email"],
.formItem input[type="date"],
.formItem input[type="text"],
.formItem select{
  width: 150px;
  height: 30px;
}

.formItem textarea {
  width: 185px;
}


.btns{
  display: flex;
  justify-content: center;
}

.btn {
  background: #5a79b8;
  opacity: 0.9;
  border: none;
  outline: none;
  color: #fff;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
}
</style> -->