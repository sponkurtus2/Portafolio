import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'; // Elige un tema
import 'primevue/resources/primevue.min.css'; // Estilos principales
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons
import '@picocss/pico/css/pico.min.css'


const vue_app = createApp(App);
vue_app.use(PrimeVue)
vue_app.mount("#app")