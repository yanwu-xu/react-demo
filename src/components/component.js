import React, { Component } from 'react';

class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            value: '1'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange(event) {
        console.log('change111111')
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>{this.state.value}
                    <input value={this.state.value} onChange={this.handleChange} aria-label='qqqqqq' aria-required="true"/>
                </div>
                <div>It is {this.state.data.toLocaleTimeString()}.</div>
                <div>common {this.props.aaa}</div>
                <button type="submit">提交</button>
            </form>
        );
    }
}

export default Comp;