import Layout from '@/components/layout/index.vue'
import Menu from './views/menu'
import Role from './views/role'
import Permission from './views/permission'
import User from './views/user'

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
        },
        {
            path: 'permission',
            component: Permission,
        },
        {
            path: 'user',
            component: User,
        }
    ]
}]