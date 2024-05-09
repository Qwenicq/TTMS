<template>
    <div class="box_container">
        <ul class="list">
            <li :class="[flag === '1' && 'active','item']" @click="routerChange('/admin/filmshow', '1')">电影</li>
            <li :class="[flag === '2' && 'active','item']" @click="routerChange('/admin/theatreshow', '2')">放映厅</li>
        </ul>  
    </div>
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const flag = ref('1')

const routerChange = (path: string, id: string) => {
    flag.value = id
    router.push(path)
}
</script>

<style scoped lang="scss">
.box_container{
    width: 100%;
    height: 40px;
    display: flex;
    background: #ccc;
    justify-content: center;
    .list{
        display: flex;
        list-style: none;
        width: 300px;
        justify-content: space-between;
        .item{
            font-size: 20px;
            font-weight: 700;
            line-height: 40px;
            color: white;
        }
        .active {
            color: black;
        }
    }
}
</style>