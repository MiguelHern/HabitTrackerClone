import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AllHabits from '@/views/AllHabits.vue'
import TimeOfDay from '@/views/TimeOfDay.vue'
import JournalLayout from '@/layouts/JournalLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'journal',
          name: 'journal-layout',
          component: JournalLayout,
          children: [
            {
              path: '',
              name: 'home-view',
              component: HomeView,
            },
            {
              path: 'all-habits',
              name: 'all-habits',
              component: AllHabits,
            },
            {
              path: 'time-of-day',
              name: 'time-of-day',
              component: TimeOfDay,
            },
          ],

        },
      ],
    },
  ],
});

export default router
