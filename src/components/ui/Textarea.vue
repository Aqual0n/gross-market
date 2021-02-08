<template lang="pug">
include ../../../tools/mixins.pug
+b.LABEL.input
    +e.label {{ label }}
    +e.TEXTAREA.value--textarea(
        name="Поле ввода"
        ref="input"
        :value="value"
        :placeholder="placeholder"
        v-on:focus="$emit('focus')"
        v-on:blur="$emit('blur')"
        v-on:input="onInput"
    )
</template>

<script>
export default {
    props: {
        placeholder: {
            required: false,
            type: [String, Number],
            default: '',
        },
        label: {
            required: false,
            type: [String, Number],
            default: '',
        },
        value: {
            required: true,
            type: [String, Number],
        },
    },
    methods: {
        onInput(e) {
            const target = e.target || e.srcElement;
            let { value } = target;

            this.$emit('input', value);
        },
    },
};
</script>
