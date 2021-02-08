<template lang="pug">
include ../../../tools/mixins.pug
+b.input(
    v-on:click.stop
)
    +e.label {{ label }}
    +e.value--select(
        ref="select"
        :class="{ active: active }"
        v-on:click="$emit('toggleSelect')"
    )
        +e.selected {{ list[value] }}
        +e.list(
            :class="{ active: active }"
            v-on:click.stop
        )
            +e.item(
                v-for="(item, index) in list"
                v-on:click="onInput(index)"
            ) {{ item }}
</template>

<script>
export default {
    props: {
        active: {
            required: true,
            type: Boolean,
        },
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
        list: {
            type: Array,
            required: true,
        },
        error: {
            type: Boolean,
            required: false,
        },
        errorText: {
            type: String,
            required: false,
            default: '',
        },
    },
    mounted() {
        document.addEventListener('click', this.closeSelect);
    },
    destroyed() {
        document.removeEventListener('click', this.closeSelect);
    },
    methods: {
        onInput(index) {
            this.$emit('input', index);
            this.closeSelect();
        },
        closeSelect() {
            this.$emit('closeSelect');
        },
    },
};
</script>
