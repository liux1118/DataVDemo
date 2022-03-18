<template>
  <div class="lx-table">
    <qz-pro-table :data-source="list" v-bind="props">
      <!-- <qz-table-column prop="name" label="姓名" /> -->
      <qz-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="60"
      ></qz-table-column>
      <qz-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></qz-table-column>
      <div v-for="propItem in propList" :key="propItem.prop">
        <div>
          <qz-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </qz-table-column>
        </div>
      </div>
    </qz-pro-table>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
    propList: {
      type: Array,
      required: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColum: {
      type: Boolean,
      default: false
    },
  },
  components: {},
  data() {
    return {
      list: null,
      props: null
    };
  },
  methods: {
    getList() {
      this.list = this.dataList
      // console.log('66666');
    }
  },
  created() {
    this.getList(),
    // console.log(this.dataList, '111111')
    this.props = this.childrenProps
  }
};
</script>

<style lang="less"></style>
