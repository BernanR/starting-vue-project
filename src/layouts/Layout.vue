<template>
  <div class="min-h-full">
    <Nav></Nav>
    <header v-if="slots.header || headerTitle" class="bg-white shadow">
      <div v-if="headerTitle" class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl tracking-tight font-bold text-gray-900">{{headerTitle}}</h1>
      </div>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="mx-auto py-2 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 sm:px-0">
          <slot></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script setup>
  import { useSlots } from 'vue';
  import Nav from './Nav.vue';
  
  const slots = useSlots();

  const props = defineProps({
    headerTitle: String
  })
  console.log("default Slots", slots.header)
</script>