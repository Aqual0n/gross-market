<template lang="pug">
include ../../../tools/mixins.pug
+b.form(
    :style="{ height: formHeight }"
)
    +e.body.form-step
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
            )
        +e.line
            +e.INPUT-COMPONENT.input--small(
                v-model="fields.birthday.value"
                :label="fields.birthday.label"
                :placeholder="fields.birthday.placeholder"
                :error="fields.birthday.error"
                :errorText="fields.birthday.errorText"
                :mask="fields.birthday.mask"
            )
            +e.RADIO-COMPONENT.input--small(
                v-model="fields.radio.value"
                :label="fields.radio.label"
                :list="fields.radio.list"
            )
        +e.line
            +e.INPUT-COMPONENT.input--small(
                v-model="fields.phone.value"
                :label="fields.phone.label"
                :placeholder="fields.phone.placeholder"
                :error="fields.phone.error"
                :errorText="fields.phone.errorText"
                :mask="fields.phone.mask"
            )
            +e.INPUT-COMPONENT.input--small(
                v-model="fields.email.value"
                :label="fields.email.label"
                :placeholder="fields.email.placeholder"
                :error="fields.email.error"
                :errorText="fields.email.errorText"
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
    +e.preloader.form-step
    +e.response.form-step
</template>

<script>
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Radio from '../ui/Radio';
import FileUploader from '../ui/FileUploader';
export default {
    components: {
        'input-component': Input,
        'textarea-component': Textarea,
        'select-component': Select,
        'radio-component': Radio,
        'file-uploader-component': FileUploader,
    },
    data: () => ({
        formHeight: null,
        fields: {
            name: {
                value: '',
                label: 'ФИО *',
                placeholder: 'test',
                error: false,
                errorText: '',
                required: true,
            },
            birthday: {
                value: '',
                label: 'Дата рождения *',
                placeholder: '28.07.2002',
                error: false,
                errorText: '',
                required: true,
                mask: '##.##.####',
            },
            phone: {
                value: '',
                label: 'Контактый телефон *',
                placeholder: '+7 (',
                error: false,
                errorText: '',
                required: true,
                mask: '+7 (###) ### ## ##',
            },
            email: {
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
            radio: {
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
        },
    }),
    methods: {
        toggleSelect() {
            this.fields.select.active = !this.fields.select.active;
        },
        closeSelect() {
            this.fields.select.active = false;
        },
        inputFile(file) {
            this.fields.file.value = file;
        },
    },
};
</script>
