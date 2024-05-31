<template>
    <div>
        <div class="form">
            <span class="item">
                <label for="name">电影名称：</label>
                <input type="text" id="name" v-model="filmInfo.name" />
            </span>
            <span class="item">
                <label for="director">导演：</label>
                <input type="text" id="director" v-model="filmInfo.director" />
            </span>
            <span class="item">
                <label for="money">票价：</label>
                <input type="text" id="money" v-model="filmInfo.money" />
            </span>
            <span class="item">
                <label for="duration">电影时长：</label>
                <input type="text" id="duration" v-model="filmInfo.duration" />
            </span>
            <span class="item">
                <label for="releaseTime">上映时间：</label>
                <input type="text" id="releaseTime" placeholder="例:2024-1-21" v-model="filmInfo.release_time" />
            </span>
            <span class="item">
                电影照片：
                <div class="avatarChange">
                    <img src="https://img1.baidu.com/it/u=329429787,4292897941&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" class="img" v-if="filmInfo.picture === undefined">
                    <img :src="image[0]" class="img" v-else>
                    <input type="file" @change="handleChange">
                </div>
            </span>

            <span class="item">
                <label for="actor">演员：</label>
                <input type="text" id="actor" v-model="filmInfo.actor" />
            </span>
            <span class="item">
                <label for="info">简介：</label>
                <input type="text" id="info" v-model="filmInfo.info" />
            </span>
            <button class="btn" @click="handleSubmit">确认上架</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';
import { addFilm } from '@/apis/film/index'
import  customParseFormat  from'dayjs/plugin/customParseFormat'
import { useFilmStore } from '@/stores';

const avatarFile = ref<any>(null)
const image = ref([])
const filmStore = useFilmStore()

interface FilmInfo {
    name: string
    director: string
    money: string
    duration: string
    release_time: string
    picture: File | undefined,
    actor: string,
    info: string
}

const filmInfo = ref<FilmInfo>({
    name: '',
    director: '',
    money: '',
    duration: '',
    release_time: '',
    picture: undefined,
    actor: '',
    info: ''
})

// 传入图片
const handleChange = (event: any) => {
    avatarFile.value = event.target.files[0]
    console.log(avatarFile.value);
    const supportedType = ['image/png', 'image/jpeg', 'image/jpg']
    const imageSize = avatarFile.value.size

    if (imageSize <= 102400) {
        if (avatarFile && supportedType.indexOf(avatarFile.value.type) >= 0) {
            filmInfo.value.picture = avatarFile.value
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
        // @ts-ignore
        image.value.push(e.target?.result)

    }
}


const handleSubmit = async () => {
    const { release_time } = filmInfo.value
    dayjs.extend(customParseFormat)
    const ReleaseTime = dayjs(release_time).unix().toString()
    filmInfo.value.release_time = ReleaseTime
    const formData = new FormData()
    Object.keys(filmInfo.value).forEach(key => {
        //@ts-ignore
        formData.append(key, filmInfo.value[key]);
    });
    const res = await addFilm(formData)
    message.success(res.data.message)
    filmStore.getFilmData()
    filmInfo.value = {
        name: '',
        director: '',
        money: '',
        duration: '',
        release_time: '',
        picture: undefined,
        actor: '',
        info: ''
    }
}
</script>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    margin-left: 300px;

    .item {
        font-size: 18px;
        margin-top: 10px;
        display: flex;
        width: 280px;
        justify-content: space-between;

        input {
            padding-left: 5px;
        }

        input:focus {
            outline: none;
        }
    }

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

    .btn {
        margin-top: 25px;
        width: 100px;
        height: 50px;
        border: 1px solid transparent;
        border-radius: 15%;
        background: #65ceee;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        margin-left: 100px;
    }
}
</style>