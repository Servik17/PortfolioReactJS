import React from 'react';
import { Link } from 'react-router';

export default class Portfolio extends React.Component {
render() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Portfolio ReactJS</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/clock">Clock</Link></li>
                    <li><Link to="/spotify">SpotifyClient</Link></li>
                </ul>
            </nav>

            { this.props.children }

        </div>
    );
}


}