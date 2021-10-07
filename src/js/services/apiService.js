import config from "../config/apiConfig";
import axios from "axios";

/**
 * /countries - arr of countries
 * /cities - arr of cities
 * /prices /cheap - arr of available [countries]
 */
class Api {
    constructor(config) {
        this.url = config.url
    }

    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`)
            return response.data
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }

    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`)
            return response.data
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }

    async prices(params) {

    }
}


const api = new Api(config)

export default api;
