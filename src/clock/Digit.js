import React, { Component } from 'react';
import Row from './Row';
import switchedRow from './switchedRow';

export default class Digit extends Component {
    render() {
        return (
            <div className="digit">
                <Row num={switchedRow(this.props.digit, 1)} />
                <Row num={switchedRow(this.props.digit, 2)} />
                <Row num={switchedRow(this.props.digit, 3)} />
                <Row num={switchedRow(this.props.digit, 4)} />
                <Row num={switchedRow(this.props.digit, 5)} />
            </div>
        );
    }
}