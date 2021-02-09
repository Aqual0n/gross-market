<template lang="pug">
include ../../../tools/mixins.pug
+b.HEADER.header(
    :class="`header--${color}`"
    ref="header"
)
    +e.container.container
        +e.ROUTER-LINK.logo(
            to="/"
        )
            img(
                src="/images/header/logo.svg"
            )
        +e.right
            template(
                v-if="state === 'default'"
            )
                +e.A.phone(
                    href="tel:+7 (926) 433-14-16"
                )
                    span +7 (926) 433-14-16
                +e.ROUTER-LINK.button.button--standart.--font-size-medium.--background-yellow(
                    to="/form"
                    :class="{ active: showButton }"
                ) заполнить анкету
            template(
                v-if="state === 'form'"
            )
                +e.ROUTER-LINK.close(
                    to="/"
                )
</template>

<script>
import { getScroll } from '../../mixins/getScroll';

export default {
    mixins: [getScroll],
    props: {
        color: {
            required: false,
            type: String,
            default: 'white',
        },
        state: {
            required: false,
            type: String,
            default: 'default',
        },
    },
    data: () => ({
        showButton: false,
    }),
    mounted() {
        document.addEventListener('scroll', this.onScroll);
    },
    destroyed() {
        document.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            this.$nextTick(() => {
                if (this.$refs.header) {
                    this.showButton =
                        this.getScroll().y >=
                        this.$refs.header.getBoundingClientRect().height;
                }
            });
        },
    },
};
</script>
