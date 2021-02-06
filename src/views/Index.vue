<template lang="pug">
div
    header-component
    main-component
</template>

<script>
import TheHeader from '../components/sections/TheHeader.vue';
import Main from '../components/sections/Main.vue';
export default {
    components: {
        'header-component': TheHeader,
        'main-component': Main,
    },
};
</script>
