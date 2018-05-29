<template>
    <div>
        <p class="clearfix mb-1">
            <span class="float-left">{{ spentMoney | formatMoney }}</span>
            <span class="float-right">{{ totalMoney | formatMoney }}</span>
        </p>
        <b-progress
            height="4px"
            :value="spentMoney"
            :max="totalMoney"
            variant="primary"/>
    </div>
</template>

<script>
    export default {
        props: [
            'spentMoney',
            'totalMoney',
        ],
    };
</script>
