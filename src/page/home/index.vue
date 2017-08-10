<template>
    <div class="example">
        <el-button @click="bt1">内容一</el-button>
        <el-button @click="bt2">内容二</el-button>
        <router-view></router-view>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                msg: '这是菜单'
            }
        },
        methods:{
            bt1(){
                this.$store.commit('CONTENT_CHANGE','内容一')
                this.$router.push('/home/content1')
            },
            bt2(){

                this.$router.push('/home/content2')
            }
        }
    }
</script>