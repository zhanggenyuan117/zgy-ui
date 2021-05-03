<!--
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-03 17:11:54
 * @LastEditTime: 2021-05-03 18:05:31
 * @Descripttion: 
-->
<template>
    <div class="form">
        <slot></slot>
        <div>
            <button @click="submitHandler" class="btn">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'zgyForm',
        data(){
            return{
                
            }
        },
        methods:{
            submitHandler(){
                console.log("aaaa")
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>