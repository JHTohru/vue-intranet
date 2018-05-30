<template>
    <b-container
        fluid
        class="p-0">
        <b-row
            no-gutters
            id="wrapper">
            <b-col cols="2">
                <side-menu/>
            </b-col>
            <main class="col-10 position-relative">
                <site-header/>
                <div class="p-4">
                    <nuxt/>
                </div>
                <site-footer/>
            </main>
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
