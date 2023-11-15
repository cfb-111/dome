<template>
    <div>
        <h1>about</h1>
        <div>
            <el-button>default</el-button>
            <el-button type="primary" @click="testAxios">测试axios</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </div>
    </div>
</template>

<script>
import { mobile_eLogin } from '@/api/mobile';
export default {
    setup() {

    },
    methods: {
        testAxios() {
            let data = {
                "email": "2021269215@qq.com",
                "password": "12345678"
            };
            mobile_eLogin(data).then(resp => {
                console.log(resp);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style></style>