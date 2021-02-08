<template lang="pug">
include ../../../tools/mixins.pug
+b.LABEL.input(
    :class="{ error: error }"
)
    +e.label {{ label }}
    template(
        v-if="!mask"
    )
        +e.INPUT.value(
            name="Поле ввода"
            ref="input"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            v-on:focus="$emit('focus')"
            v-on:blur="$emit('blur')"
            v-on:input="onInput"
        )
    template(
        v-else
    )
        +e.INPUT.value(
            v-mask="mask"
            name="Поле ввода"
            ref="input"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            v-on:focus="$emit('focus')"
            v-on:blur="$emit('blur')"
            v-on:input="onInput"
        )
    +e.error(
        :class="{ active: error }"
    ) {{ errorText }}
</template>

<script>
import { VueMaskDirective } from 'v-mask';
export default {
    directives: {
        mask: VueMaskDirective,
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
    methods: {
        onInput(e) {
            const target = e.target || e.srcElement;
            let { value } = target;

            this.$emit('input', value);
        },
    },
};
</script>
