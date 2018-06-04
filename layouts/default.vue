<template>
    <layout>
        <nuxt/>
    </layout>
</template>

<script>
    import layout from './layout';

    export default {
        components: {
            layout,
        },
    };
</script>

<style>
    #wrapper {
        min-height: 100vh;
    }
</style>
