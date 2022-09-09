
// 引入懒加载
import { lazy } from 'react';

// Home页面的二级路由
export const HomeRoutesChildren = [
    {
        path: '',
        name: '',
        component: lazy(() => import('../views/home/Home')),
        children: '',
        meta: {
            authRole: '', // 作者角色
            requireAuth: '', // 判断是否要求授权
        }
    },
    {
        path: '/', // 路由重定向
        to: '/',
    }
]

const routes = [
    {
        path: '',
        name: '',
        component: lazy(() => import('../views/home/Home')),
        children: HomeRoutesChildren,
        meta: {
            authRole: '', // 作者角色
            requireAuth: '', // 判断是否要求授权
        }
    },
    {
        path: '/', // 路由重定向
        to: '/',
    }
]

export default routes;