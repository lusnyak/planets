import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';

import './Top.css';

export default class Top extends Component {
    constructor(){
        super()

        this.getRandomPlanet();
    }
    service = new SwapiService()

    state = {
        id: 3,
        planet: {},
        planets: this.service.getPlanets()
    }

    getRandomPlanet = () => {
        this.state.planets.then((res)=>{
            this.setState({
                planet: res[0]
            })
        })
        
    }

    render(){
        const {planet, id} = this.state;
        return (
            <div className="jumbotron"> 
            
                <div className="row"  >
                    <div className="col-lg-4">
                        <img className="cover" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Card image"/>
                    </div>
                    <div className="col-lg">
                        <h4 className="card-title">{planet.name}</h4>
                        <p className="card-text">
                        {planet.name}
                        </p>
                        {/* <button onClick={this.getRandomPlanet}>Click me</button> */}
                    </div>    
                </div>
            </div>
        )
    }
}