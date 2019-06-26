import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render(){
        return (
            <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div class="container">
                    <a href="../" class="navbar-brand">Discover planets</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../stars">Planets</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="../stars">Stars</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="../peoples">Peoples</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                        <a class="nav-link" href="../others">Others</a>
                        </li>
                    </ul>
                    </div>
                </div>
             </div>
        )
    }
}