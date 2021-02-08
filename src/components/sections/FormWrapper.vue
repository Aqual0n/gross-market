<template lang="pug">
include ../../../tools/mixins.pug
+b.form-wrapper
    +e.container.container
        +e.H1.title.title--h1 Работа твоей мечты
        +e.wrapper
            +e.column--left
                +e.FORM-COMPONENT.form
            +e.column--right
                +e.motivation
                    p Наша суперцель
                    span — стать любимым магазином для каждой российской семьи. #[br]#[br]Сотни тысяч наших сотрудников ежедневно работают над её достижением. #[br]#[br]Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.
                    +e.A.phone.button--standart.--height-big.--font-size-big.--background-gray(
                        href="tel:+7 (926) 433-14-16"
                    ) +7 (926) 433-14-16
</template>

<script>
import Form from '../blanks/Form.vue';
export default {
    components: {
        'form-component': Form,
    },
};
</script>
