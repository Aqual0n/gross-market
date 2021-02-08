<template lang="pug">
include ../../../tools/mixins.pug
+b.SECTION.geography
    +e.container.container
        +e.H2.title.title--h2 География
    +e.container--map.container
        +e.map
            +e.filter
                +e.BUTTON.button.button--standart.--height-small.--font-size-medium(
                    v-for="(button, buttonIndex) in filter.buttons"
                    :class="buttonClass(buttonIndex)"
                    v-on:click="setFilter(buttonIndex)"
                ) {{ button.text }}
            +e.zoom
</template>

<script>
export default {
    data: () => ({
        date1: 2,
        filter: {
            activeIndex: 2,
            buttons: [
                {
                    text: 'юрлица',
                },
                {
                    text: 'физлица',
                },
                {
                    text: 'показать всё',
                },
            ],
        },
    }),
    methods: {
        buttonClass(index) {
            if (index === this.filter.activeIndex) {
                return 'button--background-yellow';
            }

            return 'button--background-white';
        },
        setFilter(index) {
            this.filter.activeIndex = index;
        },
    },
};
</script>
