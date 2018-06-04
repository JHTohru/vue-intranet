<template>
    <div>
        <advertiser-header :advertiser="advertiser"></advertiser-header>

        <nuxt-child/>
    </div>
</template>

<script>
    import AdvertiserHeader from '~/layouts/AdvertiserHeader';

    export default {
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
            };
        },
        components: {
            AdvertiserHeader,
        },
    };
</script>