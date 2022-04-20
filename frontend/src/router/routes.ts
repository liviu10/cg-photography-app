import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // URL route for the home page of the web application
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/services',
        name: 'services',
        component: () => import('pages/Services/Index.vue')
      },
      {
        path: '/portfolio/photo',
        component: () => import('pages/Portfolio/Photo/Index.vue'),
      },
      {
        path: '/portfolio/video',
        component: () => import('pages/Portfolio/Video/Index.vue'),
      },
      {
        path: '/deals',
        component: () => import('pages/Deals/Index.vue'),
      },
      {
        path: '/about-me',
        component: () => import('pages/AboutMe/Index.vue'),
      },
      {
        path: '/contact-me',
        component: () => import('pages/ContactMe/Index.vue'),
      },
      {
        path: '/terms-and-conditions',
        component: () => import('pages/TermsAndConditions/Index.vue'),
      }
    ] 
  },

  // URL routes for different HTTP errors
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') },
];

export default routes;
