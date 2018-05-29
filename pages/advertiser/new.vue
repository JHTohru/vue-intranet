<template>
    <div class="bg-white p-4">
        <h1>Novo Usuário</h1>
        <b-form>
            <b-input-group>
                <b-input placeholder="Nome" />
            </b-input-group>
            <b-form-select
                :value="null"
                :options="{ 'seller': 'Seller', 'brand': 'Brand' }">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
            <b-form-select
                :value="null"
                :options="{ 'brazil': 'Brasil' }">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
            <vue-select :options="networks"/>
        </b-form>
    </div>
</template>

<script>
    import vSelect from 'vue-select';

    export default {
        data() {
            return {
                networks: [
                    { label: 'Alpha', value: 1 },
                    { label: 'Bravo', value: 2 },
                    { label: 'Charlie', value: 3 },
                    { label: 'Delta', value: 4 }
                ],
            };
        },
        components: {
            vSelect
        },
    };
</script>