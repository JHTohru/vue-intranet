<template>
    <advertisers-list/>
</template>

<script>
    import AdvertisersList from '~/components/AdvertisersList';

    export default {
        fetch({ store }) {
            return store.dispatch('getAdvertisers');
        },
        components: {
            AdvertisersList,
        },
    };
</script>
