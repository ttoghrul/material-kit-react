// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  /* {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  }, */
  {
    title: 'Org Chart',
    path: '/dashboard/orgchart',
    /* TODO: Add relevant icon */
    icon: getIcon('eva:bar-chart-fill'),
  },
  {
    title: 'Calendar',
    path: '/dashboard/calendar',
    /* TODO: Add relevant icon */
    icon: getIcon('eva:calendar-fill'),
  },
  {
    title: 'Time Off',
    path: '/dashboard/timeoff',
    /* TODO: Add relevant icon */
    icon: getIcon('eva:clock-fill'),
  },
  {
    title: 'Account',
    path: '/dashboard/account',
    /* TODO: Add relevant icon */
    icon: getIcon('eva:person-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
