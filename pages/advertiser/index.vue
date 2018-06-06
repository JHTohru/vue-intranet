<template>
    <card
        title="Lista de Anunciantes"
        body-size="12">
        <template slot="card-header-append">
            <b-button
                to="advertiser/new"
                variant="primary"
                class="float-right">
                <font-awesome-icon :icon="['fas', 'plus']" />
                <span class="ml-2">Criar Advertiser</span>
            </b-button>
        </template>

        <div class="input-group w-25 float-right mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text bg-transparent p-0 border-right-0">
                    <button class="btn bg-transparent">
                        <font-awesome-icon
                            :icon="['far', 'search']"
                            class="text-secondary"/>
                    </button>
                </div>
            </div>
            <input
                v-model="searchParameter"
                type="text"
                class="form-control  border-left-0"
                placeholder="Buscar"/>
        </div>

        <grid
            :columns="grid_columns"
            :rows="grid_rows"/>

        <b-pagination
            variant="secondary"
            align="right"
            :total-rows="100"
            :per-page="10"
            v-model="currentPage"/>
    </card>
    <!--<empty-card-->
        <!--v-else-->
        <!--title="Nenhum Anunciante cadastrado">-->
        <!--<b-button-->
            <!--to="advertiser/new"-->
            <!--variant="primary">-->
            <!--<font-awesome-icon :icon="['fas', 'plus']" />-->
            <!--<span class="ml-2">Criar Advertiser</span>-->
        <!--</b-button>-->
    <!--</empty-card>-->
</template>

<script>
    import moment from 'moment';
    import Card from '~/layouts/Card';
    import EmptyCard from '~/layouts/EmptyCard';
    import Grid from '~/components/Grid';
    import MoneyConsumption from '~/components/MoneyConsumption';
    import StatusChanger from '~/components/StatusChanger';
    import LinksList from '~/components/LinksList';
    import api from '~/lib/api';

    export default {
        // async fetch ({ store, params }) {
        //     await store.dispatch('advertiser/list');
        // },
        async asyncData ({ params }) {
            return api.advertisersList();
        },
        props: [
            'currentPage',
        ],
        // data() {
        //     return {
        //         advertisers: [
        //             {
        //                 status: 1,
        //                 id: '59ad85d54524e41b3bf4f0ee',
        //                 name: 'AOC',
        //                 type: 'seller',
        //                 networks: [{
        //                     id: '58120a6069c18664b84f3f58',
        //                     name: 'Alpha',
        //                 }],
        //                 activeCampaigns: 3,
        //                 createdAt: '2018-05-03T03:00:00Z',
        //                 updatedAt: '2018-08-01T03:00:00Z',
        //                 activeCampaignsConsumption: 1212.32,
        //                 activeCampaignsBudget: 3600,
        //             },
        //             {
        //                 status: 1,
        //                 id: '580563fee4b08742287c30e3',
        //                 name: 'Acer',
        //                 type: 'seller',
        //                 networks: [
        //                     {
        //                         id: '58090104e4b070707cb7dc02',
        //                         name: 'Bravo',
        //                     },
        //                 ],
        //                 activeCampaigns: 4,
        //                 createdAt: '2018-02-10T03:00:00Z',
        //                 updatedAt: '2018-03-29T03:00:00Z',
        //                 activeCampaignsConsumption: 2931.09,
        //                 activeCampaignsBudget: 5600,
        //             },
        //             {
        //                 status: 2,
        //                 id: '580563fee4b08742287c30e3',
        //                 name: 'Epson',
        //                 type: 'seller',
        //                 networks: [
        //                     {
        //                         id: '58090104e4b070707cb7dc02',
        //                         name: 'Charlie',
        //                     },
        //                     {
        //                         id: '58090104e4b070707cb7dc02',
        //                         name: 'Delta',
        //                     },
        //                 ],
        //                 activeCampaigns: 4,
        //                 createdAt: '2018-01-02T03:00:00Z',
        //                 updatedAt: '2018-04-15T03:00:00Z',
        //                 activeCampaignsConsumption: 3102.77,
        //                 activeCampaignsBudget: 12000,
        //             },
        //         ],
        //         total: 1,
        //         searchParameter: '',
        //     };
        // },
        computed: {
            grid_columns() {
                return [
                    'Status',
                    'Nome',
                    'Tipo',
                    'Rede',
                    'Campanhas Ativas',
                    'Data de criação',
                    'Data de atualização',
                    'Receita'
                ];
            },
            grid_rows() {
                return this.advertisers.map(advertiser => ({
                    status: {
                        component: StatusChanger,
                        props: { value: advertiser.status },
                    },
                    name: {
                        component: 'b-link',
                        value: advertiser.name,
                        props: { href: `advertiser/${advertiser.id}/dashboard` },
                    },
                    type: advertiser.type.charAt(0).toUpperCase() + advertiser.type.substr(1),
                    network: {
                        component: LinksList,
                        props: {
                            links: advertiser.networks.map(network => ({
                                href: `/network/${network.id}`,
                                text: network.name,
                            })),
                        },
                    },
                    activeCampaigns: advertiser.activeCampaigns,
                    createdAt: moment(advertiser.createdAt).format('DD/MM/YYYY'),
                    updatedAt: moment(advertiser.updatedAt).format('DD/MM/YYYY'),
                    budget: {
                        component: MoneyConsumption,
                        props: { 'spent-money': advertiser.activeCampaignsConsumption, 'total-money': advertiser.activeCampaignsBudget },
                    },
                }));
            },
        },
        components: {
            Card,
            EmptyCard,
            Grid,
        },
    };
</script>
