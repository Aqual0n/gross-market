<template lang="pug">
include ../../../tools/mixins.pug
+b.radio
    +e.label {{ label }}
    +e.list
        +e.item(
            v-for="(item, index) in list"
            v-on:click="$emit('input', index)"
        )
            +e.value(
                :class="{ active: value === index }"
            )
            +e.name {{ item }}
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
