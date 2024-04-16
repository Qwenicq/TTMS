<template>
    <div class="container">
        <Top />
        <div class="content">
            <a-row>
                <a-col :span="16">
                    <div class="HotShow">
                        <div class="top">
                            <span>正在热映(8部)</span>
                        </div>
                        <div class="bottom">
                            <Card v-for="item in 8" :key="item" />
                        </div>
                    </div>
                    <div class="ComingShow">
                        <div class="top">
                            <span>即将上映(8部)</span>
                        </div>
                        <div class="bottom">
                            <Card v-for="item in 8" :key="item" />
                        </div>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="Favorites_ranking">
                        <div class="top">
                            <span>收藏排行榜</span>
                        </div>
                        <div class="bottom">
                            <ul class="rank-wrapper">
                                <li class="rank_item rank_top">
                                    <a href="">
                                        <div class="left">
                                            <i class="rank_top_icon"></i>
                                            <img src="https://gw.alicdn.com/imgextra/i4/2213824393255/O1CN01VtpAoh1Zuq8SHLwDi_!!2213824393255.jpg_300x300Q75.jpg_.webp"
                                                alt="">
                                            <span>嘟嘟嘟1111111111111111111111111111111111111</span>
                                        </div>
                                        <div class="right">

                                        </div>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index">2</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index">3</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index rank_index_4">4</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index rank_index_4">5</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="Rate_ranking">
                        <div class="top">
                            <span>评分排行榜</span>
                        </div>
                        <div class="bottom">
                            <ul class="rank-wrapper">
                                <li class="rank_item rank_top">
                                    <a href="">
                                        <div class="left">
                                            <i class="rank_top_icon"></i>
                                            <img src="https://gw.alicdn.com/imgextra/i4/2213824393255/O1CN01VtpAoh1Zuq8SHLwDi_!!2213824393255.jpg_300x300Q75.jpg_.webp"
                                                alt="">
                                            <span>嘟嘟嘟1111111111111111111111111111111111111</span>
                                        </div>
                                        <div class="right">

                                        </div>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index">2</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index">3</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index rank_index_4">4</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="rank_item ">
                                    <a href="">
                                        <span class="normal_link">
                                            <i class="rank_index rank_index_4">5</i>
                                            <span class="rank_movie_name">哥斯拉大战金刚2：帝国崛起</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a-col>
            </a-row>

        </div>
    </div>
</template>

<script setup lang="ts">
import Top from './Top/index.vue'
import Card from './Card/index.vue'
</script>

<style scoped lang="scss">
.container {
    position: relative;

    .content {
        margin-top: 40px;
        width: 60vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        .HotShow {
            .top {
                height: 60px;

                span {
                    font-size: 28px;
                    color: red;
                    font-weight: 500;
                }
            }

            .bottom {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
            }
        }

        .ComingShow {
            margin-top: 40px;

            .top {
                height: 60px;

                span {
                    font-size: 28px;
                    color: skyblue;
                    font-weight: 500;
                }
            }

            .bottom {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
            }
        }

        .Favorites_ranking {
            .top {
                span {
                    font-size: 28px;
                    color: red;
                    font-weight: 500;

                }
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;

                .rank-wrapper {
                    list-style-type: none;

                    a {
                        color: black;
                    }

                    .rank_item {
                        cursor: pointer;
                        margin-bottom: 10px;
                    }

                    .rank_top {
                        .left {
                            position: relative;
                            display: inline-block;

                            .rank_top_icon {
                                background: url('@/assets/images/冠军.png') no-repeat;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 22px;
                                height: 25px;
                                background-size: contain;
                            }

                            img {
                                vertical-align: middle;
                                width: 120px;
                                height: 70px;
                            }

                            span {
                                display: inline-block;
                                width: 150px;
                                font-family: '字魂';
                                margin-left: 10px;
                                font-size: 20px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .normal_link {
                        display: block;
                        height: 36px;
                        line-height: 36px;
                    }

                    .rank_index {
                        font-size: 24px;
                        color: #ef4238;
                        vertical-align: top;
                    }

                    .rank_movie_name {
                        display: inline-block;
                        max-width: 190px;
                        text-overflow: hidden;
                        white-space: nowrap;
                        vertical-align: top;
                        text-overflow: ellipsis;
                        font-size: 16px;
                        margin-left: 10px;
                    }

                    .rank_index_4 {
                        color: #999;
                    }
                }
            }
        }
        .Rate_ranking {
            margin-top: 70px;
            .top {
                span {
                    font-size: 28px;
                    color: rgb(192, 192, 35);
                    font-weight: 500;

                }
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;

                .rank-wrapper {
                    list-style-type: none;

                    a {
                        color: black;
                    }

                    .rank_item {
                        cursor: pointer;
                        margin-bottom: 10px;
                    }

                    .rank_top {
                        .left {
                            position: relative;
                            display: inline-block;

                            .rank_top_icon {
                                background: url('@/assets/images/冠军.png') no-repeat;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 22px;
                                height: 25px;
                                background-size: contain;
                            }

                            img {
                                vertical-align: middle;
                                width: 120px;
                                height: 70px;
                            }

                            span {
                                display: inline-block;
                                width: 150px;
                                font-family: '字魂';
                                margin-left: 10px;
                                font-size: 20px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .normal_link {
                        display: block;
                        height: 36px;
                        line-height: 36px;
                    }

                    .rank_index {
                        font-size: 24px;
                        color: #ef4238;
                        vertical-align: top;
                    }

                    .rank_movie_name {
                        display: inline-block;
                        max-width: 190px;
                        text-overflow: hidden;
                        white-space: nowrap;
                        vertical-align: top;
                        text-overflow: ellipsis;
                        font-size: 16px;
                        margin-left: 10px;
                    }

                    .rank_index_4 {
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>