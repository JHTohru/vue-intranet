<script>
    import { Line } from 'vue-chartjs';

    export default {
        extends: Line,
        mounted() {
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Carajo',
                        // backgroundColor: '#f0f0f0',
                        data: [20, 30, 10, 32, 11],
                    },
                ],
            });
        },
    };
</script>