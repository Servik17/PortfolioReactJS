import React, { Component } from 'react';
import Cell from './Cell';

export default class Row extends Component {
    render() {
        return (
            <div className="row">
                <Cell switched={this.props.num[0]} />
                <Cell switched={this.props.num[1]} />
                <Cell switched={this.props.num[2]} />
            </div>
        );
    }
}
