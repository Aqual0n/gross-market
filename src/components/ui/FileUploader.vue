<template lang="pug">
include ../../../tools/mixins.pug
+b.file-uploader(
    v-on:drop="onDrop"
    v-on:dragover.prevent
    v-on:dragenter.prevent="setDragCss('enter')"
    v-on:dragleave.prevent="setDragCss('leave')"
)
    +e.zone(
        :class="{ active: dragged }"
    )
        span Загрузить
    +e.button(
        v-on:click="openInput"
    ) {{ placeholder }}
    +e.INPUT.value(
        type="file"
        ref="file"
        v-on:change="onInput"
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
        dragged: false,
    }),
    methods: {
        onInput(e) {
            const target = e.target || e.srcElement;

            this.selected = target.value.split(/([\\/])/g).pop();

            this.$emit('input', target.files);
        },
        openInput() {
            this.$refs.file.click();
        },
        setDragCss(event) {
            this.dragged = event === 'enter';
        },
        onDrop(event) {
            this.dragged = false;

            // Prevent default behavior (Prevent file from being opened)
            event.preventDefault();

            let files = event.dataTransfer.files;

            this.$refs.file.files = files;
            this.$nextTick(() => {
                this.selected = files[0].name;
                this.$emit('input', event.dataTransfer.files);
            });
        },
    },
};
</script>
