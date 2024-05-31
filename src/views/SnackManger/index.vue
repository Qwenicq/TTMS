<template>
    <div class="container">
        <div class="nav">
            <ul>
                <li :class="[flag === '1' && 'active', 'item']" @click="handleCilk('1')">
                    <RouterLink to="/snack/list" class='link'>零食列表</RouterLink>
                </li>
                <li :class="[flag === '2' && 'active', 'item']" @click="handleCilk('2')">
                    <RouterLink to="/snack/upload" class='link'>上架零食</RouterLink>
                </li>
            </ul>
        </div>
        <RouterView class="router"></RouterView>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const flag = ref('1')

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
    display: flex;

    .nav {
        .item {
            margin-top: 10px;
            width: 100px;
            height: 50px;
            margin-bottom: 15px;
            text-align: center;
            line-height: 50px;
            list-style: none;

            .link {
                display: block;
                text-decoration: none;
                width: 100px;
                height: 50px;
                font-size: 18px;
                font-weight: 800;
                color: black;
            }

        }

        .active {
            width: 100px;
            height: 50px;
            background: skyblue;
        }

        .item:hover {
            width: 100px;
            height: 50px;
            background: skyblue;
        }

    }

    .router {
        margin-left: 20px;
    }
}
</style>