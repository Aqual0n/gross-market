import {
    disablePageScroll,
    enablePageScroll,
} from 'scroll-lock/src/scroll-lock';

export default {
    watch: {
        active(val) {
            if (val) {
                disablePageScroll();
            } else {
                enablePageScroll();
            }
        },
    },
};
