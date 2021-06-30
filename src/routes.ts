export default [
  {
    path: '/',
    component: '@/layout/GeneralLayout',
    routes: [
      { path: '/base', component: '@/pages/base/dashboard/BaseDashboard' },
      { path: '/base/:baseId', component: '@/pages/base/view/BaseView' },

      { path: '/', component: '@/pages/event/dashboard/EventDashboard' },
      { path: '/event/:eventId', component: '@/pages/event/view/EventView' },
    ],
  },

];
