<template>
  <div>
    <Menubar :model="items" class="custom-menubar"/>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Menubar from 'primevue/menubar';

  // Define el tipo de los elementos del menú
  interface MenuItem {
    label: string;
    icon: string;
    to: string;
  }2

  const items = ref<MenuItem[]>([
    { label: 'Inicio', icon: 'pi pi-home', to: '/' },
    { label: 'Productos', icon: 'pi pi-star', to: '/productos' },
    { label: 'Contacto', icon: 'pi pi-envelope', to: '/contacto' },
  ]);
</script>

<style scoped>
.custom-menubar {
  background-color: #D0E7D2;
  color: #ffffff;
}

</style>