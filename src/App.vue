<template>
    <nav>
        <div class="logo">
            <font-awesome-icon class="cd-rotate" icon="fa-solid fa-compact-disc" />
            Catalog
        </div>

        <search-box-vue />
    </nav>
    <router-view />
</template>
<script setup>
import SearchBoxVue from './components/SearchBox.vue';
</script>
<style lang="scss">
nav {
    padding: 1rem 0rem;
    border-bottom: $border-width solid $black;
    text-align: center;

    input {
        width: 300px;
    }
}

.logo {
    position: absolute;
    font-size: 25px;
    top: .6rem;
    left: 1rem;
    height: 4rem;
    line-height: 3rem;
}
</style>
