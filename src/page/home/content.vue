<template>
    <div class="example">
        {{msg}}
        <br>
       <h1>{{indexCon}}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '这是内容1111111'
            }
        },
        computed:{
            indexCon(){
                return this.$store.state.contentCon;
            }
        },
        mounted(){
            console.log(this.$store.state)
        }

    }
</script>