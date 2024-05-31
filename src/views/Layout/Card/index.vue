<template>
    <div>
        <a-card class="Acard" hoverable style="width: 200px;height: 300px;" @click="handleClick">
            <template #cover>
                <img alt="example" :src="picture" class="img"/>
            </template>
            <span class="film_name">{{ name }}</span>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const prop = defineProps(['info'])
const picture = ref(undefined)
const name = ref(null)
const id = ref(null)
const film = prop.info
const router = useRouter()

if (film) {
    name.value = film.Name
    picture.value = film.Picture
    id.value = film.ID
}

const handleClick = () => {
    router.push(`/filmdetail?id=${id.value}`)
}

</script>

<style scoped lang="scss">
.Acard {
    position: relative;
    .img{
      
        height: 200px;
    }

    .film_name {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        font-family: '字魂';
        overflow: hidden;
    }
}
</style>