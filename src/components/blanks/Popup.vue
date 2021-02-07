<template lang="pug">
include ../../../tools/mixins.pug
+b.popup(
    ref="popup"
    :class="{ active: active }"
    v-on:click="$emit('closePopup')"
    v-on:scroll="checkHead($refs.popup.scrollTop)"
    data-scroll-lock-scrollable
)
    +e.head(
        ref="head"
        :class="{ active: showHead }"
        :style="headCss"
    )
        span {{ head }}
        +e.close--head(
            v-on:click="$emit('closePopup')"
        )
    +e.inner(
        v-on:click.stop
    )
        +e.close(
            v-on:click="$emit('closePopup')"
        )
        slot(
            name="content"
        )
</template>

<script>
import popup from '../../mixins/popup';
import deviceSize from '../../mixins/deviceSize';
export default {
    mixins: [popup, deviceSize],
    props: {
        active: {
            type: Boolean,
            required: true,
        },
        head: {
            type: String,
            required: false,
            default: '',
        },
    },
    data: () => ({
        showHead: false,
        headCss: null,
    }),
    methods: {
        checkHead(scrolled) {
            this.showHead =
                scrolled >= this.$refs.head.getBoundingClientRect().height;
            if (this.deviceSize.desktop) {
                this.headCss = {
                    transform: `translateX(calc(-50% - ${
                        this.getScrollbarWidth() / 2
                    }px))`,
                };
            }
        },
        getScrollbarWidth() {
            return window.innerWidth - this.$refs.popup.clientWidth;
        },
    },
};
</script>
