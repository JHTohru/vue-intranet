<script>
    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        data() {
            return {
                chartData: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                    datasets: [
                        {
                            label: 'Receita',
                            data: [63, 40, 20, 32, 11, 12, 22],
                            backgroundColor: 'rgba(26, 179, 148, .25)',
                        },
                        {
                            label: 'Vendas',
                            data: [61, 59, 20, 32, 11, 12, 22],
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