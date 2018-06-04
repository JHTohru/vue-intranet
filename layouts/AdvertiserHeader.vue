<template>
    <b-row no-gutters>
        <b-col cols="5">
            <b-breadcrumb :items="breadcrumb"/>

            <status-changer :value="advertiser.status"/>
        </b-col>
        <b-col cols="2">
            <p class="font-weight-bold">Campanhas ativas</p>
            <p>{{ advertiser.activeCampaigns }}</p>
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
                :spentMoney="advertiser.activeCampaignsConsumption"
                :totalMoney="advertiser.activeCampaignsBudget"/>
        </b-col>
    </b-row>
</template>

<script>
    import moment from 'moment';
    import StatusChanger from '~/components/StatusChanger';
    import LinksList from '~/components/LinksList';
    import MoneyConsumption from '~/components/MoneyConsumption';

    export default {
        props: [
            'advertiser',
        ],
        computed: {
            formattedType() {
                return this.advertiser.type.charAt(0).toUpperCase() + this.advertiser.type.substr(1);
            },
            formattedCreatedAt() {
                return moment(this.advertiser.createdAt).format('DD/MM/YYYY');
            },
            formattedUpdatedAt() {
                return moment(this.advertiser.updatedAt).format('DD/MM/YYYY');
            },
            networksLinks() {
                return this.advertiser.networks.map(n => ({ text: n.name, href: `network/${n.id}` }));
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
                        text: this.advertiser.name,
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
