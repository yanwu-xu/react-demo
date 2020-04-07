import React, { Component } from 'react';

class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date()
        }
    }

    tick() {
        this.setState({
            data: new Date()
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <div>It is {this.state.data.toLocaleTimeString()}.</div>
                <div>common {this.props.aaa}</div>
            </div>
        );
    }
}

export default Comp;