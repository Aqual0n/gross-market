<template lang="pug">
include ../../../tools/mixins.pug
+b.form-wrapper
    +e.container.container
        +e.H1.title.title--h1 Работа твоей мечты
        +e.wrapper
            +e.column--left
                +e.FORM.form
            +e.column--right
                +e.motivation
</template>

<script>
import Form from '../blanks/Form.vue';
export default {
    components: {
        'form-component': Form,
    },
};
</script>
