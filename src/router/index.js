import { createRouter, createWebHistory } from 'vue-router'

const ContactVue = () => import('@/components/ContactVue.vue')
const HomeView = () => import('../views/HomeView.vue')
const InformationVue = () => import('@/components/InformationVue.vue')
const ProjectsVue = () => import('@/components/ProjectsVue.vue')
const PageNotFoundView = () => import('@/views/PageNotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/informacoes',
    name: 'informationVue',
    component: InformationVue
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjectsVue
  },
  {
    path: '/contate-me',
    name: 'contate-me',
    component: ContactVue
  },
  {
    path: '/:catchall(.*)*',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
