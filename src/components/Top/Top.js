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
        isLoading: true
    }

    getRandomPlanet = async () => {
        try {
            const planetId = Math.floor(Math.random()*20)
        const planet = await this.service.getPlanet(planetId);
        this.state.planets.then((res)=>{
            this.setState({
                id: planetId,
                planet: planet,
            })
        })
        } catch(error) {
            console.log(error);
        };        
    }

    render(){
        const {planet, id, isLoading} = this.state;
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
                    </div>    
                </div>
            </div>
        )
    }
}