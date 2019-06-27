export default class SwapiService {

    _baseUrl = 'https://swapi.co/api/';

    async _getData(url) {
        try {
            const data = await fetch(`${this._baseUrl}${url}`);
            if (!data.ok){
                throw new Error(`Status code: ${data.status}`)
            }
            return await data.json();
        } catch(error){
            console.log(error);
        }
    }

    _transformPlanetData(obj){
        return {
            climate: obj.climate,
            diameter: obj.diameter,
            name: obj.name,
            population: obj.population
        }
    }

    _transformUserData(obj){
        return {
            fullname: obj.name,
            gender: obj.gender,
            birth_year: obj.birth_year,
            mass: obj.mass
        }
    }

    _transformStarData(obj){
        return {
            name: obj.name,
            model: obj.model,
            lenght: obj.lenght
        }
    }
    _
    async getPlanet(id) {
        const result = await this._getData(`planets/${id}`);  // template literal `${var}value`
        return this._transformPlanetData(result);
    }

    async getPlanets() {
        const result = await this._getData('planets');
        return result.results.map(this._transformPlanetData)
    }

    async getUser(id) {
        const result = await this._getData(`people/${id}`);  // template literal `${var}value`
        return this._transformUserData(result);
    }

    async getUsers() {
        const result = await this._getData('people');
        return result.results.map(this._transformUserData)
    }

    async getStar(id) {
        const result = await this._getData(`starships/${id}`);  // template literal `${var}value`
        return this._transformStarData(result);
    }

    async getStars() {
        const result = await this._getData('starships');
        return result.results.map(this._transformStarData)
    }
}
