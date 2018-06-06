export const types = {
    ADVERTISERS_LIST_UPDATE: 'ADVERTISERS_LIST_UPDATE',
};

export const state = () => ({
    advertisers_list: {},
});

export const mutations = {
    [types.ADVERTISERS_LIST_UPDATE] (state, payload) {
        state.advertisers_list = { ...payload };
    },
};