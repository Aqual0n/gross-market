<template lang="pug">
include ../../../tools/mixins.pug
+b.HEADER.header(
    :class="`header--${color}`"
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
                ) +7 (926) 433-14-16
                +e.ROUTER-LINK.button.button--standart.--font-size-medium.--background-yellow(
                    to="/form"
                ) заполнить анкету
            template(
                v-if="state === 'form'"
            )
                +e.ROUTER-LINK.close(
                    to="/"
                )
</template>

<script>
export default {
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
};
</script>
