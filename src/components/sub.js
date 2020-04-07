import React, { Component } from 'react';

class Sub extends Component {
    render() {
        return (
            <div>
                Sub
                <div>{ this.props.aaa }</div>
            </div>
        );
    }
}

export default Sub;