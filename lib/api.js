import axios from 'axios'
import {API_BASE_URL} from '../apiconfig.js';

class API {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }

    advertisersList (options) {
        const params = {
            page: 1,
            per_page: 10,
            ...options
        };

        return axios.get(`${this.baseURL}/advertisers`, { params })
            .then((json) => {
                const {advertisers, total} = json.data;

                return {
                    advertisers_list: {
                        advertisers,
                        total,
                    },
                };
            })
            .catch(e => ({ error: e }));
    }
}

const api = new API(API_BASE_URL);

export default api;
