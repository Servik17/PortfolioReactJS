import React, { Component } from 'react';
import Row from './Row';
import switchedRow from './switchedRow';

class Digit extends Component {

    render() {
        const digit = this.props.digit;

        return (
            <div className="digit">
                <Row num={switchedRow(digit, 1)} />
                <Row num={switchedRow(digit, 2)} />
                <Row num={switchedRow(digit, 3)} />
                <Row num={switchedRow(digit, 4)} />
                <Row num={switchedRow(digit, 5)} />
            </div>
        );
    }
}

Digit.propTypes = {
    digit: React.PropTypes.number
}

export default Digit;