<template>
    <b-card no-body>
        <b-card-header class="d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0 font-weight-bold">{{ title }}</h5>
            <slot name="card-header-append"/>
        </b-card-header>
        <b-card-body>
            <b-row no-gutters>
                <b-col :cols="bodySize">
                    <slot/>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
            bodySize: {
                type: String,
                default: '6',
            },
        },
    };
</script>
