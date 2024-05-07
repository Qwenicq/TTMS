<template>
    <div class="container">
        <div class="top">
            <h1>修改电影信息</h1>
        </div>

        <form class="form">
            <span class="item">
                <label for="name">电影名称：</label>
                <input type="text" id="name" />
            </span>
            <span class="item">
                <label for="director">导演：</label>
                <input type="text" id="director" />
            </span>
            <span class="item">
                <label for="money">票价：</label>
                <input type="text" id="money" />
            </span>
            <span class="item">
                <label for="duration">电影时长：</label>
                <input type="text" id="duration" />
            </span>
            <span class="item">
                <label for="releaseTime">上映时间：</label>
                <input type="text" id="releaseTime" />
            </span>
            <span class="item">
                电影照片：
                <div class="avatarChange">
                    <img :src="image[0]" class="img">
                    <input type="file" @change="handleChange">
                </div>
            </span>

            <span class="item">
                <label for="actor">演员：</label>
                <input type="text" id="actor" />
            </span>
            <span class="item">
                <label for="info">简介：</label>
                <input type="text" id="info" />
            </span>
            <button class="btn">确认上架</button>
        </form>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
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