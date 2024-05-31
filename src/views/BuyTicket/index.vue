<template>
    <div class="container">
        <div class="movieInfo">
            <div class="left">
                <img src="https://p0.pipi.cn/mmdb/54ecde8771ff2a338f50c89f71e1dabc3f16b.jpg?imageView2/1/w/464/h/644"
                    alt="">
            </div>
            <div class="right">
                <h1>哈尔的移动城堡</h1>
                <p class="item"><b>简介: </b>{{ filmInfo.Info }}</p>
                <p class="item"><b>时长: </b>{{ filmInfo.Duration / 60 }}分钟</p>
                <p class="item"><b>场次: </b>{{ dayjs(playInfo.BeginTime).format('YYYY-MM-DD HH:mm') }} --- {{
                    dayjs(playInfo.EndTime).format(' HH:MM') }} </p>
            </div>
        </div>
        <div class="seat">
            <Seats :info="playInfo.Seat" @newSeat="newSeat" class="box" />
            <button class="btn" @click="handleClick">确认购票</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { showDetail, buyTicket } from '@/apis/film/index'
import { type filmData, type play } from '@/apis/film/type'
import dayjs from 'dayjs';
import Seats from './Seat/index.vue'
import { message } from 'ant-design-vue';
import router from '@/router';

const filmInfo = ref<filmData>({
    ID: 0,
    CreatedAt: '',
    UpdatedAt: '',
    DeletedAt: null,
    Picture: '',
    Info: '',
    Name: '',
    Director: '',
    Actor: '',
    Duration: 0,
    release_time: '',
    Money: 0,
    Online: false,
    ticket_num: 0,
    total: 0,
    count: 0,
    average: 0
})
const playInfo = ref<play>({
    ID: 0,
    CreatedAt: '',
    UpdatedAt: '',
    DeletedAt: null,
    MovieId: '',
    TheatreId: '',
    Seat: '',
    Num: 50,
    BeginTime: '',
    EndTime: ''
}
)

const route = useRoute()
const id = ref('')
const rowIndices= ref<number[]>([]);
const colIndices= ref<number[]>([]);

onMounted(async () => {
    const queryParam = route.query.id;
    if (typeof queryParam === 'string') {
        id.value = queryParam;
    } else if (Array.isArray(queryParam)) {
        id.value = queryParam[0] || '';
    } else {
        id.value = '';
    }
    const res = await showDetail(id.value)
    filmInfo.value = res.data.data[1]
    playInfo.value = res.data.data[0]

})
const newSeat = (payload: number[][]) => {
    const row_1: number[] = []
    const col_1: number[] = []
    payload.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value === 2) {
                row_1.push(rowIndex+1);
                col_1.push(colIndex+1);
            }
        });
    });
    rowIndices.value = row_1
    colIndices.value = col_1
    playInfo.value.Seat = JSON.stringify(payload);
}



const handleClick =async () => {
    const form = new FormData()
    const rowIndicesStr = rowIndices.value.join(' '); // 将数组转化为字符串，用空格分开
    const colIndicesStr = colIndices.value.join(' '); // 将数组转化为字符串，用空格分开
    form.append('row', rowIndicesStr)
    form.append('column', colIndicesStr)
    form.append('play_id',id.value)
    const res = await buyTicket(form)
    console.log(res);
    message.success(res.data.message)
    if (res.data.message === '购票成功') {
        router.push('/snack')
    }
    
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    min-height: 100vh;

    .movieInfo {
        padding-top: 30px;
        display: flex;
        gap: 50px;

        .left {
            img {
                max-width: 200px;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .item {
                font-size: 18px;
            }
        }
    }

    .seat {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .btn {
            margin-top: 20px;
            border: 0;
            width: 100px;
            height: 40px;
            font-size: 16px;
            font-weight: 700;
            background: skyblue;
            border-radius: 20px;
        }
    }
}
</style>