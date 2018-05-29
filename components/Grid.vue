<template>
    <div class="grid">
        <div class="grid-data">
            <table class="table border border-muted align-middle">
                <thead class="bg-light">
                    <tr>
                        <th
                            v-for="(column, index) in columns"
                            :key="index">
                            {{ column }}
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

<style scoped>
    table td {
        vertical-align: middle;
    }
</style>

<script>
    export default {
        props: {
            rows: Array,
            columns: Array,
        },
    };
</script>
