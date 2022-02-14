import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router, VueAxios, axios, VueSweetalert2);

// TODO: Validate routes with jwt

app.config.globalProperties.axios = axios;
axios.defaults.baseURL = "http://localhost:5000/api";

app.mount("#app");
