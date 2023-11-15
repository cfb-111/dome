<template>
  <div>
    <h3>{{ article.title }}</h3>
    <br>
    <p>{{ article.content }}</p>
    <br>
    发表时间：{{ article.createTime }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { article_one } from "@/api/article";

const { query } = useRoute();

const article = ref({});
let id = query.id;

loadArticle();

function loadArticle(){
  article_one(id).then(resp=>{
    article.value = resp.data.article;
  }).catch(err=>{
    console.log(err);
  });
}


</script>

<style scoped></style>