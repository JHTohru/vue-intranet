<template>
    <b-row no-gutters>
        <b-col cols="5">
            <b-breadcrumb :items="breadcrumb"/>

            <status-changer :value="status"/>
        </b-col>
        <b-col cols="2">
            <p class="font-weight-bold">Campanhas ativas</p>
            <p>{{ activeCampaigns }}</p>
        </b-col>
        <b-col cols="1">
            <p class="font-weight-bold">Tipo</p>
            <p>{{ formattedType }}</p>
        </b-col>
        <b-col cols="1">
            <p class="font-weight-bold">Redes</p>
            <p><links-list :links="networksLinks"/></p>
        </b-col>
        <b-col cols="1">
            <p class="font-weight-bold">Criado em</p>
            <p>{{ formattedCreatedAt }}</p>
        </b-col>
        <b-col cols="2">
            <p class="font-weight-bold">Orçamento</p>
            <money-consumption
                :spentMoney="activeCampaignsConsumption"
                :totalMoney="activeCampaignsBudget"/>
        </b-col>
    </b-row>
</template>

<script>
    import moment from 'moment';
    import StatusChanger from '~/components/StatusChanger';
    import LinksList from '~/components/LinksList';
    import MoneyConsumption from '~/components/MoneyConsumption';

    export default {
        data() {
            return {
                status: 2,
                id: '580563fee4b08742287c30e3',
                name: 'Epson',
                type: 'seller',
                networks: [
                    {
                        id: '58090104e4b070707cb7dc02',
                        name: 'Charlie',
                    },
                    {
                        id: '58090104e4b070707cb7dc02',
                        name: 'Delta',
                    },
                ],
                activeCampaigns: 4,
                createdAt: '2018-01-02T03:00:00Z',
                updatedAt: '2018-04-15T03:00:00Z',
                activeCampaignsConsumption: 3102.77,
                activeCampaignsBudget: 12000,
            };
        },
        computed: {
            formattedType() {
                return this.type.charAt(0).toUpperCase() + this.type.substr(1);
            },
            formattedCreatedAt() {
                return moment(this.createdAt).format('DD/MM/YYYY');
            },
            formattedUpdatedAt() {
                return moment(this.updatedAt).format('DD/MM/YYYY');
            },
            networksLinks() {
                return this.networks.map(n => ({ text: n.name, href: `network/${n.id}` }));
            },
            breadcrumb() {
                return [
                    {
                        text: 'Painel',
                        href: '/',
                    },
                    {
                        text: 'Advertisers',
                        href: '/advertiser',
                    },
                    {
                        text: this.name,
                        active: true,
                    },
                ];
            },
        },
        components: {
            StatusChanger,
            LinksList,
            MoneyConsumption,
        },
    };
</script>
