import { DashboardOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const basicNavTree = [{
  key: 'basic',
  path: `${APP_PREFIX_PATH}/basic`,
  title: 'sidenav.basic',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards',
      path: `${APP_PREFIX_PATH}/dashboards`,
      title: 'sidenav.basic.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      title: 'sidenav.basic.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'goods',
          path: `${APP_PREFIX_PATH}/catalog/goods`,
          title: 'sidenav.basic.catalog.goods',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/catalog/categories`,
          title: 'sidenav.basic.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/catalog/collections`,
          title: 'sidenav.basic.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/catalog/combo`,
          title: 'sidenav.basic.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },

    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'sidenav.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      title: 'sidenav.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clients.list',
          path: `${APP_PREFIX_PATH}/clients/list`,
          title: 'sidenav.clients.list',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'clients.groups',
          path: `${APP_PREFIX_PATH}/clients/groups`,
          title: 'sidenav.clients.groups',
          breadcrumb: false,
          submenu: []
        },
      ]
    },

  ]
}]


const navigationConfig = [
  ...basicNavTree,
]

export default navigationConfig;
