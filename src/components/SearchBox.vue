<template>
    <input type="text" placeholder="Search for an album" v-model="searchInput" />
    <router-link :to="{ path: '/search/' + searchInput }">
        <button>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </router-link>
</template>
<script setup>
import { ref } from 'vue';

var searchInput = ref("");

</script>
<style scoped lang="scss">
button:hover {
    transform: rotate(-270deg);
}

input {
    width: 300px;
}
</style>
