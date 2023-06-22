import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboards',
        path: `${APP_PREFIX_PATH}/dashboards`,
        component: React.lazy(() => import('views/app-views/dashboards')),
    },
    {
        key: 'catalog.goods',
        path: `${APP_PREFIX_PATH}/catalog/goods`,
        component: React.lazy(() => import('views/app-views/catalog/goods')),
    },
    {
        key: 'catalog.categories',
        path: `${APP_PREFIX_PATH}/catalog/categories`,
        component: React.lazy(() => import('views/app-views/catalog/categories')),
    },
    {
        key: 'catalog.collections',
        path: `${APP_PREFIX_PATH}/catalog/collections`,
        component: React.lazy(() => import('views/app-views/catalog/collections')),
    },
    {
        key: 'catalog.combo',
        path: `${APP_PREFIX_PATH}/catalog/combo`,
        component: React.lazy(() => import('views/app-views/catalog/combo')),
    },
    {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/orders`,
        component: React.lazy(() => import('views/app-views/orders')),
    },
    {
        key: 'clients.list',
        path: `${APP_PREFIX_PATH}/clients/list`,
        component: React.lazy(() => import('views/app-views/clients/list')),
    },
    {
        key: 'clients.groups',
        path: `${APP_PREFIX_PATH}/clients/groups`,
        component: React.lazy(() => import('views/app-views/clients/groups')),
    },
    {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        component: React.lazy(() => import('views/app-views/banners')),
    },
    {
        key: 'promo-codes',
        path: `${APP_PREFIX_PATH}/promo-codes`,
        component: React.lazy(() => import('views/app-views/promo-codes')),
    },
    {
        key: 'offlineShops.addresses',
        path: `${APP_PREFIX_PATH}/offline-shops/addresses`,
        component: React.lazy(() => import('views/app-views/offline-shops/addresses')),
    },
    {
        key: 'offlineShops.geoZones',
        path: `${APP_PREFIX_PATH}/offline-shops/geo-zones`,
        component: React.lazy(() => import('views/app-views/offline-shops/geo-zones')),
    },
    {
        key: 'staff',
        path: `${APP_PREFIX_PATH}/staff`,
        component: React.lazy(() => import('views/app-views/staff')),
    },
    {
        key: 'mailing',
        path: `${APP_PREFIX_PATH}/mailing`,
        component: React.lazy(() => import('views/app-views/mailing')),
    },
    {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        component: React.lazy(() => import('views/app-views/settings')),
    },
    {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        component: React.lazy(() => import('views/app-views/logs-items')),
    },
    {
        key: 'mobile',
        path: `${APP_PREFIX_PATH}/mobile`,
        component: React.lazy(() => import('views/app-views/mobile')),
    },

]