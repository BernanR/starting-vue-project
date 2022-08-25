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
                col:2
            },
            {
                type : 'email',
                placeholder: 'Tipy your email',
                label: 'Email',
                name: 'email',
                required: true,           
                value: '',
            },
            {
                type : 'password',
                placeholder: 'Tipy your password',
                label: 'Password',
                name: 'password',            
                value: '',
            },
            {
                type : 'password',
                placeholder: '',
                label: 'Confirm your password',
                name: 'password_confirm',
                id: 'password_confirm',
                value: '',
            }
        ]
    })

    function submit(data) {
        console.log('submit Form', data);
        console.log("I'm grad to arrive here!")
    }
</script>
