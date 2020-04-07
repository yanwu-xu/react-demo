import React, { Component } from 'react';
import Comp from './component'

class Home extends Component {
    constructor(props) {
        super(props)
        this.target = true
        this.state = {
            target: true,
            list: [1,2,3,4,5]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.state.list.push(1)
        const list = this.state.list
        this.setState({
            target: !this.state.target,
            list
        })
    }

    render() {
        const list = this.state.list.map((ele, index) => <div key={index.toString()}>{ele}</div>)
        return (
            <div>
                <div onClick={this.handleClick} style={{color: this.state.target ? 'red' : 'blue'}}>Home</div>
                <Comp aaa="aaaa" data={new Date()}></Comp>
                <div>{ this.props.children }</div>
                {list}
            </div>
        );
    }
}

export default Home;