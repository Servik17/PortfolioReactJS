import React, { Component } from 'react';

export default class Cell extends Component {
    render() {
        return <div className={this.props.switched === 1 ? "cell switch" : "cell"}></div>
    }
}