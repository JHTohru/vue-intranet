<template>
    <b-card
        no-body
        class="py-3 bg-transparent">
        <b-card-header class="p-0 bg-transparent border-0 mb-3">
            <h5 class="card-title m-0 font-weight-normal text-center">{{ title }}</h5>
        </b-card-header>
        <b-card-body class="d-flex justify-content-center align-items-center py-0">
            <slot/>
        </b-card-body>
    </b-card>
</template>

<style scoped>
    .card {
        border-style: dashed;
    }
</style>

<script>
    export default {
        props: ['title'],
    };
</script>
