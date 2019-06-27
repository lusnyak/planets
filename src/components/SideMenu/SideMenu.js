import React, {Component} from 'react';
import './SideMenu.css';

export default class SideMenu extends Component {
    render(){
        return (
            <div className="bs-component">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">Morbi leo risus
                    </a>
                </div>
            </div>
        )
    }
}