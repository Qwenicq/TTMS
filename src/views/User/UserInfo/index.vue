<template>
    <div class="userInfo_con">
        <a-form :model="formState" class="Form">
            <div class="avatarChange">
                <!-- -->
                <img :src="avaterURL" class="img" v-if="img_change">
                <img :src="image[0]" class="img" v-else>
                <input type="file" @change="handleChange">
            </div>
            <div class="formData">
                <a-form-item label="用户名">
                    <a-input v-model:value="formState.Name" />
                </a-form-item>
                <a-form-item label="生 日">
                    <a-date-picker v-model:value="formState.Birthday" />
                </a-form-item>
                <a-form-item label="兴 趣" name="type">
                    <a-checkbox-group v-model:value="formState.Interest">
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
                </a-form-item>
                <a-form-item label="个性签名">
                    <a-input v-model:value="formState.signature" />
                </a-form-item>
                <a-form-item>
                <a-button type="primary">确认修该</a-button>
            </a-form-item>
            </div>
          
        </a-form>

    </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { Dayjs } from 'dayjs'
import type { UnwrapRef } from 'vue';
import { ref } from 'vue';

const img_change = ref(true)
const image = ref([])
const avatarFile = ref<any>(null)
const avaterURL = ref('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UcOwPmRlZ19sOdnDwsqOwhvFmcukTorkag&usqp=CAU')

interface FormState {
    Name: string;
    Interest: string[],
    Birthday: Dayjs | undefined,
    signature: string
}
const formState: UnwrapRef<FormState> = reactive({
    Name: '',
    Interest: [],
    Birthday: undefined,
    signature: ''
});

// 传入图片
const handleChange = (event: any) => {
    avatarFile.value = event.target.files[0]
    console.log(avatarFile.value);
    const supportedType = ['image/png', 'image/jpeg', 'image/jpg']
    const imageSize = avatarFile.value.size
    console.log(imageSize);
    if (imageSize <= 102400) {
        if (avatarFile && supportedType.indexOf(avatarFile.value.type) >= 0) {
            createImage(event)
        } else {
            message.warning('图片格式只支持：jpg、jpeg和png')
        }
    } else {
        message.warning('上传图片不能超过100KB')
    }
}
const createImage = (e: any) => {
    e.preventDefault()
    const reader = new window.FileReader()
    reader.readAsDataURL(avatarFile.value)
    reader.onload = function (e) {
        img_change.value = false
        image.value.push(e.target?.result)
    }
}
</script>

<style scoped lang="scss">
.userInfo_con {
    height: 100vh;
    width: 100vw;
    position: relative;
    .Form {
        position: absolute;
        top: 10%;
        left: 10%;      
        width: 600px;
        display: flex;
        .avatarChange {
            position: relative;

            .img {
                width: 150px;
                height: 150px;
                border: 0;
            }

            input {
                font-size: 0;
            }

            input::-webkit-file-upload-button {
                position: absolute;
                top: 0;
                left: 0;
                width: 150px;
                height: 150px;
                border: 0;
                opacity: 0;
            }
        }
        .formData {
            margin-left: 40px;
        }
    }



}
</style>