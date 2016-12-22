import React, { Component } from 'react';
import Digit from './Digit';

class Digits extends Component {

    render() {
        const { digit, num } = this.props;

        return (
            <div>
                <Digit digit={digit} />
                <Digit digit={num} />
            </div>
        );
    }
}

Digits.propTypes = {
    digit: React.PropTypes.number,
    num: React.PropTypes.number
}

export default Digits;