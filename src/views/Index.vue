<template lang="pug">
div
    header-component
    main-component
    vacancies-component
    instagram-component
</template>

<script>
import TheHeader from '../components/sections/TheHeader.vue';
import Main from '../components/sections/Main.vue';
import Vacancies from '../components/sections/Vacancies.vue';
import Instagram from '../components/sections/Instagram';
export default {
    components: {
        'header-component': TheHeader,
        'main-component': Main,
        'vacancies-component': Vacancies,
        'instagram-component': Instagram,
    },
};
</script>
