<template lang="pug">
include ../../../tools/mixins.pug
+b.file-uploader(
    v-on:drop="onDrop"
    v-on:dragover.prevent
    v-on:dragenter.prevent
)
    +e.button(
        v-on:click="openInput"
    ) {{ placeholder }}
    +e.INPUT.value(
        type="file"
        ref="file"
        v-on:input="onInput"
    )
    +e.selected(
        :class="{ active: selected }"
    ) Выбранный файл: {{ selected }}
</template>

<script>
export default {
    props: {
        placeholder: {
            required: false,
            type: String,
            default: '',
        },
    },
    data: () => ({
        selected: null,
    }),
    methods: {
        onInput(e) {
            const target = e.target || e.srcElement;

            this.selected = target.value.split(/([\\/])/g).pop();

            this.$emit('input', target);
        },
        openInput() {
            this.$refs.file.click();
        },
        onDrop(event) {
            console.log('File(s) dropped');

            // Prevent default behavior (Prevent file from being opened)
            event.preventDefault();

            let files = event.dataTransfer.files;

            this.$refs.file.files = files;
            this.$nextTick(() => {
                this.selected = files[0].name;
                this.$emit('input', this.$refs.file);
            });
        },
    },
};
</script>
