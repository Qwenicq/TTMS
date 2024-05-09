<template>
    <div class="card">
        <div class="top">
            <span>名字：{{ infomation.Name }}</span>
            <span>简介：{{ infomation.Info }}</span>
            <span>排数：{{infomation.N}}</span>
            <span>列数：{{infomation.M}}</span>
        </div>
        <div class="bottom">
            <a-button type="primary" danger @click="handleDel"><DeleteOutlined /></a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DeleteOutlined } from '@ant-design/icons-vue'
import {removeTheatre} from '@/apis/film/index'
import { message } from 'ant-design-vue';
const props = defineProps(['info'])
console.log(props);
const infomation = props.info

const emit = defineEmits(['flag'])

const handleDel = async () => {
    const id = infomation.ID.toString()
    const res =await removeTheatre(id)
    message.success(res.data.message)
    emit('flag',true)
    
}

</script>

<style scoped lang="scss">
.card {
    margin-top: 30px;
    width: 280px;
    height: 170px;
    border: 1px solid skyblue;
    border-radius: 20%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .top {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-left: 20px;
        font-size: 18px;
    }
    .bottom {
        margin-left: 120px;
        margin-top: 15px;
    }
}
</style>