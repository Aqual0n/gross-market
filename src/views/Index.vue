<template lang="pug">
div
    header-component
    main-component
    vacancies-component
</template>

<script>
import TheHeader from '../components/sections/TheHeader.vue';
import Main from '../components/sections/Main.vue';
import Vacancies from '../components/sections/Vacancies.vue';
export default {
    components: {
        'header-component': TheHeader,
        'main-component': Main,
        'vacancies-component': Vacancies,
    },
};
</script>
