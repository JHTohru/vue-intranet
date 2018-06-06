<template>
    <div>
        <b-row class="mb-3">
            <b-col class="d-flex align-items-center">
                <date-range-picker/>
            </b-col>
            <b-col
                cols="auto"
                class="d-flex align-items-center">
                <p class="m-0">
                    <font-awesome-icon
                        :icon="['far', 'clock']"
                        class="mr-1"/>
                    <span>Atualizado em {{ formattedLastUpdateTime }}</span>
                </p>
            </b-col>
        </b-row>
        <b-row class="mb-3">
            <b-col class="mr-2">
                <metric-box
                    name="CPC Médio"
                    description="Custo médio do clique"
                    format="money"
                    :value=".73"
                    :variation="44"/>
            </b-col>
            <b-col class="mr-2">
                <metric-box
                    name="CRT"
                    description="Pergunta pro Macabu"
                    format="money"
                    :value="123.31"
                    :variation="-12"/>
            </b-col>
            <b-col class="mr-2">
                <metric-box
                    name="ROI"
                    description="Retorno do Investimento"
                    format="flat"
                    :value="21"
                    :variation="15"/>
            </b-col>
            <b-col>
                <metric-box
                    name="Taxa de Conversão"
                    description="¯\_(ツ)_/¯"
                    format="percent"
                    :value="1.75"
                    :variation="7"/>
            </b-col>
        </b-row>
        <b-row class="mb-3">
            <b-col>
                <impressions-clicks-conversions/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <income-sales/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import moment from 'moment';
    import DateRangePicker from '~/components/DateRangePicker';
    import MetricBox from '~/components/MetricBox';
    import ImpressionsClicksConversions from '~/components/ImpressionsClicksConversions';
    import IncomeSales from "../../../components/IncomeSales";

    export default {
        data() {
            return {
                lastUpdateTime: '2018-05-04T01:47:30.000Z',
            };
        },
        computed: {
            formattedLastUpdateTime() {
                return moment(this.lastUpdateTime).format('DD/MM/YYYY [às] HH:MM');
            },
            startDate() {
                return (new Date()).toISOString();
                // return moment().format('MM/DD/YY');
            },
            endDate() {
                return (new Date()).toISOString();

                return '';
                // return moment().add(7, 'days').format('MM/DD/YY');
            },
        },
        components: {
            DateRangePicker,
            MetricBox,
            ImpressionsClicksConversions,
            IncomeSales,
        },
    };
</script>