<template>
    <b-card>
        <p>{{ value }}</p>
        <div class="d-flex justify-content-between">
            <span>{{ title }}</span>
            <metric-variation :percent="variation"/>
        </div>
    </b-card>
</template>

<script>
    import MetricVariation from '~/components/MetricVariation';

    export default {
        props: {
            title: String,
            value: Number,
            variation: Number,
        },
        components: {
            MetricVariation,
        },
    };
</script>