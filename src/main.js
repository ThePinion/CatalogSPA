import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCompactDisc, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'

var app = createApp(App)
app.use(router)

library.add(faMagnifyingGlass)
library.add(faCompactDisc)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
