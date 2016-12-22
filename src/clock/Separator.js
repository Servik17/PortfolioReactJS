import React, { Component } from 'react';
import Cell from './Cell'

class Separator extends Component {
    render() {
        return (
            <div className="separator">
                <Cell />
                <Cell switched={1} />
                <Cell />
                <Cell switched={1} />
                <Cell />
            </div>
        );
    }
}

export default Separator;