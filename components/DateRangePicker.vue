<template>
    <b-button
        variant="primary"
        class="d-flex align-items-center dropdown-toggle">
        <font-awesome-icon
            :icon="['far', 'calendar-alt']"
            class="fa-lg mr-2"/>
        <span class="mr-1" ref="label"></span>
    </b-button>
</template>

<script>
    const dateRangePickerLocale = {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Aplicar",
        "cancelLabel": "Cancelar",
        "fromLabel": "De",
        "toLabel": "Até",
        "customRangeLabel": "Customizado",
        "weekLabel": "W",
        "daysOfWeek": [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sab"
        ],
        "monthNames": [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ],
        "firstDay": 1
    };

    import $ from 'jquery';
    import moment from 'moment';

    require('bootstrap-daterangepicker');

    export default {
        data() {
            return {};
        },
        props: {
            startDate: {
                type: Object,
                default() {
                    return moment().subtract(6, 'days');
                },
            },
            endDate: {
                type: Object,
                default() {
                    return moment();
                },
            },
            dateRanges: {
                type: Object,
                default() {
                    return {
                        'Hoje': [moment(), moment()],
                        'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Últimos 7 dias': [moment().subtract(6, 'days'), moment()],
                        'Últimos 30 dias': [moment().subtract(29, 'days'), moment()],
                        'Este mês': [moment().startOf('month'), moment().endOf('month')],
                        'Último mês': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    };
                },
            },
            locale: {
                type: Object,
                default() {
                    return {
                        "format": "DD/MM/YYYY",
                        "separator": " - ",
                        "applyLabel": "Aplicar",
                        "cancelLabel": "Cancelar",
                        "fromLabel": "De",
                        "toLabel": "Até",
                        "customRangeLabel": "Customizado",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "Dom",
                            "Seg",
                            "Ter",
                            "Qua",
                            "Qui",
                            "Sex",
                            "Sab"
                        ],
                        "monthNames": [
                            "Janeiro",
                            "Fevereiro",
                            "Março",
                            "Abril",
                            "Maio",
                            "Junho",
                            "Julho",
                            "Agosto",
                            "Setembro",
                            "Outubro",
                            "Novembro",
                            "Dezembro"
                        ],
                        "firstDay": 1
                    };
                },
            },
        },
        methods: {
            refreshLabel() {
                const data = $(this.$el).data('daterangepicker');

                data.calculateChosenLabel();

                let labelText = data.chosenLabel;

                if (labelText === this.locale.customRangeLabel) {
                    labelText = `${data.startDate.format('DD/MM/YYYY')} - ${data.endDate.format('DD/MM/YYYY')}`;
                }

                this.$refs.label.innerText = labelText;
                console.log(labelText);
            },
        },
        mounted() {
            $(this.$el)
                .daterangepicker({
                    startDate: this.startDate,
                    endDate: this.endDate,
                    autoApply: true,
                    locale: dateRangePickerLocale,
                    alwaysShowCalendars: true,
                    maxDate: moment(),
                    ranges: this.dateRanges,
                })
                .on('apply.daterangepicker', this.refreshLabel);

            this.refreshLabel();
        },
        beforeDestroy() {
            $(this.$el)
                .off('apply.daterangepicker', this.refreshLabel)
                .data('daterangepicker').remove();
        },
    };
</script>

<style lang="css">
    @import '~/node_modules/bootstrap-daterangepicker/daterangepicker.css';
</style>