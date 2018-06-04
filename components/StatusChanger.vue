<template>
    <div class="dropdown">
        <button
            @click="toggleMenu"
            v-on-clickaway="closeMenu"
            type="button"
            class="btn btn-outline-status dropdown-toggle">
            <font-awesome-icon
                :icon="['fas', 'circle']"
                :class="`text-${!!status ? 'primary' : 'danger'}`"
                class="mr-1"/>
            <span>{{ status ? activeText : inactiveText }}</span>
        </button>
        <div
            class="dropdown-menu"
            :class="showMenu ? 'show' : ''">
            <a
                @click.capture.prevent.stop="toggleStatus"
                class="dropdown-item"
                href="#">
                <font-awesome-icon
                    :icon="['fas', 'circle']"
                    :class="`text-${!!status ? 'danger' : 'primary'}`"
                    class="mr-1"/>
                <span>{{ status ? inactiveText : activeText }}</span>
            </a>
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
                type: Number,
                default: 2,
            },
        },
        created() {
            this.status = this.value === 1;
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
