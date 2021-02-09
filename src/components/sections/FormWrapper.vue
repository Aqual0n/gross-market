<template lang="pug">
include ../../../tools/mixins.pug
+b.form-wrapper
    +e.container.container
        +e.H1.title.title--h1(
            :style="titleCss"
        ) {{ title }}
        +e.wrapper
            +e.column--left
                +e.FORM-COMPONENT.form(
                    @sendForm="sendForm"
                    :loading="form.loading"
                    :send="form.send"
                )
            +e.column--right
                +e.motivation
                    p(
                        :style="rightCss"
                    ) {{ rightTitle }}
                    span(
                        ref="text"
                        :style="textCss"
                    ) — стать любимым магазином для каждой российской семьи. #[br]#[br]Сотни тысяч наших сотрудников ежедневно работают над её достижением. #[br]#[br]Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.
                    +e.A.phone.button--standart.--height-big.--font-size-big.--background-gray(
                        href="tel:+7 (926) 433-14-16"
                    ) +7 (926) 433-14-16
</template>

<script>
import Form from '../blanks/Form.vue';

import animateScrollTo from 'animated-scroll-to';
import axios from 'axios';
export default {
    components: {
        'form-component': Form,
    },
    data: () => ({
        title: 'Работа твоей мечты',
        titleCss: {
            opacity: 1,
        },
        rightTitle: 'Наша суперцель',
        rightCss: {
            opacity: 1,
        },
        textCss: {
            opacity: 1,
            height: null,
        },
        form: {
            loading: false,
            send: false,
        },
        delay: 700,
    }),
    methods: {
        sendForm(data) {
            let formData = new FormData();
            Object.keys(data).forEach((key) => {
                let field = data[key];
                if (field || field === 0) {
                    formData.append(key, field);
                }
            });
            this.form.loading = true;
            animateScrollTo(0, {
                speed: 1000,
            });

            axios
                .post('/url', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setTimeout(() => {
                            this.form.loading = false;
                            this.form.send = true;
                        }, 1000);
                        setTimeout(() => {
                            this.setResponseContent();
                        }, 1000);
                    }
                })
                .catch(() => {
                    // todo: add error handling if it'll be neccesary
                    setTimeout(() => {
                        this.form.loading = false;
                        this.form.send = true;
                    }, 1000);
                    setTimeout(() => {
                        this.setResponseContent();
                    }, 1000);
                });
        },
        setResponseContent() {
            this.titleCss.opacity = 0;
            this.rightCss.opacity = 0;
            this.textCss.opacity = 0;
            this.textCss.height = `${
                this.$refs.text.getBoundingClientRect().height
            }px`;

            setTimeout(() => {
                this.title = 'Ждем тебя!';
                this.rightTitle = 'Остались вопросы?';
                this.textCss.height = `0px`;
            }, this.delay);

            setTimeout(() => {
                this.titleCss.opacity = 1;
                this.rightCss.opacity = 1;
            }, this.delay * 2);
        },
    },
};
</script>
