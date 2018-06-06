import axios from 'axios'
import { API_BASE_URL } from '../apiconfig.js';

class API {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }

    advertisersList (options = {}) {
        const params = {
            offset: 0,
            limit: 10,
            ...options,
        };

        return axios
            .get(`${this.baseURL}/advertisers`, { params })
            .then((json) => {
                if (json.code !== 'SUCCESS') {
                    throw json.code;
                }

                const advertisers = json.data;

                return {
                    advertisers,
                };
            })
            .catch(e => ({ error: e }));
    }
}

const api = new API(API_BASE_URL);

export default api;
