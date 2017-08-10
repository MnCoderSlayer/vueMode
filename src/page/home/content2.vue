<template>
    <div class="example">
        <el-button @click="bt">
            改变状态
        </el-button>
        {{ msg }}</div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '这是内容2222'
            }
        },
        methods:{
            bt(){
                this.$store.commit('CONTENT_CHANGE','内容22222222')
            }
        }
    }
</script>