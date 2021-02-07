<template lang="pug">
div
    header-component
    main-component
    vacancies-component
    instagram-component
    geography-component
    footer-component(
        @openPopup="openPopup('privacy')"
    )
    popup-privacy-component(
        :active="popups.privacy.active"
        @closePopup="closePopup('privacy')"
    )
</template>

<script>
import TheHeader from '../components/sections/TheHeader.vue';
import Main from '../components/sections/Main.vue';
import Vacancies from '../components/sections/Vacancies.vue';
import Instagram from '../components/sections/Instagram.vue';
import Geography from '../components/sections/Geography.vue';
import TheFooter from '../components/sections/TheFooter.vue';
import PopupPrivacy from '../components/sections/PopupPrivacy.vue';

import popupParentLogic from '../mixins/popupParentLogic';
export default {
    components: {
        'header-component': TheHeader,
        'main-component': Main,
        'vacancies-component': Vacancies,
        'instagram-component': Instagram,
        'geography-component': Geography,
        'footer-component': TheFooter,
        'popup-privacy-component': PopupPrivacy,
    },
    mixins: [popupParentLogic],
};
</script>
