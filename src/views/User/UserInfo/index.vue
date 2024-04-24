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
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item label="生 日">
                    <a-date-picker v-model:value="formState.birthday" />
                </a-form-item>
                <a-form-item label="兴 趣" name="type">
                    <a-checkbox-group v-model:value="formState.interest">
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
                    <a-input v-model:value="formState.sign" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click.prevent="onSubmit">确认修改</a-button>
                </a-form-item>
            </div>

        </a-form>

    </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { ref, reactive } from 'vue';
import { upDataUserInfo } from '@/apis/user/index'
import dayjs, { Dayjs } from 'dayjs'
import type { UnwrapRef } from 'vue';
import { useUserStore } from '@/stores';

const userStore = useUserStore()
const img_change = ref(true)
const image = ref([])
const avatarFile = ref<any>(null)
const avaterURL = ref<string>(userStore.userInfo.ProfilePhoto)
// let formdata = new FormData()
// let form = undefined

interface FormState {
    name: string;
    interest: string[],
    birthday: Dayjs | undefined,
    sign: string,
    picture: string
}
const formState: UnwrapRef<FormState> = reactive({
    name: '',
    interest: [],
    birthday: undefined,
    sign: '',
    picture: ''
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
    // form = e.target.files
    // Array.from(e.target.files).map(item => {
    //     console.log(item)
    //     // @ts-ignore
    //     formdata.append("file", item)
    //     console.log(formdata);
    
    // })
 
    reader.readAsDataURL(avatarFile.value)
    reader.onload = function (e) {
        img_change.value = false
        // @ts-ignore
        image.value.push(e.target?.result)
        formState.picture = image.value[0]
    }
}

// 表单提交
const onSubmit = async () => {
    const { birthday, interest, name, sign, picture } = formState
    console.log(userStore.userId);
    const userId = userStore.userId.toString()
    const Birthday = dayjs(birthday).unix()
    const upLoadData = {
        num: '1 2 5 3',
        // @ts-ignore
        user_id: userId,
        // name,
        picture,
        // interest,
        sign,
        birthday: Birthday
    }
    console.log(upLoadData);

    const res = await upDataUserInfo(upLoadData)
    console.log(res);


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