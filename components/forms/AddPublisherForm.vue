<template>
    <b-form>
        <b-form-group label="Publisher">
            <b-form-select
                :value="null"
                :options="publishers">
                <option
                    slot="first"
                    :value="null">Selecione</option>
            </b-form-select>
        </b-form-group>
    </b-form>
</template>

<script>
    export default {
        data() {
            return {
                publishers: {
                    'ricardoeletro': 'Ricardo Eletro',
                    'magalu': 'Magazine Luiza',
                    'cnova': 'CNova',
                },
            };
        },
    };
</script>
