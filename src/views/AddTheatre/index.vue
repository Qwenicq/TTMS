<template>
    <div>
        <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="放映厅名字" name="theatreName">
                <a-input v-model:value="formState.theatreName" />
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

interface FormState {
    theatreName: string;
    info: string;
    rows: number | null;
    columns: number | null;
}

const formState = reactive<FormState>({
    theatreName: '',
    info: '',
    rows: null,
    columns: null
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped></style>