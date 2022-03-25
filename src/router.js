import {createRouter,createWebHashHistory} from 'vue-router';
import about from './components/about.vue'
import Home from './components/home.vue'
import page from './page.vue'
// export const router = createRouter({
//     routes:[
//        {
//            path:"/",
//            component: App,
//            children:[
//             { path: 'about', component: about },
//             { path: 'hello', component: Home },
//            ]
//        }
//     ]
// })

export default [
    {
        path:"/",
        component: page,
        children:[
         { path: 'about', component: about },
         { path: 'hello', component: Home },
        ]
    }
 ]
  