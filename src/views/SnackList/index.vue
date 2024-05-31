<template>
    <div class="container">
        <div class="top">
            <a-button type="primary" @click="handleClick">还原零食列表</a-button>
        </div>
        <div class="bottom">
            <Card v-for="item in snackList" :info="item" :key="item.ID" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './Card/index.vue'
import { getSnack, recoverSnack } from '@/apis/snack/index'
import type { snack, snackInfo } from '@/apis/snack/type'

const snackList = ref<snackInfo[]>([])

onMounted(async () => {
    const res: snack = await getSnack()
    snackList.value = res.data.data
    console.log(snackList.value);
})

const handleClick = async () => {
    await recoverSnack()
    window.location.reload()

}

</script>

<style scoped>
.container {
    position: relative;

    .top {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .bottom {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    
}


</style>