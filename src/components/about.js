import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div>About</div>
                <div>{this.props.children}</div>
                <div>111111</div>
            </div>
        );
    }
}

export default About;