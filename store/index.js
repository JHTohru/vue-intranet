import Vuex from 'vuex';
import api from '~/lib/api';

export const types = {
    ADVERTISERS_LIST_UPDATE: 'ADVERTISERS_LIST_UPDATE',
};

const createStore = () => {
    return new Vuex.Store({
        state: {
            advertisers_list: {},
        },
        mutations: {
            [types.ADVERTISERS_LIST_UPDATE] (state, payload) {
                state.advertisers_list = { ...payload };
            },
        },
        actions: {
            nuxtServerInit ({ commit }) {
                const getAdvertisersList = api.advertisersList()
                    .then((res) => {
                        commit(types.ADVERTISERS_LIST_UPDATE, res.advertisers_list);
                    });

                return Promise.all([getAdvertisersList]);
            },
        },
    });
};

export default createStore;
