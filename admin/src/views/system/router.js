import Layout from '@/components/layout/index.vue'
import Menu from './views/menu'
import Role from './views/role'

export default  [{
    path: '/system',
    component: Layout,
    redirect: '/system/menu',
    children: [
        {
            path: 'menu',
            component: Menu,
        },
        {
            path: 'role',
            component: Role,
        }
    ]
}]