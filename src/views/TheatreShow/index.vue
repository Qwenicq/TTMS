<template>
    <div class="container">
        <Card v-for="item in theatreinfo" :key="item.ID" :info="item" @flag="flag" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './Card/index.vue'
import request from '@/utils/request';
import type { theatreInfo } from '@/apis/film/type'

const theatreinfo = ref<theatreInfo[]>([])

onMounted(async () => {
    const res = await request.get('/theatre/api/getAllTheatre')
    theatreinfo.value = res.data.data
})

const flag = async(payload: boolean) => {
    if (payload) {
        const res = await request.get('/theatre/api/getAllTheatre')
        theatreinfo.value = res.data.data
    }
    return
}

</script>

<style scoped>
.container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1400px;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
}
</style>