<template>
  <div class="page-content">
    <LxTable :dataList="list" v-bind="contentTableConfig">
      <!-- <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template> -->
      <template #updateAt="scope">
        <span>{{
          scope.row.updateAt | timeFormat("YYYY-MM-DD HH:mm:ss")
        }}</span>
      </template>
      <template #handler="scope">
        <div class="hander-btns">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color: red"
            @click="handleDeleteClick(scope.row)"
            >分解</el-button
          >
        </div>
      </template>

      <!-- 3.在page-content中动态插入剩余(各个页面私有的)的插槽 -->
      <div v-for="item in toArray" :key="item.prop">
        <!-- <template v-if="item.slotName">
          <template #[item.slotName]="scope">
            <slot :name="item.slotName" :row="scope.row"></slot>
          </template>
        </template> -->

        <!-- <template #[item.slotName]="scope">
          <div>
            <div v-if="item.slotName">
              <slot :name="item.slotName" :row="scope.row"></slot>
            </div>
          </div>
        </template> -->
      </div>
    </LxTable>
  </div>
</template>

<script>
import LxTable from "@/base-ui/table";
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
    contentTableConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    LxTable,
  },
  data() {
    return {
      list: null,
      otherPropSlots: null,
      toArray: null,
    };
  },
  methods: {
    getOtherPropSlots() {
      this.otherPropSlots = this.contentTableConfig?.propList.filter((item) => {
        // if (item.slotName === 'createAt') return false
        // if (item.slotName === 'updateAt') return false
        if (item.slotName === "handler") return false;
        return true;
      });
      // this.toArray = JSON.parse(JSON.stringify(this.otherPropSlots))
      // console.log(this.toArray, '66666');
      console.log(JSON.parse(JSON.stringify(this.otherPropSlots)), "55555");
      // return JSON.parse(JSON.stringify(this.otherPropSlots))
      // console.log(JSON.parse(JSON.stringify(this.otherPropSlots)), '55555');
    },
    getDataList() {
      this.list = this.dataList;
      this.toArray = JSON.parse(JSON.stringify(this.otherPropSlots));
      console.log(this.toArray, "66666");
      // console.log('object');
    },
  },
  created() {
    this.getOtherPropSlots(), this.getDataList();
    // console.log(this.dataList, '33333');
  },
};
</script>

<style lang="less"></style>
