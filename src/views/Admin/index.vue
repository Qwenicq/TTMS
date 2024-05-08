<template>
    <div>
        <Top />
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { useFilmStore } from '@/stores';
import Top from './Top/index.vue'

const filmStore = useFilmStore()
filmStore.getFilmData()
</script>

<style scoped>

</style>