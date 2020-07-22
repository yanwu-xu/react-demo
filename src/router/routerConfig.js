
import App from 'page/main'
import About from 'page/about'
import TodoList from 'page/todoList'
import Login from 'page/login'
import Main from 'components/Main'

const routes = [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/main',
                component: Main,
                routes: [
                    {
                        path: 'about',
                        component: About
                    },
                    {
                        path: '/todo',
                        component: TodoList
                    }
                ]
            },
            {
                path: '/login',
                component: Login,
            }
        ]
    }
]

export default routes
