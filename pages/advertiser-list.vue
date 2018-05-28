<template>
    <div>
        <p>Total: {{ advertisers_list.total }}</p>
        <table>
            <!--<thead v-if="advertisers_list.advertisers.length > 0">-->
            <!--<tr>-->
                <!--<th v-for="(val, key) in advertisers_list.advertisers[0]"-->
                    <!--:key="key"-->
                    <!--:html="key"/>-->
            <!--</tr>-->
            <!--</thead>-->
            <tbody>
            <tr
                    v-for="advertiser of advertisers_list.advertisers"
                    :key="advertiser.id">
                <td
                    v-for="(val, key) in advertiser"
                    :key="key">{{ val }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import api from '~/lib/api';
    import { types } from '~/store';

    export default {
        fetch ({ store, params }) {
            return api.advertisersList()
                .then((json) => {
                    console.dir(json);
                    store.commit(types.ADVERTISERS_LIST_UPDATE, json.advertisers_list);
                });
        },
        computed: mapState(['advertisers_list']),
    };
</script>