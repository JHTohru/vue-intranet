<template>
    <div>
        <table class="table align-middle">
            <thead class="thead-light border">
            <tr>
                <th class="border-0">Publisher</th>
                <th class="border-0">Seller IDs</th>
                <th class="border-0 text-center">Remover</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="publisher of publishers"
                :key="publisher.name">
                <td class="font-weight-bold">{{ publisher.name }}</td>
                <td>
                    <v-select
                        multiple
                        :options="publisher.sellers"
                        placeholder="Selecione"/>
                </td>
                <td class="text-center">
                    <font-awesome-icon :icon="['fas', 'trash']" />
                </td>
            </tr>
            </tbody>
        </table>

        <b-button
            @click="showModal"
            variant="primary"
            class="float-right">
            <font-awesome-icon :icon="['fas', 'plus']" />
            <span class="ml-2">Adicionar Publisher</span>
        </b-button>

        <b-modal
            id="add-publisher-modal"
            title="Adicionar Publisher">
            <add-publisher-form/>
        </b-modal>
    </div>
</template>

<script>
    import AddPublisherForm from '~/components/forms/AddPublisherForm';

    export default {
        data() {
            return {
                publishers: [
                    {
                        name: 'Ricardo Eletro',
                        sellers: ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Golf', 'Kilo'],
                    },
                    {
                        name: 'Magazine Luiza',
                        sellers: ['Alpha', 'Charlie', 'Fox-Trot', 'Golf', 'Juliet', 'Kilo'],
                    },
                    {
                        name: 'CNova',
                        sellers: ['Alpha', 'Charlie', 'Delta', 'Echo', 'Fox-Trot', 'Golf', 'Hotel'],
                    },
                ],

            };
        },
        components: {
            AddPublisherForm,
        },
        methods: {
            showModal() {
                this.$root.$emit('bv::show::modal', 'add-publisher-modal');
            },
            hideModal() {
                this.$root.$emit('bv::hide::modal', 'add-publisher-modal');
            },
        },
    };
</script>
