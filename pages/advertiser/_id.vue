<template>
    <site-layout>
        <template slot="site-header">
            <advertiser-header
                :advertiser="advertiser"></advertiser-header>
            <nav class="navbar px-4 py-0">
                <ul class="navbar-nav w-100 flex-row justify-content-center border border-right-0 border-left-0 border-bottom-0">
                    <b-link
                        v-for="item of menu"
                        :key="item.text"
                        :to="item.route"
                        router-tag="li"
                        class="nav-item px-4 py-3 border-primary">
                        <b-link
                            :to="item.route"
                            class="nav-link p-0">{{ item.text }}</b-link>
                    </b-link>
                </ul>
            </nav>
        </template>

        <nuxt-child/>
    </site-layout>
</template>

<script>
    import SiteLayout from '~/layouts/layout';
    import AdvertiserHeader from '~/layouts/AdvertiserHeader';

    export default {
        layout: 'empty',
        data () {
            return {
                advertiser: {
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
                },
                menu: [
                    {
                        text: 'Visão geral',
                        route: 'dashboard',
                    },
                    {
                        text: 'Cadastro',
                        route: 'profile',
                    },
                    {
                        text: 'Usuários',
                        route: 'users',
                    },
                    {
                        text: 'Financeiro',
                        route: 'bidding',
                    },
                    {
                        text: 'Logs',
                        route: 'logs',
                    },
                ],
            };
        },
        components: {
            SiteLayout,
            AdvertiserHeader,
        },
    };
</script>

<style lang="scss" scoped>
    .nav-item {
        font-size: .75rem;

        &.active {
            border-bottom-width: .25rem !important;
            border-bottom-style: solid !important;
            font-weight: 700;
        }

        .nav-link {
            &, &:hover {
                color: #666;
            }
        }
    }
</style>