<template>
    <b-card no-body>
        <div class="card-title p-3 m-0">
            <h5 class="m-0 font-weight-bold">{{ title }}</h5>
        </div>
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
                type: Number,
                default: 6,
            },
        },
    };
</script>
