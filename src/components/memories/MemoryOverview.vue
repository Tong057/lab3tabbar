<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script setup lang="ts">
import { IonImg } from '@ionic/vue';
import { defineProps } from 'vue';

// Определение пропсов с типизацией
const props = defineProps<{
  title: string;
  image: string;
  description: string;
}>();
</script>

<style scoped>
.ion-text-center {
  text-align: center;
}
</style>
