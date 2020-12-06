<template>
  <div>
    <el-select
      v-model="value1"
      value-key=""
      placeholder="请选择"
      clearable
      filterable
      @change="onChange"
    >
      <el-option
        v-for="item in items"
        :key="item.id"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      value1: "",
      items: [
        {
          id: 1,
          label: 1,
          value: 1,
        },
        {
          id: 2,
          label: 2,
          value: 2,
        },
      ],
    });
    function onChange(val) {
      console.log("val: ", val);
    }
    return { ...toRefs(state), onChange };
  },
};
</script>

<style lang="scss" scoped>
</style>