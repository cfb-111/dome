<template>
  <div>
    <div class="menu-header">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <p v-for="item in articleCatList" :key="item" class="scrollbar-demo-item" @click="loadArticle(item.id)">
            {{ item.catName }}
          </p>
        </div>
      </el-scrollbar>
      <div class="moreBtn">
        <el-button @click="showMore">
          <el-icon>
            <Grid />
          </el-icon>
        </el-button>
      </div>
    </div>

    <div class="content-main">
      <CFBArticleList :articleList="articleList" title="所有文章" @c-click="getArticleId" />
    </div>

    <div class="menu-footer">
      <CFBMenu/>
    </div>


    <div>
      <CFBArticleCatList :articleCatList="articleCatList" title="所有文章分类" :showInNav="showInNav"
        @c-click="getArticleCatId" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { articleCat_all } from "@/api/articleCat";
import { article_all, article_getArticlesByCateId } from "@/api/article";
import { userinfo_one } from "@/api/user";
import CFBArticleList from "@/components/CFBArticleList.vue";
import CFBArticleCatList from "@/components/CFBArticleCatList.vue";
import CFBMenu from "@/components/CFBMenu.vue";


const router = useRouter();
const articleCatList = ref([]);
const articleList = ref([]);
const showInNav = ref(false);

onMounted(() => {
  loadArticleCat();
  loadArticle();
});

async function loadArticle(articleId) {
  if (articleId === undefined) {
    await article_all().then(resp => {
      if (resp.success) {
        articleList.value = resp.data.articles;
        loadArticlePro(articleList.value);
      }
    });
  } else {
    await article_getArticlesByCateId(articleId).then(resp => {
      if (resp.success) {
        articleList.value = resp.data.articles;
        loadArticlePro(articleList.value);
      }
    });
  }

}

async function loadArticleCat() {
  await articleCat_all().then(resp => {
    if (resp.success) {
      articleCatList.value = resp.data.articleCats;
    }
  }).catch(err => {
    console.log(err);
  });
}

async function loadArticlePro(list) {
  for (let item of list) {
    await userinfo_one(item.userinfoId).then(resp => {
      if (resp.success) {
        item.userName = resp.data.userinfo.userName;
      }
    });
  }
}

function showMore() {
  showInNav.value = !showInNav.value;
}

function getArticleId(id) {
  router.push(`/articleDetail?id=${id}`);
}

function getArticleCatId(id, flag) {
  if (id == 0) {
    id = undefined;
  }
  loadArticle(id);
  showInNav.value = flag;
}

</script>

<style scoped>
.menu-header {
  width: 100vw;
  height: 7vh;
  display: flex;
}

.content-main{
  width: 100vw;
  height: 88vh;
  overflow-y: auto;
}

.menu-footer{
  width: 100vw;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
}

.moreBtn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
}

.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>