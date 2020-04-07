
import App from '../components/App'
import Sub from '../components/sub'
import About from '../components/about'
import Home from '../components/home'

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/about',
                component: About,
                auth: true
            },
            {
                path: '/home',
                component: Home,
                routes: [
                    {
                        path: '/home/sub',
                        component: Sub
                    }
                ]
            }
        ]
    }
]

export default routes
