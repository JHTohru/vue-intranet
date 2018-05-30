<template>
    <div>
        <card
            :title="'Dados do Anunciante'"
            class="mb-3">
            <advertiser-form/>
        </card>

        <card :title="'Publishers'">
            <advertiser-publishers-form/>
        </card>
    </div>
</template>

<script>
    import Card from '~/layouts/Card';
    import AdvertiserForm from '~/components/forms/AdvertiserForm';
    import AdvertiserPublishersForm from '~/components/forms/AdvertiserPublishersForm';

    export default {
        components: {
            Card,
            AdvertiserForm,
            AdvertiserPublishersForm,
        },
    };
</script>
