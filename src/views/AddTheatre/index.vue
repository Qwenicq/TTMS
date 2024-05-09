<template>
    <div class="container">
        <a-form class="form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="放映厅名字" name="name">
                <a-input v-model:value="formState.name" />
            </a-form-item>

            <a-form-item label="简介" name="info">
                <a-input v-model:value="formState.info" />
            </a-form-item>

            <a-form-item label="座位行数" name="rows">
                <a-input v-model:value="formState.rows" />
            </a-form-item>

            <a-form-item label="座位列数" name="columns">
                <a-input v-model:value="formState.columns" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">确定创建</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { addTheatre} from '@/apis/film/index'
import { message } from 'ant-design-vue';

interface FormState {
    name: string;
    info: string;
    rows: number | null;
    columns: number | null;
}

const formState = reactive<FormState>({
    name: '',
    info: '',
    rows: null,
    columns: null
});
const onFinish =async (values: FormState) => {
    const formData = new FormData()
    Object.keys(values).forEach(key => {
        // @ts-ignore
        formData.append(key, values[key])
    })
    const res = await addTheatre(formData)
    message.success(res.data.message)
    formState.name = ''
    formState.info = ''
    formState.columns = null
    formState.rows = null
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="scss">
.container {
    .form {
        margin-top: 30px;
        margin-left: 300px;
    }
}
</style>