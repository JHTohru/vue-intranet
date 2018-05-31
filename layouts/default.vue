<template>
    <b-container
        fluid
        class="p-0">
        <b-row no-gutters>
            <b-col cols="2">
                <side-menu/>
            </b-col>
            <b-col
                id="wrapper"
                cols="10">
                <site-header/>
                <main class="position-relative p-4">
                    <nuxt/>
                </main>
                <site-footer/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SiteHeader from './SiteHeader'
    import SiteFooter from './SiteFooter'
    import SideMenu from './SideMenu'

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
