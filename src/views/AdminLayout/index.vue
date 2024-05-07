<template>
    <div class="container">
        <div class="header">
            <h1>正在热映电影</h1>
        </div>
        <Card v-for="item in 6" :key="item"/>
    </div>
</template>

<script setup lang="ts">
import Card from './Card/index.vue'
</script>

<style scoped lang="scss">
.container{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1400px;
    height: 1000px;
}
</style>