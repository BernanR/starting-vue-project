<template>
    <div class="mx-auto max-w-[39rem] space-y-4 sm:mt-10 lg:max-w-[60rem]">
        <div class="mb-10">
            <h3>{{form.title}}</h3>
            <p>{{form.description}}</p>
        </div>

        <form @submit="submit">
            <div class="grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="field in form.fields" :class="[field.col ? `col-span-${field.col}` : '']">
                    <div v-if="field.type === 'text'" :class="[field.required ? 'required' : '']">
                        <label for="first-name" class="">{{field.label}}</label>
                        <input v-model="model[field.name]" type="text" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        :class="[field.error ? 'border-red-500 text-red-300' : '']"
                        />
                        <p v-if="field.error" class="text-red-500">{{ field.erroMessage }}</p>                        
                    </div>
                    <div v-if="field.type === 'email'">
                        <label for="first-name" :class="[field.required ? 'required' : '']">{{field.label}}</label>
                        <input v-model="model[field.name]" type="email" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        :class="[field.error ? 'border-red-500 shadow' : '']"
                        />
                        <p v-if="field.error" class="text-red-500">{{ field.erroMessage }}</p> 
                    </div>
                    <div v-if="field.type === 'password'">
                        <label for="first-name" class="">{{field.label}}</label>
                        <input v-model="model[field.name]" type="password" :name="field.name" :id="field.id" :placeholder="field.placeholder" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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

const model = {};
const fields = props.form.fields;

fields.forEach(field => {
    model[field.name] = field.value;
});

function submit(ev) {
    ev.preventDefault();
    if (validate())
        props.form.submit(model);
}

function validate() {
    let hasErro = false;
    fields.forEach(field => {
        if (field.required === true && model[field.name] === '') {
            hasErro = true;
            field.error = true;
            if (!field.erroMessage) 
                field.erroMessage = "This field is required!";
        }
    });

    return !hasErro;
}

</script>