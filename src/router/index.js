import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/user/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/user/LoginView.vue')
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: () => import('../views/admin/AdminLoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/user/RegisterView.vue')
    },
    {
      path: '/event/register/:id',
      name: 'eventRegister',
      component: () => import('@/views/user/BookingView.vue')
    },
    {
      path: '/myorders',
      name: 'myorders',
      component: () => import('@/views/user/OrdersView.vue')
    },
    {
      path: '/tickets/:id',
      name: 'ticktesForShows',
      component: () => import('@/views/user/TicketsView.vue')
    },
    {
      path: '/admin/home',
      name: 'AdminDashBoard',
      component: () => import('@/views/admin/DashboardView.vue')
    },
    {
      path: '/admin/events',
      name: 'EventManagement',
      component: () => import('@/views/admin/EventManagementView.vue')
    },
    {
      path: '/add/event',
      name: 'AddEvent',
      component: () => import('@/views/admin/AddEventView.vue')
    },
    {
      path: '/edit/event/:id',
      name: 'EditEvent',
      component: () => import('@/views/admin/EditEventView.vue')
    },
    {
      path: '/edit/event',
      name: 'EditEventList',
      component: () => import('@/views/admin/EditEventListView.vue')
    },
    {
      path: '/remove/event',
      name: 'RemoveEventList',
      component: () => import('@/views/admin/RemoveEventView.vue')
    },
    {
      path: '/add/venue',
      name: 'AddVenue',
      component: () => import('@/views/admin/AddVenueView.vue')
    },
    {
      path: '/edit/venue/:id',
      name: 'EditVenue',
      component: () => import('@/views/admin/EditVenueView.vue')
    },
    {
      path: '/edit/venue',
      name: 'EditVenueList',
      component: () => import('@/views/admin/EditVenueListView.vue')
    },
    {
      path: '/remove/venue',
      name: 'RemoveVenue',
      component: () => import('@/views/admin/RemoveVenueView.vue')
    },
    {
      path: '/admin/venues',
      name: 'VenueManagement',
      component: () => import('@/views/admin/VenueManagementView.vue')
    },
  ]
})

export default router
