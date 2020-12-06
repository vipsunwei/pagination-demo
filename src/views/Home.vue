<template>
  <div style="height: 200px; width: 100%"></div>
  <div v-loading="isLoading">
    <el-table
      :data="tableData"
      :max-height="maxHeight"
      border
      stripe
      style="width: 100%"
    >
      <el-table-column type="index" width="80" align="center"></el-table-column>
      <el-table-column
        v-for="col in columns"
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      @size-change="handlePageSizeChange"
      @current-change="handlePageNumberChange"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="pageSize"
      :current-page="pageNumber"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import response from "../data/index.js";
import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export default {
  name: "Home",
  setup() {
    onMounted(() => {
      window.addEventListener("resize", getMaxHeight);
      getMaxHeight();
      getTableData();
    });
    onUnmounted(() => window.removeEventListener("resize", getMaxHeight));
    function getMaxHeight() {
      const viewHeight = document.body.offsetHeight;
      state.maxHeight = viewHeight - 80;
      console.log(state.maxHeight);
    }

    const columns = [
      {
        prop: "tkyid",
        label: "仪器编号",
      },
      {
        prop: "stationNumber",
        label: "台站编号",
      },
    ];
    const state = reactive({
      tableData: [],
      pageSize: 100,
      pageNumber: 1,
      totalCount: 0,
      maxHeight: "100vh",
      isLoading: false,
      columns,
    });
    function getTableData() {
      state.tableData = response.data?.dataArray;
      state.totalCount = response.data?.totalCount;
    }

    function handlePageSizeChange(val) {
      console.log("current page size: ", val);
    }
    function handlePageNumberChange(val) {
      console.log("current page: ", val);
    }
    return {
      ...toRefs(state),

      handlePageSizeChange,
      handlePageNumberChange,
    };
  },
};
</script>
