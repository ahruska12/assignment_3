import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'List',
    component: () => import('../components/List')
  },
  {
    path: '/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Create')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
