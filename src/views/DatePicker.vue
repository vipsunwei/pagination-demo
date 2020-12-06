<template>
  <div class="about">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      value2: "",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>