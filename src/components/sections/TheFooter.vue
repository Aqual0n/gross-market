<template lang="pug">
include ../../../tools/mixins.pug
+b.FOOTER.footer
    +e.container--top.container
        +e.panel
            +e.ROUTER-LINK.logo(
                to="/"
            )
                img(
                    src="/images/header/logo.svg"
                )
            +e.share поделиться
            +e.socials
                +e.A.social--fb(
                    href="#"
                    target="_blank"
                )
                +e.A.social--vk(
                    href="#"
                    target="_blank"
                )
    +e.container.container
        +e.bottom
            +e.privacy(
                v-on:click="$emit('openPopup')"
            ) Политика обработки персональных данных
            +e.copyright © Гросс маркет 2020
</template>

<script>
export default {};
</script>
