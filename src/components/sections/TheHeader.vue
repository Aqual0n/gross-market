<template lang="pug">
include ../../../tools/mixins.pug
+b.HEADER.header(
    :class="`header--${color}`"
)
    +e.container.container
        +e.logo
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
                +e.BUTTON.button.button--standart.--font-size-medium.--background-yellow заполнить анкету
            template(
                v-if="state === 'form'"
            )
                +e.close
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
