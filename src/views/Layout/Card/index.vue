<template>
    <div>
        <a-card hoverable style="width: 180px">
            <template #cover>
                <img alt="example"
                    src="https://rmfile.dahe.cn/image/jpeg/20200902/1599036526731827.jpg?imageMogr2/auto-orient/strip/interlace/1/thumbnail/600%3E/format/jpg" />
            </template>
            <span class="film_name">花木兰</span>
        </a-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.film_name {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: '字魂';
    overflow: hidden;
}
</style>