/* eslint-disable */

<template>
  <a-upload-dragger
                    v-model="fileList"
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    @change="handleChange"
                    @drop="handleDrop">
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>

  </a-upload-dragger>
</template>

<script>
import { message } from 'ant-design-vue'

export default {
  name: 'FileUpload',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleChange (info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    handleDrop (e) {
      console.log('Dropped files')
    }
  }
}
</script>
<script setup>
import { message } from 'ant-design-vue';
</script>
