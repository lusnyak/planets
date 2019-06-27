import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render(){
        return (
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                    <a href="../" className="navbar-brand">Discover planets</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="../stars">Planets</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="../stars">Stars</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="../peoples">Peoples</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="../others">Others</a>
                        </li>
                    </ul>
                    </div>
                </div>
             </div>
        )
    }
}