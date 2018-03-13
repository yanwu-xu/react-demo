import 'whatwg-fetch'


export default (url, options) => {
  let config = {
    method: 'get',
    // 解决 fetch 不发送 cookie 到服务端的问题
    // credentials: 'include'
  };
  if (options && options.method && options.method === 'post' || 'put') {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }
  return fetch(url, Object.assign(config, options)).then(res => {return res.json()}).then(res => {return res}).catch((err) => ({err}));
}

