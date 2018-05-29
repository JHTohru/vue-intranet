import Vue from 'vue';
import accounting from 'accounting';

Vue.filter('formatMoney',
    value => accounting.formatMoney(value, {
        symbol: 'R$ ',
        thousand: '.',
        decimal: ',',
        precision: 2,
    }));
