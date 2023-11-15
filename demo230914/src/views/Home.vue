<template>
  <div>
    <router-link to="/">home</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/about">about</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/user">user</router-link>
    <div>
      <h1>Home</h1>
      <el-button @click="mainStore.increment">点击</el-button>
      Store中的count：{{ mainStore.count }}
    </div>
    <br>
    <div>
      <el-button type="danger" round @click="mainStore.increment">
        点赞：{{ mainStore.count }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/counter';
export default {
  setup() {
    const mainStore = useCounterStore();
    console.log("获取到Store中的count:" + mainStore.count);
    return {
      mainStore
    }
  },
}
</script>

<style></style>