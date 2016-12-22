import React, { Component } from 'react';

class Cell extends Component {
    
    render() {
        return <div className={this.props.switched === 1 ? "cell switch" : "cell"}></div>
    }
}

Cell.propTypes = {
    switched: React.PropTypes.number
}

export default Cell;