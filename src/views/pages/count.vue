<template>
    <MainLayout header-title=" Count using pinia to manager store.">
       
        <hr>

        <div class="text-center text-3xl">
            {{ storeCounter.count }}
        </div>
        <div class="buttons text-center">
            <button @click="storeCounter.decreaseCount" 
                class="bg-red-400 hover:bg-red-500 py-2 px-5 text-white rounded-3xl">
                -
            </button>
            <button @click="storeCounter.increaseCount" 
                class="bg-green-700 hover:bg-green-600 py-2 px-5 text-white rounded-3xl">
                +
            </button>
            <p> This number is : {{ storeCounter.oddOrEven }}</p>
        </div>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '@/layouts/Layout.vue';
    import { useCounterStore } from '@/stores/counter';

    const storeCounter = useCounterStore();
   
</script>