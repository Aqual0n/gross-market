<template lang="pug">
div
    header-component(
        state="form"
        color="gray"
    )
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
import TheHeader from '../components/sections/TheHeader.vue';
import FormWrapper from '../components/sections/FormWrapper.vue';
import TheFooter from '../components/sections/TheFooter.vue';
import PopupPrivacy from '../components/sections/PopupPrivacy.vue';

import popupParentLogic from '../mixins/popupParentLogic';
export default {
    components: {
        'header-component': TheHeader,
        'form-wrapper-component': FormWrapper,
        'footer-component': TheFooter,
        'popup-privacy-component': PopupPrivacy,
    },
    mixins: [popupParentLogic],
};
</script>
