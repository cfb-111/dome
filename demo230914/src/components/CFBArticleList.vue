<template>
  <div>
    <br>
    <h1 align="center">{{ title }}</h1>
    <br>
    <div v-for="item in articleList" :key="item.id" @click="getArticleId(item.id)" style="padding-top: 15px;">
      <div style="margin-bottom: 5px;">
        <h4>{{ item.title }}</h4>
      </div>
      <div>
        
        作者名：{{ item.userName }}
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
import { reactive, ref, onBeforeUpdate, defineEmits } from "vue";
const emit = defineEmits(['c-click']);
const props = defineProps({
  'articleList': Array,
  'title': String,
});

const title = ref("");
const articleList = ref([]);

onBeforeUpdate(() => {
  title.value = props.title;
  let aList=props.articleList
  for (var i = 0; i < aList.length; i++) {
    aList[i].createTime=aList[i].createTime.split('.')[0].replace('T', " ")
  }
  articleList.value = aList;
});

function getArticleId(id) {
  emit('c-click', id);
}
</script>

<style scoped></style>