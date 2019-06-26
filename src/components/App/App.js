import React, {Component} from 'react';
import Header from '../Header';
import Container from '../Container';
import './App.css';

export default class App extends Component {
    render(){
        return (
            <>
                <Header/>
                <Container/>
            </>
        )
    }
}