<template>
  <div>
    <div class="box">
      <div class="infoBox">
        <div class="infoImg">
          <img src="https://img2.baidu.com/it/u=3768020870,4073068210&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="" />
        </div>
        <div class="userName">{{ user.userName }}</div>
        <div class="userLevel">{{ user.userType }}</div>
      </div>

      <div class="infoBox2">
        <div class="info2Item">
          <div class="infoNumber">{{ user.id }}</div>
          <div>我的文章</div>
        </div>
        <div class="info2Item">
          <div class="infoNumber">{{ user.binding }}</div>
          <div>粉丝量</div>
        </div>
        <div class="info2Item">
          <div class="infoNumber">{{ user.state }}元</div>
          <div>账户余额</div>
        </div>
      </div>

      <div class="infoBox3">
        <el-collapse>
          <el-collapse-item @click="toMyArticle()">
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>我的文章
            </template>
          </el-collapse-item>
          <el-collapse-item>
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>个人中心
            </template>
          </el-collapse-item>
          <el-collapse-item>
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>粉丝
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div class="menu-footer">
      <CFBMenu/>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store/user';
import CFBMenu from "@/components/CFBMenu.vue";
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const user = ref({});
user.value = userStore.getUserInfo;

function toMyArticle(){
  router.push("/user-article");
}

</script>

<style scoped>
.box {
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.infoBox {
  margin-top: 20px;
  width: 90%;
  height: 20%;
  background-color: #62a8ea;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infoImg {
  width: 50px;
  height: 50px;
  border-radius: 111px;
  margin-bottom: 10px;
}

.infoImg img {
  width: 100%;
  height: 100%;
  border-radius: 111px;
}

.userLevel {
  color: rgb(208, 204, 204);
  font-size: 12px;
}

.infoBox2 {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.info2Item {
  text-align: center;
}

.infoNumber {
  color: #57c7d4;
}

.infoBox3 {
  margin-top: 10px;
  width: 90%;
}

.menu-footer{
  width: 100vw;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
}
</style>



<!-- <template>
  <div>
    <div>
      <div>{{ rawHtml }}</div>
      <div v-html="rawHtml"></div>
      <div v-text="rawHtml"></div>
    </div>
    <img :src="picList[picIndex]" alt="" width="300" height="300">
    <br>
    <button @click="changePic">切换图片</button>
  </div>
</template>

<script>
export default {
  setup() {

  },
  data() {
    return {
      rawHtml: "<h2>cnm cjl</h2>",
      picList: [
        'https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg',
        'https://ts1.cn.mm.bing.net/th/id/R-C.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0',
        'https://ts1.cn.mm.bing.net/th/id/R-C.66d7b796377883a92aad65b283ef1f84?rik=sQ%2fKoYAcr%2bOwsw&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140305%2f1-140305131415.jpg&ehk=Hxl%2fQ9pbEiuuybrGWTEPJOhvrFK9C3vyCcWicooXfNE%3d&risl=&pid=ImgRaw&r=0'
      ],
      picIndex: 0
    }
  },
  methods: {
    changePic() {
      if (this.picIndex == this.picList.length - 1) {
        this.picIndex = 0;
      } else {
        this.picIndex++;
      }
    }
  }
}
</script>

<style></style> -->