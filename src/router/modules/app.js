const routes = [
  {
    path: '/',
    name: "home",
    redirect: "/register-info",
    component: () => import('@/modules/App/Home.vue'),
    meta: {
      layout: 'Home',
      requiresAuth: false,
      name: "home"
    }
  }
]

export default routes
