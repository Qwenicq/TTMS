<template>
    <div class="box">
       <Card v-for="item in userCollect" :key="item.ID" :info="item"></Card> 
    </div>
</template>

<script setup lang="ts">
import Card from './Card/index.vue'
import { onMounted, ref } from 'vue'
import {userCollectList } from '@/apis/film/index'
import type {filmData } from '@/apis/film/type'
 
const userCollect = ref<filmData[]>([])
onMounted(async() => {
    const res = await userCollectList()
    userCollect.value = res.data.data   
})
</script>

<style scoped >
.box {
    margin-left: 20px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>