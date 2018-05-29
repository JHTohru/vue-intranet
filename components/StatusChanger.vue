<template>
    <div class="dropdown">
        <button
            @click="toggleMenu"
            v-on-clickaway="closeMenu"
            type="button"
            class="btn btn-outline-muted dropdown-toggle">
            <font-awesome-icon
                :icon="['fas', 'circle']"
                :class="`text-${status ? 'primary' : 'danger'}`"/>
            <span>{{ status ? active : inactive }}</span>
        </button>
        <div
            class="dropdown-menu"
            :class="showMenu ? 'show' : ''">
            <a
                @click.capture.prevent.stop="toggleStatus"
                class="dropdown-item"
                href="#">{{ status ? inactive : active }}</a>
        </div>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [ clickaway ],
        data() {
            return {
                showMenu: false,
                status: Boolean,
            };
        },
        props: [
            'value',
            'active',
            'inactive',
        ],
        created() {
            this.status = this.value;
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
            closeMenu() {
                this.showMenu = false;
            },
            toggleStatus() {
                this.status = !this.status;

                this.closeMenu();
            },
        },
    };
</script>
