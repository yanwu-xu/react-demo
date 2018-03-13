import React, {Component} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import aa from '../../img/home/aa.png'
import bb from '../../img/home/bb.png'
import '../../css/login.scss'
import {loginAction} from '../../redux/actions'

class App extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.imgShow = this.imgShow.bind(this);
    }
    componentDidMount(){
        
    }
    login() {
        this.props.actions.indexImg('/OperationWeb/ad_place/adplace_detail/FDPCBAN0001')
    };
    imgShow() {
        this.props.actions.showHeader()
    }
    render() {
        console.log('indexImg', this.props.indexImg)
        const element = this.props.showImg ? <img className="imgSty" src={bb} /> : ''
        return (
            <div className="login">
                <img src={aa} />
                { element }
                <div className="login-bd">
                    <div className="login-item login-item1">
                        <input className="login-input" ref="phone" type="tel" placeholder="手机号"/>
                    </div>
                    <div className="login-item login-item2">
                        <input className="login-input" ref="code" type="tel" placeholder="验证码"/>
                    </div>
                </div>
                <div className="login-ft">
                    <button className="ui-btn ui-btn1" onClick={this.login}>登录</button>
                </div>
                <div className="backGround" onClick={this.imgShow}></div>
                <div className="backGround1"></div>
            </div>
        );
    }
}

export default connect(state => {
    console.log('22222222222222', state)
    return {
        showImg:state.login.showImg,
        indexImg: state.login.indexImg
    }
},dispatch => {
    return {
        actions: bindActionCreators(loginAction,dispatch)
    }
})(App);
