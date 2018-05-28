<template>
    <b-row
        no-gutters
        id="wrapper">
        <b-col cols="2">
            <side-menu/>
        </b-col>
        <b-col class="position-relative">
            <site-header/>
            <nuxt/>
            <site-footer/>
        </b-col>
    </b-row>
</template>

<script>
    import SiteHeader from '~/components/SiteHeader'
    import SiteFooter from '~/components/SiteFooter'
    import SideMenu from '~/components/SideMenu'

    export default {
        components: {
            SiteHeader,
            SiteFooter,
            SideMenu,
        },
    };
</script>

<style>
    #wrapper {
        min-height: 100vh;
    }
</style>
