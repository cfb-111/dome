<template>
  <div>
    <h1>{{ title }}</h1>
    <br>
    <div v-for="item in articleList" :key="item.id" @click="getArticleId(item.id)">
      <div>
        <h5>{{ item.title }}</h5>
      </div>
      <div>
        发表时间：{{ item.createTime }}
      </div>
      <br>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '@/store/user';
import CFBMenu from "@/components/CFBMenu.vue";
import { useRouter } from 'vue-router';

import { article_getArticlesByUserId } from "@/api/article";

const userStore = useUserStore();
const router = useRouter();

const user = ref(userStore.getUserInfo);
const title = ref("我的文章");
const articleList = ref([]);

loadArticle();

function loadArticle(){
  article_getArticlesByUserId(user.value.id).then(resp=>{
    articleList.value = resp.data.articles;
  }).catch(err=>{
    console.log(err);
  })
}

function getArticleId(id) {
  router.push(`/articleDetail?id=${id}`);
}

</script>

<style scoped></style>