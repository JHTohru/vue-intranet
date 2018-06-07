import Vuex from 'vuex';
import axios from '~/plugins/axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            advertisers: [],
        },
        mutations: {
            setAdvertisers (state, advertisers) {
                state.advertisers = advertisers;
            },
        },
        actions: {
            async getAdvertisers ({ commit }) {
                let { data } = await axios.get('/advertisers');

                commit('setAdvertisers', data.data);
            },
            // nuxtServerInit ({ commit }) {
                // const getAdvertisersList = api.advertisersList()
                //     .then((res) => {
                //         commit(types.ADVERTISERS_LIST_UPDATE, res.advertisers_list);
                //     });
                //
                // return Promise.all([getAdvertisersList]);
            // },
        },
    });
};

export default createStore;
