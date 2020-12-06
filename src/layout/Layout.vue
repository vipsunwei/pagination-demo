<template>
  <el-container style="height: 100vh">
    <el-aside class="left" width="240px">
      <el-menu
        style="height: 100%"
        :default-active="active"
        background-color="#009ac6"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="/" @click="navTo('/')"> Pagination </el-menu-item>

        <el-menu-item index="/date-picker" @click="navTo('/date-picker')">
          DatePicker
        </el-menu-item>
        <el-menu-item index="/select" @click="navTo('/select')">
          Select
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    onMounted(() => {
      active.value = location.href.split("#")[1];
    });
    const active = ref("");
    const router = useRouter();
    function navTo(path) {
      router.push({ path });
    }

    return {
      navTo,
      active,
    };
  },
};
</script>

<style lang="scss" scoped>
.left ::v-deep(.el-menu-item.is-active) {
  background-color: #026a8e !important;
  font-weight: bold;
}
</style>