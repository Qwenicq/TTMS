<template>
    <div class="contanier">
        <Top />
        <div class="content">
            <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 130px;height: 500px;" mode="vertical"
                :items="items" @click="handleClick" />
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import Top from './Top/index.vue'

import { h, onMounted, ref } from 'vue';
import {
    UserOutlined,
    ShopOutlined
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { RouterView, useRoute } from 'vue-router';
import router from '@/router';


const selectedKeys = ref<string[]>([]);
const openKeys = ref([]);
const items = ref([
    {
        key: '1',
        icon: () => h(UserOutlined),
        label: '个人信息',
        title: 'userInfo',
        route: '/user'
    },
    {
        key: '2',
        icon: () => h(ShopOutlined),
        label: '收藏',
        title: 'orderInfo',
        route: '/user/orderlist'
    },
    {
        key: '3',
        icon: () => h(UserOutlined),
        label: '修改信息',
        title: 'userInfo',
        route: '/user/editinfo'
    },
]);
onMounted(async () => {
    const route = useRoute()
    const currentPath = route.path
    const active = await items.value.filter(item => item.route === currentPath)
    selectedKeys.value = active.map(item => item.key)
})

const handleClick: MenuProps['onClick'] = menuInfo => {

    router.push(menuInfo.item.route)
};
</script>

<style scoped lang="scss">
.contanier {
    width: 1000px;
    height: 1000px;
    position: relative;

    .content {
        position: relative;
        left: 50%;
        display: flex;
    }
}
</style>