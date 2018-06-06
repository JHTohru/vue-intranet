<template>
    <span
        :class="percent > 0 ? 'text-primary' : 'text-danger'"
        class="m-0">
        <span class="mr-1">{{ formattedPercent }}%</span>
        <font-awesome-icon :icon="['fas', percent > 0 ? 'level-up' : 'level-down']"/>
    </span>
</template>

<script>
    export default {
        props: {
            percent: Number,
        },
        computed: {
            formattedPercent() {
                return this.percent + '%';
            },
        }
    };
</script>