<template>
    <div>
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
    </div>
</template>

<script>
    import moment from 'moment';
    import Grid from '~/components/Grid';
    import MoneyConsumption from '~/components/MoneyConsumption';
    import StatusChanger from '~/components/StatusChanger';
    import LinksList from '~/components/LinksList';

    export default {
        props: {
            advertisers: Array,
            sort: Function,
        },
        data() {
            return {
                searchParameter: '',
                currentPage: 1,
            };
        },
        computed: {
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
        components: {
            Grid,
        },
    };
</script>
