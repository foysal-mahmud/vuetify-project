/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'layout',
        name: 'Layout',
        component: () => import('../views/LayoutView.vue'),
      },
      {
        path: 'navigation',
        name: 'Navigation',
        component: () => import('../views/NavigationView.vue'),
      },
      {
        path: 'forms',
        name: 'Forms',
        component: () => import('../views/FormsView.vue'),
      },
      {
        path: 'data-display',
        name: 'DataDisplay',
        component: () => import('../views/DataDisplayView.vue'),
      },
      {
        path: 'ui-elements',
        name: 'UIElements',
        component: () => import('../views/UIElementsView.vue'),
      },
      {
        path: 'interactive',
        name: 'Interactive',
        component: () => import('../views/InteractiveView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
