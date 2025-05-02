import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'ButtonExample',
      component: () => import('../components/Button.vue')
    },
    {
      path: '/input',
      name: 'InputExample',
      component: () => import('../components/InputField.vue')
    },
    {
      path: '/list',
      name: 'ListExample',
      component: () => import('../components/Lists.vue'),
      props: {
        users: [
          { name: "John Doe", age: 30 },
          { name: "Jane Smith", age: 25 },
          { name: "Alice Johnson", age: 28 },
          { name: "Bob Brown", age: 35 },
          { name: "Charlie Davis", age: 22 }
        ]
      }
    },
    {
      path: '/calculator',
      name: 'CalculatorExample',
      component: () => import('../components/Calculator.vue')
    },
    {
      path: '/table',
      name: 'TableExample',
      component: () => import('../components/Table.vue')
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;