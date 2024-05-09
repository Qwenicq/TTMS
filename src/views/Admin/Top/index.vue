<template>
    <div class="container">
        <div class="contents">
            <div class="title">TTMS后台管理</div>
            <div class="content">
                <RouterLink class="link" to="/admin">首页</RouterLink>
                <RouterLink class="link" to='/admin/film'>电影</RouterLink>
                <RouterLink class="link" to="/admin/snack">零食</RouterLink>
            </div>
            <div>
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        <a-avatar size="large">
                            <template #icon>
                                <UserOutlined v-if="userData.ProfilePhoto === ''" />
                                <img :src="userImg" v-else>
                            </template>

                        </a-avatar>
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <div>
                                <a-menu-item>
                                    <a @click="handleRemove">退出登录</a>
                                </a-menu-item>
                            </div>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores';
import { getToken, removeToken } from '@/utils/Token'
import { UserOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const token = getToken().token
const userStore = useUserStore()
const userData = ref(userStore.userInfo || null)
let userImg = ''
if (userStore.userInfo.ProfilePhoto !== '') {
    userImg = userStore.userInfo.ProfilePhoto
} else {
    userImg = 'https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0'
}

const handleRemove = async () => {
    await removeToken()
    await userStore.removeUser()
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    background-color: rgb(83, 79, 79);
    width: 100%;
    height: 100px;
    color: white;

    .contents {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 2000px;
        height: 100px;
        display: flex;
        justify-content: left;
        gap: 30%;
        align-items: center;

        .title {
            font-size: 28px;
            font-weight: 700;
            margin-top: 10px;
            margin-left: 10px;
        }

        .content {
            width: 450px;
            display: flex;
            gap: 25%;

            .link {
                font-size: 28px;
                text-decoration: none;
                color: white;
                font-weight: 700;
            }
        }

    }
}
</style>