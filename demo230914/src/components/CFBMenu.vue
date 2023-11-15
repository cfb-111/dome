<template>
    <div>
        <el-row>
            <el-col :span="8" v-for="item in menuList" :key="item.menuId" @click="jump(item.menuUrl)">
                {{ item.menuName }}
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const menuList = ref([
    {
        menuId: 1,
        menuName: '首页',
        menuUrl: '/'
    },
    {
        menuId: 2,
        menuName: '首页',
    },
    {
        menuId: 3,
        menuName: '我的',
        menuUrl: '/user'
    }
]);

function jump(url){
    router.push(url);
}

</script>

<style scoped>
/* .menuItem{
    text-align: center;
    line-height: 100%;
} */
</style>