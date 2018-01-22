import React, {Component} from 'react'
import './login.scss'
class App extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    login() {
        var phone = this.refs.phone.value.trim();
        var code = this.refs.code.value.trim();
        $.ajax({
            url: '/OperationWeb/ad_place/adplace_detail/FDPCBAN0001',
            type: 'get',
            success: (data) => {
                alert('成功！！！')
            },
            error: (err) => {
                alert('失败！！！')
            }
        })
    };
    render() {
        return (
            <div className="login">
                <div className="login-bd">
                    <div className="login-item login-item1">
                        <input className="login-input" ref="phone" type="tel" placeholder="请输入手机号"/>
                    </div>
                    <div className="login-item login-item2">
                        <input className="login-input" ref="code" type="tel" placeholder="请输入验证码"/>
                    </div>
                </div>
                <div className="login-ft">
                    <button className="ui-btn ui-btn1" onClick={this.login}>登录</button>
                </div>
            </div>
        );
    }
}

export default App
