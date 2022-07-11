<template>
    <div>{{ params }}</div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

var params = ref(useRoute().params)

watch(useRoute(), async (newRoute) => {
    params.value = newRoute.params
})
</script>