import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 * FORTAWEASOME CUSTOM
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
// library.add(fab);
library.add(far);

/**
 * CSS GLOBAL
 */
import "@/assets/style/common/reset.css";
import "@/assets/style/common/global.css";

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
