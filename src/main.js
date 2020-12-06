import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useElementPlus from "./element-plus-ui.js";
import lang from "element-plus/lib/locale/lang/zh-cn";
import locale from "element-plus/lib/locale";
// 设置语言
locale.use(lang);

const app = createApp(App);

useElementPlus(app);

app.use(router).mount("#app");
