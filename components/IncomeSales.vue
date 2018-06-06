<template>
    <div class="card border-right-0 border-left-0" style="border-top-width: 2px">
        <div class="card-header d-flex justify-content-between align-items-center bg-transparent">
            <h5 class="card-title m-0 font-weight-regular">Impressões, Cliques e Conversões</h5>
            <div class="btn-group">
                <button
                    type="button"
                    class="btn btn-light btn-xs p-0 px-2 active">Dia</button>
                <button
                    type="button"
                    class="btn btn-light btn-xs p-0 px-2">Semana</button>
                <button
                    type="button"
                    class="btn btn-light btn-xs p-0 px-2">Mês</button>
            </div>
        </div>
        <div class="card-body">
            <b-row
                no-gutters
                class="w-100">
                <b-col cols="9">
                    <line-chart :height="150"/>
                </b-col>
                <b-col
                    cols="3"
                    class="pt-5">
                    <div class="card border-bottom-0">
                        <div class="card-body px-3 py-2">
                            <p class="h3 font-weight-light">R$ 470.599,23</p>
                            <p class="d-flex justify-content-between m-0">
                                <span>Receita</span>
                                <metric-variation :percent="44"/>
                            </p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body px-3 py-2">
                            <p class="h3 font-weight-light">R$ 1.740.983,45</p>
                            <p class="d-flex justify-content-between m-0">
                                <span>Venda</span>
                                <metric-variation :percent="-4"/>
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Card from '~/layouts/Card';
    import LineChart from '~/components/LineChart';
    import MetricVariation from '~/components/MetricVariation';

    export default {
        components: {
            Card,
            LineChart,
            MetricVariation,
        },
    };
</script>
