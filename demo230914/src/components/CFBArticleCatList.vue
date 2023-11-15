<template>
    <div>
        <el-dialog v-model="showInNav" :title="title" width="90%" :before-close="handleClose">
            <div>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-button style="width: 100%;" type="danger" plain @click="getCatId(0)">全 部</el-button>
                    </el-col>
                    <el-col :span="8" v-for="item in articleCatList" :key="item.id"  style="margin-bottom: 20px;">
                        <el-button style="width: 100%;" type="danger" plain @click="getCatId(item.id)">{{ item.catName }}</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { reactive, ref, onBeforeUpdate, defineEmits } from "vue";
const emit = defineEmits(['c-click']);
const props = defineProps({
    'articleCatList': Array,
    'title': String,
    'showInNav': Boolean
});

const title = ref("");
const articleCatList = ref([]);
const showInNav = ref(false);

onBeforeUpdate(() => {
    title.value = props.title;
    showInNav.value = props.showInNav;
    articleCatList.value = props.articleCatList;
});

function getCatId(id){
    showInNav.value = !showInNav.value;
    emit('c-click', id,showInNav.value);
}

</script>

<style scoped></style>