<template lang="pug">
include ../../../tools/mixins.pug
+b.input(
    :class="{ error: error }"
)
    +e.label {{ label }}
    +e.DATEPICKER.value--datepicker(
        ref="input"
        :format="'dd.MM.yyyy'"
        :placeholder="placeholder"
        :language="language"
        v-on:focus="$emit('focus')"
        v-on:blur="$emit('blur')"
        v-on:input="onInput"
    )
    +e.error(
        :class="{ active: error }"
    ) {{ errorText }}
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import * as lang from 'vuejs-datepicker/src/locale';
export default {
    components: {
        Datepicker,
    },
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
        error: {
            type: Boolean,
            required: false,
        },
        errorText: {
            type: String,
            required: false,
            default: 'Ошибка',
        },
        type: {
            type: String,
            default: 'text',
        },
        mask: {
            type: String,
            required: false,
            default: '',
        },
    },
    data: () => ({
        language: lang.ru,
    }),
    methods: {
        onInput() {
            const value = this.$refs.input.$el.querySelector('input')
                .placeholder;

            this.$emit('input', value);
        },
    },
};
</script>
