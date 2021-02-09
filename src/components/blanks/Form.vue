<template lang="pug">
include ../../../tools/mixins.pug
+b.form(
    :style="{ height: formHeight }"
    :class="{ loading: loading, send: send }"
)
    +e.body.form-step(
        ref="body"
    )
        +e.line
            +e.SELECT-COMPONENT.input(
                v-model="fields.select.value"
                :active="fields.select.active"
                :label="fields.select.label"
                :error="fields.select.error"
                :errorText="fields.select.errorText"
                :list="fields.select.list"
                @toggleSelect="toggleSelect"
                @closeSelect="closeSelect"
            )
        +e.line
            +e.INPUT-COMPONENT.input(
                v-model="fields.name.value"
                :label="fields.name.label"
                :error="fields.name.error"
                :errorText="fields.name.errorText"
                @blur="validateField(fields.name)"
            )
        +e.line
            +e.DATEPICKER-COMPONENT.input--small(
                v-model="fields.birthday.value"
                :label="fields.birthday.label"
                :placeholder="fields.birthday.placeholder"
                :error="fields.birthday.error"
                :errorText="fields.birthday.errorText"
                :mask="fields.birthday.mask"
                @blur="validateField(fields.birthday)"
            )
            +e.RADIO-COMPONENT.input--small(
                v-model="fields.gender.value"
                :label="fields.gender.label"
                :list="fields.gender.list"
            )
        +e.line
            +e.INPUT-COMPONENT.input--small(
                v-model="fields.phone.value"
                :label="fields.phone.label"
                :placeholder="fields.phone.placeholder"
                :error="fields.phone.error"
                :errorText="fields.phone.errorText"
                :mask="fields.phone.mask"
                @blur="validateField(fields.phone)"
            )
            +e.INPUT-COMPONENT.input--small(
                v-model="fields.email.value"
                :label="fields.email.label"
                :placeholder="fields.email.placeholder"
                :error="fields.email.error"
                :errorText="fields.email.errorText"
                @blur="validateField(fields.email)"
            )
        +e.line--column
            +e.TEXTAREA-COMPONENT.input(
                v-model="fields.textarea.value"
                :label="fields.textarea.label"
            )
            +e.FILE-UPLOADER-COMPONENT.file(
                :placeholder="fields.file.placeholder"
                @input="inputFile"
            )
        +e.line--wrap
            +e.label Капча
            +e.captcha(
                v-on:click="toggleCheckbox('captcha')"
            )
                +e.checkbox.checkbox__.--center
                    +e.value--white(
                        :class="{ active: fields.captcha.checked, error: fields.captcha.error }"
                    )
                        svg(
                            width="13"
                            height="11"
                            viewBox="0 0 13 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        )
                            path(
                                d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                            )
                    +e.text--black я не робот
                    +e.IMG.captcha(
                        src="/images/form/captcha.png"
                    )
            +e.required * поля для обязательного заполнения
        +e.line--small-margin
            +e.checkbox.checkbox__(
                v-on:click="toggleCheckbox('privacy')"
            )
                +e.value(
                    :class="{ active: fields.privacy.checked, error: fields.privacy.error }"
                )
                    svg(
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    )
                        path(
                            d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                        )
                +e.text я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *
        +e.line--small-margin
            +e.BUTTON.button.button--standart.--font-size-medium(
                :class="buttonClass"
                v-on:click="sendForm"
            ) отправить
    +e.preloader.form-step
    +e.response.form-step.response__(
        ref="response"
    )
        +e.text В 2020 году самыми востребованными умениями и качествами на рынке труда станут:
        +e.quote Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая мотивация, умение эффективно общаться, любознательность.
        +e.text А профессиональным навыкам можно научить любого человека.
</template>

<script>
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Radio from '../ui/Radio';
import FileUploader from '../ui/FileUploader';
import Datepicker from '../ui/Datepicker';
export default {
    components: {
        'input-component': Input,
        'textarea-component': Textarea,
        'select-component': Select,
        'radio-component': Radio,
        'datepicker-component': Datepicker,
        'file-uploader-component': FileUploader,
    },
    props: {
        loading: {
            type: Boolean,
            required: true,
        },
        send: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        formHeight: null,
        fields: {
            name: {
                type: 'text',
                value: '',
                label: 'ФИО *',
                placeholder: 'test',
                error: false,
                errorText: '',
                required: true,
            },
            birthday: {
                type: 'text',
                value: '',
                label: 'Дата рождения *',
                placeholder: '28.07.2002',
                error: false,
                errorText: '',
                required: true,
                mask: '##.##.####',
            },
            phone: {
                type: 'phone',
                value: '',
                label: 'Контактый телефон *',
                placeholder: '+7 (',
                error: false,
                errorText: '',
                required: true,
                mask: '+7 (###) ### ## ##',
            },
            email: {
                type: 'email',
                value: '',
                label: 'Электронная почта',
                placeholder: 'example@mail.com',
                error: false,
                errorText: '',
                required: false,
            },
            textarea: {
                value: '',
                label: 'Резюме',
                required: false,
            },
            select: {
                active: false,
                value: 0,
                label: 'Вакансия *',
                placeholder: 'test',
                list: [
                    'Водитель',
                    'Кассир',
                    'Пекарь',
                    'Повар',
                    'Приёмщик',
                    'Продавец',
                    'Товаровед',
                ],
                error: false,
                errorText: '',
                required: true,
            },
            gender: {
                value: 0,
                label: 'Пол',
                placeholder: 'test',
                list: ['мужской', 'женский'],
                required: false,
            },
            file: {
                placeholder: 'выберете или перетащите файл',
                value: null,
            },
            privacy: {
                type: 'checkbox',
                error: false,
                required: true,
                checked: false,
            },
            captcha: {
                type: 'checkbox',
                error: false,
                required: true,
                checked: false,
            },
        },
    }),
    computed: {
        buttonClass() {
            if (this.noErrors) {
                return 'button--background-yellow';
            }
            return 'button--background-gray';
        },
        noErrors() {
            let noErrors = true;
            const emailRegex = /\S+@\S+\.\S+/;

            Object.keys(this.fields).forEach((key) => {
                let field = this.fields[key];
                switch (field.type) {
                    case 'checkbox':
                        if (!field.checked) {
                            noErrors = false;
                        }
                        break;
                    case 'text': {
                        if (field.required && !field.value) {
                            noErrors = false;
                        }
                        break;
                    }
                    case 'email': {
                        if (!emailRegex.test(field.value) && field.value) {
                            noErrors = false;
                        }
                        break;
                    }
                    case 'phone': {
                        if (field.value.length < 18 || !field.value) {
                            noErrors = false;
                        }
                        break;
                    }
                }
            });

            return noErrors;
        },
        formData() {
            let formData = {};
            Object.keys(this.fields).forEach((key) => {
                let field = this.fields[key];
                if (field.type !== 'checkbox') {
                    formData[key] = field.value;
                }
            });
            return formData;
        },
    },
    watch: {
        send() {
            setTimeout(() => {
                this.setFormHeight();
            }, 300);
        },
    },
    mounted() {
        this.onResize();

        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        toggleSelect() {
            this.fields.select.active = !this.fields.select.active;
        },
        closeSelect() {
            this.fields.select.active = false;
        },
        inputFile(files) {
            this.fields.file.value = files[0];
        },
        toggleCheckbox(field) {
            this.fields[field].checked = !this.fields[field].checked;
            if (this.fields[field].checked) {
                this.fields[field].error = false;
            }
        },
        validateField(field) {
            let validated = true;
            const emailRegex = /\S+@\S+\.\S+/;

            switch (field.type) {
                case 'checkbox':
                    field.error = !field.checked;
                    break;
                case 'text': {
                    field.error = !field.value;

                    if (field.error) {
                        field.errorText = 'поле не заполнено';
                    } else {
                        field.errorText = '';
                    }
                    break;
                }
                case 'email': {
                    field.error = !emailRegex.test(field.value);

                    if (field.error && field.value) {
                        field.errorText = 'поле заполнено не корректно';
                    } else {
                        field.errorText = '';
                        field.error = false;
                    }
                    break;
                }
                case 'phone': {
                    field.error = field.value.length < 18 || !field.value;

                    if (field.error && !field.value) {
                        field.errorText = 'поле не заполнено';
                    } else if (field.error) {
                        field.errorText = 'поле заполнено не до конца';
                    }
                    break;
                }
            }

            validated = field.error;

            return validated;
        },
        validate() {
            let validated = true;
            Object.keys(this.fields).forEach((key) => {
                let field = this.fields[key];
                if (!this.validateField(field)) {
                    validated = false;
                }
            });

            return validated;
        },
        sendForm() {
            this.validate();
            if (this.noErrors) {
                this.$emit('sendForm', this.formData);
            }
        },
        onResize() {
            this.$nextTick(() => {
                this.setFormHeight();
            });
        },
        setFormHeight() {
            if (!this.send) {
                this.formHeight = `${
                    this.$refs.body.getBoundingClientRect().height
                }px`;
            } else {
                this.formHeight = `${
                    this.$refs.response.getBoundingClientRect().height
                }px`;
            }
        },
    },
};
</script>
