import React, { Component } from 'react';
import Digit from './Digit';

export default class Digits extends Component {
    render() {
        return (
            <div>
                <Digit digit={this.props.digit} />
                <Digit digit={this.props.num} />
            </div>
        );
    }
}