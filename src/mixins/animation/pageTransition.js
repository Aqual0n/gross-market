export default {
    data: () => ({
        pageTransition: {
            hide: false,
            time: 500,
        },
    }),
    beforeRouteLeave(to, from, next) {
        this.hidePage();
        setTimeout(() => {
            next();
        }, this.pageTransition.time);
    },
    beforeRouteUpdate(to, from, next) {
        this.hidePage();
        setTimeout(() => {
            next();
        }, this.pageTransition.time);
    },
    created() {
        this.hidePage();
    },
    mounted() {
        setTimeout(() => {
            this.showPage();
        }, this.pageTransition.time);
    },
    methods: {
        hidePage() {
            this.pageTransition.hide = true;
        },
        showPage() {
            this.pageTransition.hide = false;
        },
    },
    watch: {
        $route() {
            setTimeout(() => {
                if (this.pageTransition.hide) {
                    this.showPage();
                }
            }, this.pageTransition.time);
        },
    },
};
