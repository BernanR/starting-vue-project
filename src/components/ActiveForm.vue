<template>
    <div class="mx-auto max-w-[39rem] space-y-4 sm:mt-10 lg:max-w-[60rem]">
        <div class="mb-10">
            <h3>{{form.title}}</h3>
            <p>{{form.description}}</p>
        </div>

        <form @submit="submit">
            <div class="grid grid-cols-4 gap-4">
                <div v-for="field in form.fields" :class="[field.col ? field.col : '']">
                    <div v-if="field.type === 'text'" :class="[field.required ? 'required' : '']">
                        <label for="first-name" class="">{{field.label}}</label>
                        <input v-model="field.value" v-on:keyup="validate(field)" type="text" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md" 
                        :class="[
                            field.hasErro ? 'border-red-500 text-red-300' : 'border-gray-300',
                            field.checked && !field.hasErro ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : 'border-gray-300'
                        ]"
                        />
                        <p v-if="field.hasErro" class="text-red-500">{{ field.erroMessage }}</p>                        
                    </div>
                    <div v-if="field.type === 'email'">
                        <label for="first-name" :class="[field.required ? 'required' : '']">{{field.label}}</label>
                        <input v-model="field.value" v-on:blur="validate(field)" type="email" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        :class="[
                            field.hasErro ? 'border-red-500 text-red-300' : 'border-gray-300',
                            field.checked && !field.hasErro ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : 'border-gray-300'
                        ]"
                        />
                        <p v-if="field.hasErro" class="text-red-500">{{ field.erroMessage }}</p> 
                    </div>
                    <div v-if="field.type === 'password'">
                        <label for="first-name" :class="[field.required ? 'required' : '']">{{field.label}}</label>
                        <input v-model="field.value" v-on:blur="validate(field)" type="password" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        :class="[
                            field.hasErro ? 'border-red-500 text-red-300' : 'border-gray-300',
                            field.checked && !field.hasErro ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : 'border-gray-300'
                        ]"
                        />
                        <p v-if="field.hasErro" class="text-red-500">{{ field.erroMessage }}</p> 
                    </div>
                    <div v-if="field.type === 'select'">
                        <label for="first-name" :class="[field.required ? 'required' : '']">{{field.label}}</label>
                        <select 
                            v-model="field.value" v-on:change="validate(field)" :name="field.name" :id="field.id"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            :class="[
                            field.hasErro ? 'border-red-500 text-red-300' : 'border-gray-300',
                            field.checked && !field.hasErro ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : 'border-gray-300'
                        ]"
                        >
                            <option v-for="option in field.options" :value="option.value">{{option.label}}</option>
                        </select>
                        <p v-if="field.hasErro" class="text-red-500">{{ field.erroMessage }}</p> 
                    </div>
                    <div v-if="field.type === 'checkbox'">
                        <div class="mt-4 space-y-4">
                            <p class="text-gray-500">{{field.label}}</p>
                            <div class="flex items-start" v-for="option in field.options">
                                <div class="flex h-5 items-center">
                                <input v-model="field.value" @change="onCheckboxChange(field)" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                <label :for="option.value" class="font-medium text-gray-700"> {{option.label}}</label>
                                </div>
                            </div>
                        </div>
                        <p v-if="field.hasErro" class="text-red-500">{{ field.erroMessage }}</p> 
                    </div>
                    <div v-if="field.type === 'radio'">
                        <div class="mt-4 space-y-4" >
                            <p class="text-gray-500">{{field.label}}</p>
                            <div class="flex items-center" v-for="option in field.options">
                                <input :id="option.value" :value="option.value" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">{{option.label}}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 text-right">
                <button type="submit" class="bg-slate-700 hover:bg-slate-600 py-2 px-5 text-white rounded-3xl">Submit</button>
            </div>               
        </form>
    </div>
    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
        <div class="border-t border-gray-200" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    form : Array
})

const fields = props.form.fields;

function submit(ev) {
    ev.preventDefault();
    console.log("validate", checkFieldsIsValid())
    if (checkFieldsIsValid())
        props.form.submit(fields);
}

function checkFieldsIsValid() {
    let hasErro = false;
    fields.forEach(field => {        
        if (!validate(field))
            hasErro = true;
    });
    return !hasErro;
}

const validateRules = {
    email: (field)=> {
        if (!field.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            field.erroMessage = "Email invalid!";
            field.hasErro = true;
            return false;
        } 
        field.hasErro = false;
        field.checked = true;
        return true;        
    }, 
    password: (field) => {
        if (field.validate.password) {
            let errors = [];
            if (field.value.length < 8) 
                errors.push("Your password must be at least 8 characters"); 
            
            if (field.value.search(/[a-z]/i) < 0) 
                errors.push("Your password must contain at least one letter.");
            
            if (field.value.search(/[0-9]/) < 0) 
                errors.push("Your password must contain at least one digit."); 

            if (errors.length > 0) {
                field.erroMessage = errors.join("\n");
                field.hasErro = true;
                return false;
            }
        }
        field.hasErro = false;
        field.checked = true;
        return true;
    },
    confirm: (field) => {
        if(fields.filter(e => e.name === field.validate.confirm )[0].value !== field.value) {
            field.erroMessage = "Password doesn't math!";
            field.hasErro = true;
            return false;
        }
        field.hasErro = false;
        field.checked = true;
        return true; 
    }
}

function onCheckboxChange(model) {
  console.log(model)
}

function validate(field) {
    
    if (field.required === true && field.value === '') {
        field.hasErro = true;
        console.log(field.name, "error")
        if (!field.erroMessage) field.erroMessage = "This field is required!";
        return false;
    }

    if (field.validate) {
        let validRules = true;
        Object.keys(field.validate).forEach(rule => {
            if (validateRules[rule]) 
                if (!validateRules[rule](field)) validRules = false;
        })
        return validRules;
    }

    if (field.hasErro && field.required && field.value !== '') {
        field.hasErro = false;
        field.checked = true;
    }

    return true;
}

</script>