import { createApp } from 'vue'
import { globalregister } from './global'

import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { setupStore } from './store'

const app = createApp(App)
app.use(globalregister)
app.use(store)

// 先拿到login的信息 才能获得各个子路由的数据 才能匹配到对应的pat
setupStore()
// path:/user =>user
app.use(router)

app.mount('#app')
