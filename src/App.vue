<template lang="pug">
#app
    header-component(
        :color="headerColor"
        :state="headerState"
    )
    router-view
</template>

<script>
import TheHeader from './components/sections/TheHeader';
export default {
    components: {
        'header-component': TheHeader,
    },
    computed: {
        headerColor() {
            if (this.$route.name === 'form') {
                return 'gray';
            }
            return 'white';
        },
        headerState() {
            if (this.$route.name === 'form') {
                return 'form';
            }
            return 'default';
        },
    },
};
</script>
