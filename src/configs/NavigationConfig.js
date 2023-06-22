import {
  DashboardOutlined,
  ShoppingCartOutlined, 
  ShoppingOutlined, 
  UserOutlined,
  UsergroupAddOutlined,
  PictureOutlined, 
  GiftOutlined, 
  ShopOutlined, 
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
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
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'sidenav.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promo-codes',
      path: `${APP_PREFIX_PATH}/promo-codes`,
      title: 'sidenav.promoCodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline-shops',
      title: 'sidenav.offlineShops',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'offline-shops.addresses',
          path: `${APP_PREFIX_PATH}/offline-shops/addresses`,
          title: 'sidenav.offlineShops.addresses',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'offline-shops.geoZones',
          path: `${APP_PREFIX_PATH}/offline-shops/geo-zones`,
          title: 'sidenav.offlineShops.geoZones',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'staff',
      path: `${APP_PREFIX_PATH}/staff`,
      title: 'sidenav.staff',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mailing',
      path: `${APP_PREFIX_PATH}/mailing`,
      title: 'sidenav.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}];

const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'sidenav.systems.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobile',
      path: `${APP_PREFIX_PATH}/mobile`,
      title: 'sidenav.systems.mobile',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'sidenav.systems.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ],
}]



const navigationConfig = [
  ...basicNavTree,
  ...systemsNavTree,
]

export default navigationConfig;
