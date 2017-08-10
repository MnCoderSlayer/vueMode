<template>
    <div id="app">
       <router-view></router-view>
    </div>
</template>

<script>
    import con from './con.vue'

    export default {
        data() {
            return {
                msg: 'Use Vue !',
                title: 'test222',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                })
            },
            appClick(call,call2) {
                this.msg = 'Vue change!!!!'
                console.log('call-----',call,call2)
            }
        },
        components: {
            con
        },
        mounted() {
            console.log('app----', this)
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
