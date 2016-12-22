import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
    render() {
        const num = this.props.num;

        return (
            <div className="row">
                <Cell switched={num[0]} />
                <Cell switched={num[1]} />
                <Cell switched={num[2]} />
            </div>
        );
    }
}

Row.propTypes = {
    num: React.PropTypes.arrayOf(React.PropTypes.number)
}

export default Row;