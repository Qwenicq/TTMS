<template>
    <div class="container">
        <div class="nav">
            <ul>
                <li :class="[flag === '1' && 'active', 'item']" @click="handleCilk('1')">
                    <RouterLink to="" class='link'>上架电影</RouterLink>
                </li>
                <li :class="[flag === '2' && 'active', 'item']" @click="handleCilk('2')">
                    <RouterLink to="" class='link'>下架电影</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const flag = ref('')

const handleCilk = (id: string) => {
    flag.value = id
}

</script>

<style scoped lang="scss">
.container {
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .nav {
        .item {
            width: 100px;
            height: 50px;
            margin-bottom: 15px;
            text-align: center;
            line-height: 50px;
            list-style: none;

            .link {
                text-decoration: none;
                font-size: 18px;
                font-weight: 800;
                color: black;
            }

        }

        .active {
            background: skyblue;
        }

        .item:hover {
            border: 1px solid transparent;
            border-radius: 5%;
            background: skyblue;
        }

    }
}
</style>