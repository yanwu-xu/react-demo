
import App from '../components/App'
import About from '../components/About'
import TodoList from '../components/TodoList'

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/todo',
                component: TodoList,
            }
        ]
    }
]

export default routes
