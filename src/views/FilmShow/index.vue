<template>
    <div class="container">
        <div class="header">
            <!-- <h1>正在热映电影</h1> -->
        </div>
        <Card v-for="item in filmInfoList" :key="item.ID" :info="item" @flagFn="flagFn"/>
    </div>
</template>

<script setup lang="ts">
import { useFilmStore } from '@/stores';
import Card from './Card/index.vue'
import { onMounted, ref } from 'vue';
import type { filmData } from '@/apis/film/type';

const filmStore = useFilmStore()
const filmInfoList = ref<filmData[]>([])

onMounted(async() => {
    await filmStore.getFilmData()  
    filmInfoList.value = filmStore.filmList
})

const flagFn = (payload:boolean) => {
    if (payload) {
        filmInfoList.value = filmStore.filmList
        window.location.reload()
    }
    return
}

</script>

<style scoped lang="scss">
.container{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1400px;
    min-height: 1000px;
}
</style>