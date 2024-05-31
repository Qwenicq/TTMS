<template>
    <div class="user_box">
        <div class="left">
            <img :src="userInfo.ProfilePhoto" alt="">
        </div>
        <div class="right">
            <p><strong>用户名：</strong>{{ userInfo.Name }}</p>
            <p><strong>生日：</strong>{{ dayjs(userInfo.Birthday).format('YYYY-MM-DD') }}</p>
            <p>
                <strong>兴趣：</strong>
                <a-checkbox-group v-model:value="userInfo.Interest" disabled>
                    <a-checkbox value="1" name="type">美食</a-checkbox>
                    <a-checkbox value="2" name="type">动漫</a-checkbox>
                    <a-checkbox value="3" name="type">摄影</a-checkbox>
                    <a-checkbox value="4" name="type">电影</a-checkbox>
                    <a-checkbox value="5" name="type">体育</a-checkbox>
                    <a-checkbox value="6" name="type">财经</a-checkbox>
                    <a-checkbox value="7" name="type">音乐</a-checkbox>
                    <a-checkbox value="8" name="type">游戏</a-checkbox>
                    <a-checkbox value="9" name="type">科技</a-checkbox>
                    <a-checkbox value="10" name="type">旅游</a-checkbox>
                </a-checkbox-group>
            </p>
            <p><strong>个性签名：</strong>{{ userInfo.Sign }}</p>
            <p><strong>余额：</strong>{{ userInfo.Wallet }}</p>
            <div class="operation">
                <a-button type="primary" @click="moneyFn">充值</a-button>
                <a-button type="primary" class="btn" @click="updateFn" v-if="userInfo.Flag === 0">升级为管理员</a-button>
                <a-button type="primary" class="btn" @click="router.push('/admin')" v-else>前往管理员页面</a-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores';
import { rechargeAPI,updateAdmin } from "@/apis/user/index"
import { ref } from 'vue';
import dayjs from 'dayjs';
import { message } from 'ant-design-vue';
import router from '@/router';

const userStore = useUserStore()
const userInfo = ref(userStore.userInfo)

const moneyFn = async () => {
    const money = prompt('充值金额：')
    if (money) {
        const data = new FormData()
        data.append('num', money)
        await rechargeAPI(data)
        userStore.setUserInfo()
        userInfo.value = userStore.userInfo
        return
    }
}

const updateFn = async () => {
    const key = prompt("请输入密钥")
    if (key) {
        const data = new FormData()
        if (userInfo.value.ID) {
            const id = userInfo.value.ID.toString()
            data.append('key', key)
            data.append('id', id)
            const res = await updateAdmin(data)
            message.success(res.data.message)
            return
        }

    }
}
</script>

<style scoped lang="scss">
.user_box {
    position: absolute;
    display: flex;
    gap: 30px;
    left: 30%;
    top: 20%;

    .left {
        img {
            width: 180px;
            height: 180px;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;

        .btn {
            margin-left: 20px;
        }
    }
}
</style>