<template>
    <MainLayout>        
        <!-- contact form -->
        <ActiveForm :form="form"></ActiveForm>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '../../layouts/Layout.vue';
    import ActiveForm from '../../components/ActiveForm.vue';
    import { ref } from 'vue';

    const form = ref({
        title : 'Personal Information',
        description: 'In case of dougt you can sent us a message trough this form below.',
        submit: submit,
        fields :   [
            {
                type : 'text',
                placeholder: 'Tipy your name',
                label: 'Name',
                name: 'name',            
                value: '',
                required: true,                
                erroMessage: 'Please put your name.',
                col: 'col-span-2'
            },
            {
                type : 'email',
                placeholder: 'Tipy your email',
                label: 'Email',
                name: 'email',
                required: true,
                validate : {email: true, min:10, max:10, unique: ['users', 'email']},         
                value: '',
                col: 'col-span-2'
            },            
            {
                type : 'select',
                placeholder: '',
                label: 'Champions',
                name: 'champions',
                id: 'champions',
                col: 'col-span-4',
                options: [
                    {value: 1, label: 'Tristana'},
                    {value: 2, label: 'Yasuo'},
                    {value: 3, label: 'Lux'},
                    {value: 3, label: 'Vi'},
                ]
            },
            {
                type : 'checkbox',
                placeholder: '',
                label: 'Wich one of this adjectives would you discrabe him?',
                name: 'positions',
                id: 'positions',
                col: 'col-span-4',
                options: [
                    {value: 1, label: 'Mid'},
                    {value: 2, label: 'Bot'},
                    {value: 3, label: 'To'},
                    {value: 4, label: 'Wind'},
                ],
                value: [1,3]
            },
            {
                type : 'radio',
                placeholder: '',
                label: 'Wich one of this adjectives would you discrabe him?',
                name: 'lanes',
                id: 'lanes',
                col: 'col-span-4',
                options: [
                    {value: 1, label: 'Mid'},
                    {value: 2, label: 'Bot'},
                    {value: 3, label: 'To'},
                    {value: 4, label: 'Wind'},
                ],
                value: []
            },            
            {
                type : 'image',
                placeholder: '',
                label: 'Choose a image',
                name: 'image',
                id: 'image',
                col: 'col-span-4',
                required: true,
                value: '',
                erroMessage: 'Please choose a image.',
            },
            {
                type : 'password',
                placeholder: 'Tipy your password',
                label: 'Password',
                name: 'password',
                required: true,
                validate: {password: true},
                col: 'col-span-2',
                value: '',
            },
            {
                type : 'password',
                placeholder: '',
                label: 'Confirm your password',
                name: 'password_confirm',
                id: 'password_confirm',
                validate : { confirm: 'password' },
                col: 'col-span-2',
                value: '',
            }            
        ]
    })

    function submit(data) {
        console.log('submit Form', data);
        console.log("I'm grad to arrive here!")
    }
</script>
