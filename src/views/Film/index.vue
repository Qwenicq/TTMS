<template>
  <div class="order-details">
    <div class="movie-details">
      <h2 class="section-title">电影详情</h2>
      <div class="movie-info">
        <img :src="filmInfo.Picture" :alt="filmInfo.Name" class="movie-poster" />
        <div class="movie-details-content">
          <h3 class="movie-title">{{ filmInfo.Name }}</h3>
          <p class="movie-description"><b>简介:</b> {{ filmInfo.Info }}</p>
          <p class="movie-duration">时长: {{ filmInfo.Duration/60 }} 分钟</p>
          <a-rate v-model:value="rate" @click="handleRate" />
          <div @click="handleClick" class="collect">
            <svg t="1716810193439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2296" width="25" height="25" v-if="!flag">
              <path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" fill="#000000" p-id="2297"></path>
            </svg>
            <svg t="1716810243605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2448" width="25" height="25" v-else>
              <path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" fill="#000000" p-id="2449"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="cinema-list">
      <h2 class="section-title">影院列表</h2>
      <div v-if="Object.keys(groupedCinemas).length">
        <div v-for="(cinemas, theatreName) in groupedCinemas" :key="theatreName" class="theatre-group">
          <h3>{{ theatreName }}</h3>
          <ul class="cinema-list-items">
            <li v-for="cinema in cinemas" :key="cinema.Play.ID" class="cinema-item">
              <div class="cinema-info">
                <p class="cinema-time">{{ dayjs(cinema.Play.BeginTime).format('YYYY-MM-DD HH:MM') }} - {{ dayjs(cinema.Play.EndTime).format('HH:MM') }}</p>
              </div>
              <button class="select-btn" @click="handleSub(cinema.Play.ID)">选择</button>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p>暂无放映安排</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPlay, searchFilm, collectFn, rateFn,collectRank } from '@/apis/film';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { playInfo, filmData } from '@/apis/film/type';
import dayjs from 'dayjs';

// 定义响应式数据
const id = ref<string>('');
const route = useRoute();
const cinemas = ref<playInfo[]>([]);
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
});
const rate = ref<number>(0);
const flag = ref<boolean>(false);
const groupedCinemas = ref<Record<string, playInfo[]>>({});
const router = useRouter()


// 获取数据
onMounted(async () => {
  const queryParam = route.query.id;
  if (typeof queryParam === 'string') {
    id.value = queryParam;
  } else if (Array.isArray(queryParam)) {
    id.value = queryParam[0] || '';
  } else {
    id.value = '';
  }
  const filmRes = await searchFilm(id.value);
  filmInfo.value = filmRes.data.data; 
  const cinemaRes = await getPlay(id.value);
  cinemas.value = cinemaRes.data.data;
  groupByTheatreName(cinemas.value);
  
});

// 按TheatreName分类数据
function groupByTheatreName(data: playInfo[]) {
  groupedCinemas.value = data.reduce((acc, current) => {
    const theatreName = current.TheatreName;
    if (!acc[theatreName]) {
      acc[theatreName] = [];
    }
    acc[theatreName].push(current);
    return acc;
  }, {} as Record<string, playInfo[]>);
}

// 处理收藏操作
const handleClick = async () => {
  flag.value = !flag.value;
  await collectFn(id.value);
};

// 处理评分操作
const handleRate = async () => {
  const res = await rateFn(id.value, rate.value.toString());
  console.log(res);
};

// 处理选择事件
const handleSub = (id:number) => {
  router.push(`/ticket?id=${id}`)
}
</script>

<style scoped lang="scss">
.order-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .section-title {
    margin-top: 20px;
    font-size: 24px;
    margin-bottom: 16px;
  }

  .cinema-list-items {
    list-style: none;
    padding: 0;

    .cinema-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;

      .cinema-info {
        .cinema-name {
          font-size: 18px;
          margin-bottom: 4px;
        }

        .cinema-address {
          color: #777;
        }
        
      }

      .select-btn {
        padding: 8px 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  .collect{
          width: 25px;
          height: 25px;
          cursor: pointer;
        }
  .movie-details {
    .movie-info {
      display: flex;
      align-items: flex-start;

      .movie-poster {
        max-width: 200px;
        margin-right: 16px;
      }

      .movie-details-content {
        .movie-title {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .movie-description {
          margin-bottom: 16px;
        }

        .movie-duration,
        .movie-genre {
          margin-bottom: 4px;
          color: #777;
        }
      }
    }
  }
}
</style>