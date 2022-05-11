import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { IEnv } from '@/interfaces/_ICore';
import Home from '../views/Home.vue'
import i18n from '@/modules/_Locales'
import { PageName } from '@/utils/_Constants';

const { VUE_APP_MULTILINGUAL_SUPPORTED_LOCALE, VUE_APP_MULTILINGUAL_DEFAULT_LOCALE }: IEnv = process.env;

const paths: Array<RouteRecordRaw> = [
  {
    path:'',
    name:PageName.HOME,
    component: Home
  }
]

const routes: Array<RouteRecordRaw> = [{
  path: '/:locale',
  component: {
    template: '<router-view></router-view>'
  },
  beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const locale = to.params.locale;
    const supported_locales = VUE_APP_MULTILINGUAL_SUPPORTED_LOCALE?.split(',');
    
    //@ts-ignore
    if(!supported_locales.includes(locale) && VUE_APP_MULTILINGUAL_DEFAULT_LOCALE){
      return next(VUE_APP_MULTILINGUAL_DEFAULT_LOCALE)
    }

    if(i18n.global.locale !== locale){ 
      i18n.global.locale = locale 
    }

    return next();
  },
  children: paths
},{
  path:'/:catchAll(.*)',
  redirect(){
    return VUE_APP_MULTILINGUAL_DEFAULT_LOCALE || 'en'
  }
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;