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
    }
]