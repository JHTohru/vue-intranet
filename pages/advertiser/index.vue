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
                <font-awesome-icon :icon="['fas', 'plus']" />
                <span class="ml-2">Criar Advertiser</span>
            </b-button>
        </template>

        <advertisers-list :advertisers="advertisers"/>
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
    import Card from '~/layouts/Card';
    import AdvertisersList from '~/components/AdvertisersList';
    import EmptyCard from '~/layouts/EmptyCard';

    export default {
        fetch ({ store }) {
            return store.dispatch('getAdvertisers');
        },
        computed: {
            advertisers () {
                return this.$store.state.advertisers;
            },
        },
        components: {
            Card,
            AdvertisersList,
            EmptyCard,
        },
    };
</script>
