<template lang="pug">
div
    form-wrapper-component
    footer-component(
        @openPopup="openPopup('privacy')"
    )
    popup-privacy-component(
        :active="popups.privacy.active"
        @closePopup="closePopup('privacy')"
    )
</template>

<script>
import FormWrapper from '../components/sections/FormWrapper.vue';
import TheFooter from '../components/sections/TheFooter.vue';
import PopupPrivacy from '../components/sections/PopupPrivacy.vue';

import popupParentLogic from '../mixins/popupParentLogic';
export default {
    components: {
        'form-wrapper-component': FormWrapper,
        'footer-component': TheFooter,
        'popup-privacy-component': PopupPrivacy,
    },
    mixins: [popupParentLogic],
};
</script>
