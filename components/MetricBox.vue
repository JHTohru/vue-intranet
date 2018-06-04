<template>
    <div class="card border-top-2 border-right-0 border-bottom-0 border-left-0">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h6 class="card-title m-0">{{ name }}</h6>
            <a
                v-if="description"
                v-b-tooltip
                :title="description"
                class="description"
                href="#">
                <font-awesome-icon
                    :icon="['fas', 'question-circle']"
                    class="fa-lg"/>
            </a>
        </div>
        <div class="card-body d-flex justify-content-between align-items-end">
            <p class="value m-0 h4 font-weight-light">{{ formattedValue }}</p>
            <p
                :class="variation > 0 ? 'text-primary' : 'text-danger'"
                class="m-0">
                <span class="mr-1">{{ formattedVariation }}</span>
                <font-awesome-icon :icon="['fas', variation > 0 ? 'level-up' : 'level-down']"/>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            description: String,
            value: Number,
            variation: Number,
            format: {
                default: 'flat',
                type: String,
            },
        },
        computed: {
            formattedValue() {
                if (this.format === 'money') {
                    return this.$options.filters.formatMoney(this.value);
                }

                if (this.format === 'percent') {
                    return this.value + '%';
                }

                // this.format === 'flat'
                return this.value;
            },
            formattedVariation() {
                return this.variation + '%';
            },
        },
    };
</script>

<style lang="scss" scoped>
    .card {
        border-top-width: 2px;
    }

    .description {
        &, &:hover {
            color: #666;
        }
    }
</style>