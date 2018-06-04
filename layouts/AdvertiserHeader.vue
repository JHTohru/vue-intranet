<template>
    <div class="px-4 pt-3 pb-2">
        <b-row no-gutters>
            <b-col cols="4">
                <nav aria-label="breadcrumb">
                    <ol class="list-unstyled list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="/">
                                <font-awesome-icon :icon="['far', 'arrow-left']"/>
                            </a>
                        </li>
                        <template v-for="(page, index) of breadcrumb">
                            <li
                                :key="page.text"
                                class="list-inline-item">
                                <a :href="page.href">{{ page.text }}</a>
                            </li>
                            <li
                                v-if="breadcrumb.length > 1 && index + 1 < breadcrumb.length"
                                :key="index"
                                class="list-inline-item">
                                <font-awesome-icon :icon="['far', 'angle-right']"/>
                            </li>
                        </template>
                    </ol>
                </nav>

                <h4 class="font-weight-light">{{ advertiser.name }}</h4>
            </b-col>
            <b-col cols="2">
                <p class="font-weight-bold">Campanhas ativas</p>
                <p>{{ advertiser.activeCampaigns }}</p>
            </b-col>
            <b-col cols="1">
                <p class="font-weight-bold">Tipo</p>
                <p>{{ formattedType }}</p>
            </b-col>
            <b-col cols="2">
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
    </div>
</template>

<script>
    import moment from 'moment';
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
                ];
            },
        },
        components: {
            LinksList,
            MoneyConsumption,
        },
    };
</script>

<style scoped lang="scss">
    nav a {
        color: #999;

        &:hover {
            color: #666;
        }
    }
</style>