import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            advertisers: [],
            advertisersLimit: 10,
            advertisersOffset: 0,
            advertisersOrder: '',
            advertisersSearchQuery: '',
        },
        mutations: {
            setAdvertisers(state, advertisers) {
                state.advertisers = advertisers;
            },
            setAdvertisersLimit(state, limit) {
                state.advertisersLimit = limit;
            },
            setAdvertisersOffset(state, page) {
                state.advertisersOffset = state.advertisersLimit * page;
            },
            setAdvertisersOrder(state, order) {
                state.advertisersOrder = order;
            },
            setAdvertisersSearchQuery(state, searchQuery) {
                state.advertisersSearchQuery = searchQuery;
            },

        },
        actions: {
            async getAdvertisers({ state, commit }) {
                let { data } = await axios({
                    method: 'get',
                    url: 'http://localhost:1337/api/v1/advertisers',
                    withCredentials: false,
                    params: {
                        order: state.advertisersOrder,
                        offset: state.advertisersOffset,
                        limit: state.advertisersLimit,
                        q: state.advertisersSearchQuery,
                    }
                });

                commit('setAdvertisers', data.data);
            },
            async sortAdvertisers({ state, commit, dispatch }, { prop, order }) {
                commit('setAdvertisersOrder', `${prop}_${order === 1 ? 'asc' : 'desc'}`);

                dispatch('getAdvertisers');
            },
            async paginateAdvertisers({ state, commit, dispatch }, page) {
                commit('setAdvertisersOffset', state.advertisersLimit * page);

                dispatch('getAdvertisers');
            },
            async searchAdvertisers({ state, commit, dispatch }, searchQuery) {
                commit('setAdvertisersSearchQuery', searchQuery);

                dispatch('getAdvertisers');
            },
            // nuxtServerInit ({ commit }) {
            //     const getAdvertisersList = api.advertisersList()
            //         .then((res) => {
            //             commit(types.ADVERTISERS_LIST_UPDATE, res.advertisers_list);
            //         });
                
            //     return Promise.all([getAdvertisersList]);
            // },
        },
    });
};


export default createStore;
