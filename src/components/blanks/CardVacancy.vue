<template lang="pug">
include ../../../tools/mixins.pug
+b.card-vacancy
    +e.name.tag {{ name }}
    +e.description
        +e.text {{ description }}
    +e.image
        img(
            :src="image"
        )
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    data() {},
};
</script>
