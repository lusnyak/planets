import React, {Component} from 'react';
import './Container.css';
import Top from '../Top';
import SideMenu from '../SideMenu';
import Content from '../Content';

export default class Container extends Component {
    render(){
        return (
            <div class="container">
              <Top/>
              <div class="row">
                <SideMenu/>
                <Content/>
                 </div>
             </div>
        )
    }
}