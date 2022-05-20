<template>
  <div class="main">
    <PageContent :dataList="dataList" :contentTableConfig="contentTableConfig">
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </PageContent>
  </div>
</template>

<script>
import PageContent from '@/components/page-content';
import { contentTableConfig } from './config/content.config';
export default {
  components: {
    PageContent
  },
  data() {
    return {
      dataList: new Array(100).fill(0).map((item, index) => ({
        name: index,
        realname: '2222',
        cellphone: 11111,
        enable: '1111',
        updateAt: new Date().toISOString()
      })),
      contentTableConfig: contentTableConfig
    };
  },
  mounted() {
    // console.log(this.dataList, "999");
  }
};
</script>

<style lang="less"></style>
