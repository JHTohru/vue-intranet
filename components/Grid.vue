<template>
    <div class="grid">
        <div class="grid-data">
            <div
                class="loading-blinds"
                v-if="loadingData">
                <span class="fa fa-circle-o-notch fa-2x fa-spin"></span>
                <p>Carregando</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th
                            v-for="column in gridColumns"
                            :key="column.name"
                            @click="column.sortable ? sort(column) : void 0"
                            :class="[ { sortable: column.sortable }, column.boundProperty && sortProp === column.boundProperty ? sortOrder > 0 ? 'sort-asc' : 'sort-dsc' : '' ]">
                            {{ column.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(row, rowIndex) of gridRows"
                        :key="rowIndex">
                        <td
                            v-for="(entry, entryIndex) of row"
                            :key="rowIndex + ':' + entryIndex"
                            :html="entry"/>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            requestingData: Boolean,
            gridColumns: Array,
            totalResults: Number,
            gridRows: Array,
            sortProp: String,
            sortOrder: Number,
            initialSearchQuery: String,
            resultsPerPage: Number,
            currentPage: Number,
        },
        methods: {
            sort(column) {
                return this.$eventHub.$emit('sort', column);
            },
        },
    };
</script>

<style></style>