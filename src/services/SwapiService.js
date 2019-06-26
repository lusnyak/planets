export default class SwapiService {

    _baseUrl = 'https://swapi.co/api/';

    async _getData(url) {
        try {
            const data = await fetch(`${this._baseUrl}${url}`);
            return await data.json();
        } catch(error){
            console.log(error);
        }
    }

    _transformPlanetData(obj){
        return {
            exanak: obj.climate,
            tramagic: obj.diameter,
            anun: obj.name,
            mardaqanak: obj.population
        }
    }

    _
    async getPlanet(id) {
        const result = await this._getData(`planets/${id}`);  // template literal `${var}value`
        const planet = this._transformPlanetData(result);
        console.log(planet);
    }

    async getPlanets() {
        const result = await this._getData('planets');
        const plantes = result.results.map(this._transformPlanetData)
        console.log(plantes);
    }

    async getUser(id) {

    }

    async getUsers() {

    }

    async getStar(id) {

    }

    async getStars() {

    }
}
