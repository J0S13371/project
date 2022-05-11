import { PageName } from '@/utils/_Constants';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import Slider from '../components/AnswersSliderTest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.HOME,
    component: Home
  },
  {
    path: '/quiz',
    name: PageName.QUIZ,
    component: Quiz
  },
  {
    path: '/result',
    name: PageName.RESULT,
    component: Result
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
