import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios, VueSweetalert2);

app.config.globalProperties.axios = axios;
axios.defaults.baseURL = "http://localhost:5000/api";

app.mount("#app");
