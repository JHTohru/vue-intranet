<template>
    <header class="bg-white px-4 py-3">
        <b-row
            no-gutters
            class="align-items-center">
            <b-col cols="1">
                <b-button variant="primary">
                    <font-awesome-icon
                        :icon="['fas', 'bars']"
                        class="fa-lg"/>
                </b-button>
            </b-col>
            <b-col cols="10"></b-col>
            <b-col class="text-right">
                <b-link
                    to="/logout"
                    class="text-secondary">
                    <font-awesome-icon
                        :icon="['fas', 'sign-out-alt']"
                        class="mr-1"/>
                    <span class="font-weight-bold">Sair</span>
                </b-link>
            </b-col>
        </b-row>
    </header>
</template>