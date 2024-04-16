<template>
    <div class="login_container">
        <div class="container">
            <div class="form_area">
                <p class="title">登录</p>
                <form  @submit.prevent="handleClick">
                    <div class="form_group">
                        <label class="sub_title" for="phone" >电话</label>
                        <input  class="form_style" type="text" v-model="formData.phone"  pattern="1{1}[3-9]{1}[0-9]{9}">
                    </div>
                    <div class="form_group">
                        <label class="sub_title" for="password">密码</label>
                        <input  id="password" class="form_style" type="password" v-model="formData.password">
                    </div>
                   
                    <div>
                        <button class="btn" >登录</button>
                        <p>没有账号? <a class="link" href="/register">立即注册!</a></p>
                        <span class="link"></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'; 
import { userLoginAPI } from '@/apis/user/index'
import {message}  from 'ant-design-vue';

const formData = ref({
    phone: '',
    password: ''
})

const handleClick = async () => {    
    const res = await userLoginAPI(formData.value)
    if (res.data.message !== '登录成功') {
            message.warning(res.data.message)
            return
        }
        message.success(res.data.message)
}
</script>

<style scoped lang="scss">
.login_container {
    height: 100vh;
    background: url('@/assets/images/loginBG.jpg');
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "也字工厂";
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .form_area {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #EDDCD9;
        height: auto;
        width: auto;
        border: 2px solid #264143;
        border-radius: 20px;
        box-shadow: 3px 4px 0px 1px #E99F4C;
    }

    .title {
        color: #264143;
        font-weight: 700;
        font-size: 1.5em;
        margin-top: 20px;
    }

    .sub_title {
        font-weight: 400;
        margin: 5px 0;
    }

    .form_group {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 10px;
    }

    .form_style {
        outline: none;
        border: 2px solid #264143;
        box-shadow: 3px 4px 0px 1px #E99F4C;
        width: 290px;
        padding: 12px 10px;
        border-radius: 4px;
        font-size: 15px;
    }

    .form_style:focus,
    .btn:focus {
        transform: translateY(4px);
        box-shadow: 1px 2px 0px 0px #E99F4C;
    }

    .btn {
        padding: 15px;
        margin: 25px 0px;
        width: 290px;
        font-size: 15px;
        background: #DE5499;
        border-radius: 10px;
        font-weight: 700;
        box-shadow: 3px 3px 0px 0px #E99F4C;
    }

    .btn:hover {
        opacity: .9;
    }

    .link {
        font-weight: 800;
        color: #264143;
        padding: 5px;
    }
}
</style>