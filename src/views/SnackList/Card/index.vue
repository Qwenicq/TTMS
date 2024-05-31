<template>
    <a-card hoverable style="width: 200px">
        <template #cover>
            <img alt="example" :src="cardInfo.Picture" />
        </template>
        <template #actions>
            <delete-outlined key="delete" @click="handleDel" />
            <edit-outlined key="edit" @click="handleEdit" />
        </template>
        <a-card-meta :title="cardInfo.Name" :description="info"></a-card-meta>
        <a-card-meta :description='price'></a-card-meta>
        <a-card-meta :description='stock'></a-card-meta>
    </a-card>
    <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name" :root-style="{ color: 'blue' }"
        style="color: black" title="修改信息" placement="right" @after-open-change="afterOpenChange">
        <div class="form">
            <span class="item">
                <label for="name">零食名称：</label>
                <input type="text" id="name" v-model="snackInfo.name" />
            </span>
            <span class="item">
                零食照片：
                <div class="avatarChange">
                    <img :src="cardInfo.Picture || 'https://img1.baidu.com/it/u=329429787,4292897941&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'"
                        class="img" v-if="snackInfo.picture === undefined">
                    <img :src="image[0]" class="img" v-else>
                    <input type="file" @change="handleChange">
                </div>
            </span>

            <span class="item">
                <label for="actor">库存：</label>
                <input type="text" id="actor" v-model="snackInfo.stock" />
            </span>
            <span class="item">
                <label for="actor">价格：</label>
                <input type="text" id="actor" v-model="snackInfo.price" />
            </span>
            <span class="item">
                <label for="info">简介：</label>
                <input type="text" id="info" v-model="snackInfo.info" />
            </span>
            <button class="btn" @click="handleSubmit">确认上架</button>
        </div>

    </a-drawer>
</template>

<script setup lang="ts">
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { delSnack, updateSnack } from '@/apis/snack/index'
import { ref } from 'vue'
import { message } from 'ant-design-vue'

const [messageApi, contextHolder] = message.useMessage();
const props = defineProps(['info'])
const cardInfo = props.info
const info = `简介:${cardInfo.Info}`
const price = `价格:${cardInfo.Price}元`
const stock = `库存:${cardInfo.Stock}件`
const handleDel = async () => {
    const id = cardInfo.ID.toString()
    const res = await delSnack(id)
    window.location.reload()
}
const open = ref<boolean>(false);
const avatarFile = ref<any>(null)
const image = ref([])

interface SnackInfo {
    name: string
    info: string
    price: string
    stock: string
    picture: File | undefined,

}

const snackInfo = ref<SnackInfo>({
    name: cardInfo.Name,
    price: cardInfo.Price,
    stock: cardInfo.Stock,
    picture: undefined,
    info: cardInfo.Info
})

const handleEdit = () => {
    open.value = true;
}

const afterOpenChange = (bool: boolean) => {
    console.log('open', bool);
};


// 传入图片
const handleChange = (event: any) => {
    avatarFile.value = event.target.files[0]
    console.log(avatarFile.value);
    const supportedType = ['image/png', 'image/jpeg', 'image/jpg']
    const imageSize = avatarFile.value.size

    if (imageSize <= 102400) {
        if (avatarFile && supportedType.indexOf(avatarFile.value.type) >= 0) {
            snackInfo.value.picture = avatarFile.value
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
    const form = new FormData()
    const id = cardInfo.ID.toString()
    const formData = ref({})
    if (cardInfo.Picture.value === undefined) {
        formData.value = {
            ...snackInfo.value,
            num: '1 2',
            snack_id: id
        }
    } else {
        formData.value = {
            ...snackInfo.value,
            num: '1 2 3',
            snack_id: id
        }
    }
    Object.keys(formData.value).forEach(key => {
        //@ts-ignore
        form.append(key, formData.value[key])
    })
    const res = await updateSnack(form)
    console.log(res);
    
   message.success(res.data.message)
    // window.location.reload()
}
</script>


<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
   

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