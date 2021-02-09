export default {
    data: () => ({
        popups: {
            privacy: {
                active: false,
            },
        },
    }),
    methods: {
        openPopup(name) {
            this.popups[name].active = true;
        },
        closePopup(name) {
            this.popups[name].active = false;
        },
    },
};
