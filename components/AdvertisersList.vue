<template>
    <card
        v-if="advertisers.length > 0"
        title="Lista de Anunciantes"
        body-size="12">
        <template slot="card-header-append">
            <b-button
                to="advertiser/new"
                variant="primary"
                class="float-right">
                <font-awesome-icon :icon="['fas', 'plus']"/>
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
            :columns="gridColumns"
            :rows="gridRows"/>

        <b-pagination
            variant="secondary"
            align="right"
            :total-rows="100"
            :per-page="10"
            v-model="currentPage"/>
    </card>
    <empty-card
        v-else
        title="Nenhum Anunciante cadastrado">
        <b-button
            to="advertiser/new"
            variant="primary">
            <font-awesome-icon :icon="['fas', 'plus']" />
            <span class="ml-2">Criar Advertiser</span>
        </b-button>
    </empty-card>
</template>

<script>
    import moment from 'moment';
    import Card from '~/layouts/Card';
    import Grid from '~/components/Grid';
    import EmptyCard from '~/layouts/EmptyCard';
    import MoneyConsumption from '~/components/MoneyConsumption';
    import StatusChanger from '~/components/StatusChanger';
    import LinksList from '~/components/LinksList';

    export default {
        data() {
            return {
                searchParameter: '',
                currentPage: 1,
            };
        },
        computed: {
            advertisers () {
                return this.$store.state.advertisers;
            },
            gridColumns() {
                return [
                    {
                        name: 'Status',
                    },
                    {
                        name: 'Nome',
                        sort: order => this.sort('name', order),
                    },
                    {
                        name: 'Tipo',
                        sort: order => this.sort('type', order),
                    },
                    {
                        name: 'Rede',
                    },
                    {
                        name: 'Campanhas Ativas',
                        sort: order => this.sort('activeCampaigns', order),
                    },
                    {
                        name: 'Data de Criação',
                        // sort: order => this.sort('createdAt', order),
                    },
                    {
                        name: 'Data de Atualização',
                        // sort: order => this.sort('updatedAt', order),
                    },
                    {
                        name: 'Receita',
                    },
                ];
            },
            gridRows() {
                return this.advertisers.map(advertiser => ({
                    status: {
                        component: StatusChanger,
                        props: { value: advertiser.status },
                    },
                    name: {
                        component: 'b-link',
                        value: advertiser.name,
                        props: { href: `advertiser/${advertiser._id}/dashboard` },
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
        methods: {
            sort(prop, order) {
                this.$store.dispatch('sortAdvertisers', { prop, order });
            },
        },
        components: {
            Card,
            Grid,
            EmptyCard,
        },
    };
</script>
