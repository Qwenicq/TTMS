<template>
    <div class="card">
        <div class="content">
            <img :src="infomation.Picture" class="img">
            <span class="name">电影:{{ infomation.Name }}</span>
        </div>
        <div class="option">
            <a-button type="primary" @click="showModal">
                <DesktopOutlined />
            </a-button>
            <a-modal v-model:open="open" title="添加放映信息" @ok="handleOk">
                <a-select ref="select" v-model:value="theatre" style="width: 120px" :options="options1" @focus="focus"
                    @change="handleChange"></a-select>
                <a-input v-model:value.lazy="time" autofocus placeholder="放映时间2024-11-1 20:00" />
            </a-modal>
            <a-button type="primary" @click='handleEdit'>
                <EditOutlined />
            </a-button>
            <a-button type="primary" danger @click="handleDel" v-if="infomation.DeletedAt === null">
                <DeleteOutlined />
            </a-button>
            <a-button type="primary" @click="handleUp" v-else>
                <UploadOutlined />
            </a-button>

        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useFilmStore } from '@/stores';
import { delFilm, upFilm, allTheatre, addPlay } from '@/apis/film/index'
import {
    DeleteOutlined,
    EditOutlined,
    UploadOutlined,
    DesktopOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import dayjs from 'dayjs'

const props = defineProps(['info'])
const infomation = props.info
const filmStore = useFilmStore()
const open = ref<boolean>(false);
const theatre = ref<string>('');
const options1 = ref<SelectProps['options']>([]);
const time = ref<string>('')

//  显示弹窗
const showModal = async () => {
    open.value = true;
    const res = await allTheatre()
    options1.value = res.data.data.map((item: { ID: number; Name: string; }) => {
        return {
            value: item.ID,
            label: item.Name
        }
    })

};

const handleOk = async (e: MouseEvent) => {
    try {
        // 创建 FormData 实例
        const form = new FormData();
        
        // 将时间转换为时间戳
        const timestamp = Math.floor(dayjs(time.value).valueOf() / 1000);
        
        // 构建提交表单的数据对象
        const upForm = {
            movie_id: id,
            theatre_id: theatre.value.toString(),
            begin_time: timestamp.toString()
        };
        
        // 将数据对象的键值对添加到 FormData 实例中
        Object.keys(upForm).forEach(key => {
            form.append(key, upForm[key as keyof typeof upForm] as any);
        });
        
        // 提交表单数据并等待响应
        const res = await addPlay(form);
        message.success(res.data.message)
        
        // 关闭弹窗或对话框
        open.value = false;
    } catch (error) {
        // 错误处理
        console.error('提交表单失败:', error);
        message.error('提交表单失败，请重试');
    }
};

//  选择放映厅
const focus = () => {
    console.log('focus');
};

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const handleEdit = () => {
    router.push(`/film/editfilm/${infomation.ID}`)
}

const emit = defineEmits()
const id = infomation.ID.toString()

const handleDel = async () => {

    const res = await delFilm(id)
    message.success(res.data.message)
    setTimeout(() => {
        filmStore.getFilmData()
        emit('flagFn', true)
    }, 200)

}

const handleUp = async () => {
    const res = await upFilm(id)
    setTimeout(() => {
        filmStore.getFilmData()
        emit('flagFn', true)
    }, 200)
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

        .img {
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
        margin-right: 50px;
    }
}
</style>