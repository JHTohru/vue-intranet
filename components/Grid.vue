<template>
    <div class="grid">
        <div class="grid-data">
            <table class="table border border-muted align-middle">
                <thead class="bg-light">
                    <tr>
                        <th
                            v-for="(column, index) in columns"
                            :key="index"
                            >
                            <a
                                href="#"
                                v-if="typeof column.sort === 'function'"
                                @click.prevent="sort(column)">
                                {{ column.name }}
                            </a>
                            <template v-else>
                                {{ column.name }}
                            </template>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr
                        v-for="(row, rowIndex) of rows"
                        :key="rowIndex">
                        <td
                            v-for="(entry, entryIndex) of row"
                            :key="entryIndex">
                            <component
                                v-if="typeof entry === 'object' && entry.component && entry.props"
                                :is="entry.component"
                                v-bind="entry.props">
                                <template v-if="entry.value">
                                    {{ entry.value }}
                                </template>
                            </component>
                            <template v-else >{{ entry }}</template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sortColumn: null,
                sortOrientation: 1,
            };
        },
        props: {
            rows: Array,
            columns: Array,
        },
        methods: {
            sort(column) {
                if (typeof column.sort === 'function') {
                    if (this.sortColumn !== column) {
                        this.sortColumn = column;
                        this.sortOrientation = 1;
                    } else {
                        this.sortOrientation *= -1;
                    }

                    column.sort(this.sortOrientation);
                }
            },
        },
    };
</script>
