import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bank from '../views/bank.vue'
import Calendar from '../views/calendar.vue'
import Contacts from '../views/contacts.vue'
import Crypto from '../views/crypto.vue'
import File from '../views/file.vue'
import Invoice from '../views/invoice.vue'
import Kanban from '../views/kanban.vue'
import Todo from '../views/todo.vue'
import Mail from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bank',
    name: 'bank',
    component: Bank
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: Kanban
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice
  },
  {
    path: '/file',
    name: 'file',
    component: File
  },
  {
    path: '/crypto',
    name: 'crypto',
    component: Crypto
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/mail',
    name: 'mail',
    component: Mail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
