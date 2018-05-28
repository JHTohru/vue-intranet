<template>
    <footer class="bg-white position-absolute w-100 px-4 py-3 text-secondary">
        <b-row no-gutters>
            <b-col cols="2">
                <span>2015 - {{ currentYear }} Percycle</span>
            </b-col>
        </b-row>
    </footer>
</template>

<script>
    export default {
        computed: {
            currentYear() {
                return (new Date()).getFullYear();
            },
        },
    };
</script>

<style scoped>
    footer {
        bottom: 0;
    }
</style>