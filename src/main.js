import { createApp } from "vue";
import router from "@/routes/router.js";
import AppPages from './AppPages.vue'
import AppOnePage from './AppOnePage.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {createScrollRevealDirective, vScrollReveal} from 'vue-scroll-reveal';

library.add(fas)

dom.watch()

const appType = 1; // 1 = AppPages, 2 = AppOnePage
let app;
if (appType === 1) {
    app = createApp(AppPages);
    app.use(router);
} else {
    app = createApp(AppOnePage);
    app.use(router);
}



app.component('font-awesome-icon', FontAwesomeIcon)
app.use(BootstrapIconsPlugin);



const defaultScrollReveal = createScrollRevealDirective({
    class: 'v-scroll-reveal',
    duration: 2000,
    scale: 1,
    distance: '10px'
});
app.directive('scroll-reveal', defaultScrollReveal);

app.mount('#app');