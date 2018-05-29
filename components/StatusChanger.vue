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
            <span>{{ status ? activeText : inactiveText }}</span>
        </button>
        <div
            class="dropdown-menu"
            :class="showMenu ? 'show' : ''">
            <a
                @click.capture.prevent.stop="toggleStatus"
                class="dropdown-item"
                href="#">{{ status ? inactiveText : activeText }}</a>
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
            };
        },
        props: {
            activeText: {
                type: String,
                default: 'Ativo',
            },
            inactiveText: {
                type: String,
                default: 'Inativo',
            },
            value: {
                type: Boolean,
                default: false,
            },
        },
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
