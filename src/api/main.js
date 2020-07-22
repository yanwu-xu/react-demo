import fetch from './fetch'

export function getHtml() {
    return fetch({
        url: 'https://www.redux.org.cn/docs/introduction/Motivation.html',
        method: 'get'
    })
}

