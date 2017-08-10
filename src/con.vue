<template>
    <div>张文涛66 {{msgCon}}
        <button @click="conCli">click</button>
    </div>

</template>
<script>
    export default {
        data(){
           return {
               conMsg:"con vue"
           }
        },
        props:{
            msgCon:String
        },
        methods:{
            conCli(){
               this.$emit('conClick',this.conMsg,'kkkkk')
            }
        },
        mounted(){
           console.log('con----',this)
        }
    }
</script>
<style >

</style>