<template>
    <div>
        <advertiser-header/>
        <card/>
    </div>
</template>

<script>
    import AdvertiserHeader from '~/layouts/AdvertiserHeader';
    import Card from '~/layouts/Card';

    export default {
        data() {
            return {

            };
        },
        components: {
            AdvertiserHeader,
            Card,
        },
    };
</script>
