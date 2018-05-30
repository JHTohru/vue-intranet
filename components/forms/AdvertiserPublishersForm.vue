<template>
    <table class="table align-middle">
        <thead class="bg-secondary border border-secondary">
        <tr>
            <th class="border-0">Publisher</th>
            <th class="border-0">Seller IDs</th>
            <th class="border-0">Remover</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="n in 3"
            :key="n">
            <td class="font-weight-bold">
                n
            </td>
            <td>
                <v-select
                    multiple
                    :options="regionOptions" />
            </td>
            <td>
                <font-awesome-icon :icon="['fas', 'trash']" />
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data() {
            return {
                regionOptions: [
                    { text: 'Brasil', value: 'brazil' },
                ],
            };
        },
    };
</script>
