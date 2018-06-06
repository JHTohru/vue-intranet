<script>
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,
        data() {
            return {
                chartData: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                    datasets: [
                        {
                            label: 'Impressões',
                            data: [63, 40, 20, 32, 11, 12, 22],
                            backgroundColor: 'rgba(26, 179, 148, .25)',
                        },
                        {
                            label: 'Cliques',
                            data: [61, 59, 20, 32, 11, 12, 22],
                        },
                        {
                            label: 'Conversões',
                            data: [24, 46, 20, 32, 11, 12, 22],
                            backgroundColor: 'rgba(26, 179, 148, .5)',
                        },
                    ],
                },
            };
        },
        mounted() {
            this.renderChart(this.chartData);
        },
    };
</script>