<template>
    <div class="container">
        <div class="top">
            <h1>修改电影信息</h1>
        </div>

        <form class="form" @submit.prevent="handleSubmit">
            <span class="item">
                <label for="name">电影名称：</label>
                <input type="text" id="name" v-model="editInfo.name" />
            </span>
            <span class="item">
                <label for="director">导演：</label>
                <input type="text" id="director" v-model="editInfo.director" />
            </span>
            <span class="item">
                <label for="money">票价：</label>
                <input type="text" id="money" v-model="editInfo.money" />
            </span>
            <span class="item">
                <label for="duration">电影时长：</label>
                <input type="text" id="duration" v-model="editInfo.duration" />
            </span>
            <span class="item">
                <label for="releaseTime">上映时间：</label>
                <input type="text" id="releaseTime" v-model="editInfo.release_time" />
            </span>
            <span class="item">
                电影照片：
                <div class="avatarChange">
                    <img :src="info.Picture" class="img" v-if="editInfo.picture === undefined">
                    <img :src="image[0]" class="img" v-else>
                    <input type="file" @change="handleChange" disabled>
                </div>
            </span>

            <span class="item">
                <label for="actor">演员：</label>
                <input type="text" id="actor" v-model="editInfo.actor" disabled />
            </span>
            <span class="item">
                <label for="info">简介：</label>
                <input type="text" id="info" v-model="editInfo.info" />
            </span>
            <button class="btn">确认上架</button>
        </form>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { useFilmStore } from '@/stores';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import { editFilm } from '@/apis/film/index'

const route = useRoute()
const id = <string>route.params.id
const idNum = parseInt(id)
const filmStore = useFilmStore()

const [info] = filmStore.filmList.filter(item => item.ID === idNum)


const editInfo = ref({
    num: '1 2 3 4 5 6',
    name: info.Name,
    director: info.Director,
    info: info.Info,
    movie_id: id,
    money: info.Money,
    release_time: dayjs(info.release_time).format('YYYY-MM-DD'),
    duration: info.Duration,
    picture: undefined,
    actor: info.Actor
})

const avatarFile = ref<any>(null)
const image = ref([])

// 传入图片
const handleChange = (event: any) => {
    avatarFile.value = event.target.files[0]
    console.log(avatarFile.value);
    const supportedType = ['image/png', 'image/jpeg', 'image/jpg']
    const imageSize = avatarFile.value.size

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
        // @ts-ignore
        image.value.push(e.target?.result)
    }
}

const handleSubmit = async () => {
    const { release_time } = editInfo.value
    const ReleaseTime = dayjs(release_time).unix().toString()
    editInfo.value.release_time = ReleaseTime
    console.log(editInfo.value.release_time);

    const formData = new FormData()
    Object.keys(editInfo.value).forEach(key => {
           //@ts-ignore
        formData.append(key, editInfo.value[key])
    })
    const res = await editFilm(formData)
    console.log(res);
    message.success(res.data.message)
    filmStore.getFilmData()
    setTimeout(() => {
        const [info] = filmStore.filmList.filter(item => item.ID === idNum)

        editInfo.value = {
            num: '1 2 3 4 5 6',
            name: info.Name,
            director: info.Director,
            info: info.Info,
            movie_id: id,
            money: info.Money,
            release_time: dayjs(info.release_time).format('YYYY-MM-DD'),
            duration: info.Duration,
            picture: undefined,
            actor: info.Actor
        }
    }, 200)
}

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;

    .top {
        margin-left: 300px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

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
}
</style>