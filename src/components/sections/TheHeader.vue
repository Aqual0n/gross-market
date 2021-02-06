<template lang="pug">
include ../../../tools/mixins.pug
+b.HEADER.header
    +e.container.container
        +e.logo
            img(
                src="/images/header/logo.svg"
            )
        +e.right
            +e.A.phone(
                href="tel:+7 (926) 433-14-16"
            ) +7 (926) 433-14-16
            +e.BUTTON.button.button--standart.--font-size-medium.--background-yellow заполнить анкету
</template>

<script>
export default {};
</script>
