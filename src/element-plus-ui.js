import {
  ElPagination,
  ElTable,
  ElTableColumn,
  ElContainer,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElSelect,
  ElOption,
  ElDatePicker,
} from "element-plus";

const components = [
  ElPagination,
  ElTable,
  ElTableColumn,
  ElContainer,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElLoading,
  ElSelect,
  ElOption,
  ElDatePicker,
];

function useElementPlus(app) {
  components.map((component) => {
    app.use(component);
  });
}

export default useElementPlus;
