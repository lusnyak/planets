import React, {Component} from 'react';
import './SideMenu.css';

export default class SideMenu extends Component {
    render(){
        return (
            <div class="bs-component">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ">Morbi leo risus
                    </a>
                </div>
            </div>
        )
    }
}