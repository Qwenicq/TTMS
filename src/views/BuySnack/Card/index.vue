<template>
    <div>
        <a-card>
            <div class="content_snack">
                <div class="left">
                    <img :src="snackInfo?.Picture" alt="">
                    <div class="info">
                        <p><strong>名称：</strong>{{ snackInfo?.Name }}</p>
                        <p><strong>价格：</strong>{{ snackInfo?.Price }}元</p>
                        <p><strong>库存：</strong>{{ snackInfo?.Stock }}件</p>
                    </div>
                </div>
                <div class="right">
                    <a-button type="primary" @click="decreaseFn">-</a-button>
                    <span class="num">{{ num }}</span>
                    <a-button type="primary" @click="increaseFn">+</a-button>
                    <a-button type="primary" @click="BuyFn">购买</a-button>
                    <a-button type="text" @click="CollectFn" >{{flag?'取消收藏':'收藏'}}</a-button>
                    
                </div>
            </div>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import type { snackInfo } from '@/apis/snack/type';
import {buySnack,collectSnack,} from '@/apis/snack/index'
import { ref, watch ,computed} from 'vue';
import { message } from 'ant-design-vue';

const snackInfo = ref<snackInfo>()
const prop = defineProps(['info'])
if (prop.info) {
    snackInfo.value = prop.info
}

const num = ref<number>(0)
const flag = ref(false)
const emit = defineEmits(['buySuccess'])

const decreaseFn = () => {
    if (num.value > 0) {
        num.value -= 1
        return
    }
    return
}

const increaseFn = () => {
    num.value += 1
}

const BuyFn = async () => {
    if (snackInfo.value?.ID && num.value > 0) {
        const form = new FormData()
        const id = snackInfo.value.ID.toString()
        const number = num.value.toString() 
        form.append('id', id)
        form.append('num', number)
        const res = await buySnack(form)
        message.success(res.data.message)
        emit('buySuccess', true)
        setTimeout(() => {
            window.location.reload()
        },1000)
        return
    }
    message.warn('购买失败！')
}

const CollectFn = async() => {
    flag.value = !flag.value
    const id = snackInfo.value?.ID.toString()
    if (id) {
        await collectSnack(id)
        return
    }
    message.warn("收藏失败！")
}
</script>

<style scoped lang="scss">
.content_snack {
    display: flex;
    justify-content: space-between;
}

.left {
    display: flex;
    gap: 30px;

    img {
        width: 120px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
            font-size: 16px;
        }
    }
}

.right {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>