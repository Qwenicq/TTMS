<template>
  <div class="order-details">
    <div class="movie-details">
      <h2 class="section-title">电影详情</h2>
      <div class="movie-info">
        <img :src="movie.posterUrl" :alt="movie.title" class="movie-poster" />
        <div class="movie-details-content">
          <h3 class="movie-title">{{ movie.title }}</h3>
          <p class="movie-description">{{ movie.description }}</p>
          <p class="movie-duration">时长: {{ movie.duration }} 分钟</p>
          <p class="movie-genre">类型: {{ movie.genre }}</p>
        </div>
      </div>
    </div>
    <div class="cinema-list">
      <h2 class="section-title">影院列表</h2>
      <ul class="cinema-list-items">
        <li v-for="cinema in cinemas" :key="cinema.id" class="cinema-item">
          <div class="cinema-info">
            <h3 class="cinema-name">{{ cinema.name }}</h3>
            <p class="cinema-address">{{ cinema.address }}</p>
          </div>
          <button class="select-btn">选择</button>
        </li>
      </ul>
    </div>


  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
    const cinemas = ref([
        { id: 1, name: '金逸影城', address: '世纪大道1号' },
        { id: 2, name: '大地影院', address: '国贸大街2号' },
        { id: 3, name: '星美影城', address: '长安路3号' },
      ])
  
      const movie = ref({
        title: '复仇者联盟4',
        description: '一个关于超级英雄的故事',
        posterUrl: 'https://example.com/movie-poster.jpg',
        duration: 180,
        genre: '动作/科幻',
      })
  
  </script>

<style scoped lang="scss">
.order-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .section-title {
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