<template>
    <div class="card">
        <div class="content"> 
                <img :src="infomation.Picture" class="img">
                <span class="name">电影:{{infomation.Name}}</span>
        </div>
        <div class="option">
            <a-button type="primary" @click=handleEdit ><EditOutlined /> </a-button>
            <a-button type="primary" danger @click="handleDel" v-if="infomation.Online"><DeleteOutlined /></a-button>
            <a-button type="primary"  @click="handleUp" v-else><UploadOutlined /></a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useFilmStore } from '@/stores';
import {delFilm,upFilm } from '@/apis/film/index'

const props = defineProps(['info'])
const infomation = props.info
const filmStore = useFilmStore()


import {
    DeleteOutlined,
    EditOutlined,
    UploadOutlined
} from '@ant-design/icons-vue'

const handleEdit = () => {
    router.push(`/film/editfilm/${infomation.ID}`)
}

const id = infomation.ID.toString()

const handleDel = async () => {
    
    const res = await delFilm(id)
    console.log(1);
    filmStore.getFilmData()
}

const handleUp =async () => {
    const res = await upFilm(id)
    console.log(2);
    filmStore.getFilmData()
}
</script>

<style scoped lang="scss">
.card {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 1300px;
    height: 150px;
    background: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .content {
        
        .img{
            height: 150px;
            vertical-align: middle;
            margin-right: 30px;
        }
        .name {
            font-size: 18px;
            font-weight: 700;
        }
    }
    .option {
        display: flex;
        align-items: center;
        gap: 10%;
        margin-right: 30px;
    }
}

</style>