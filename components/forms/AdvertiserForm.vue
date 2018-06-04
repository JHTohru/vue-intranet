<template>
    <b-form>
        <b-form-group
            horizontal
            :label-cols="4"
            label="Status">
            <status-changer :value="status"/>
        </b-form-group>

        <b-form-group
            horizontal
            :label-cols="4"
            label="Nome">
            <b-input-group>
                <b-input placeholder="Nome"/>
            </b-input-group>
        </b-form-group>

        <b-form-group
            horizontal
            :label-cols="4"
            label="Tipo">
            <b-form-select
                :value="null"
                :options="{ 'seller': 'Seller', 'brand': 'Brand' }">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
        </b-form-group>

        <b-form-group
            horizontal
            :label-cols="4"
            label="Redes">

            <v-select
                multiple
                :options="networkOptions"
                placeholder="Selecione"/>
        </b-form-group>

        <b-form-group
            horizontal
            :label-cols="4"
            label="Região">
            <b-form-select
                :value="null"
                :options="regionOptions">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
        </b-form-group>

        <b-form-group
            horizontal
            :label-cols="4"
            label="Daily Campaign">
            <b-form-select
                :value="null"
                :options="[{ text: 'Ativo', value: true }, { text: 'Inativo', value: false }]">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
        </b-form-group>

        <b-button
            variant="primary"
            class="float-right px-4">Salvar</b-button>
    </b-form>
</template>

<script>
    import StatusChanger from '~/components/StatusChanger';

    export default {
        data() {
            return {
                status: 1,
                networkOptions: [
                    { label: 'Alpha', value: 1 },
                    { label: 'Bravo', value: 2 },
                    { label: 'Charlie', value: 3 },
                    { label: 'Delta', value: 4 }
                ],
                regionOptions: [
                    { text: 'Brasil', value: 'brazil' },
                ],
            };
        },
        components: {
            StatusChanger,
        },
    };
</script>
