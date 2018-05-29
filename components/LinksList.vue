<template>
    <span>
        <template v-for="(link, index) of links">
            <b-link
                :key="index"
                :href="link.href">{{ link.text }}</b-link>
            <template v-if="links.length > 1 && index + 1 < links.length">, </template>
        </template>
    </span>
</template>

<script>
    export default {
        props: ['links'],
    };
</script>
