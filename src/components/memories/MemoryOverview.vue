<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
  <p class="ion-text-center timestamp">Saved at: {{ formattedTimestamp }}</p>
  <p class="ion-text-center location" v-if="coordinates">
    Location: {{ coordinates.coords.latitude.toFixed(4) }}, {{ coordinates.coords.longitude.toFixed(4) }}
  </p>
</template>

<script setup lang="ts">
import { Position } from '@capacitor/geolocation';
import { IonImg } from '@ionic/vue';
import { defineProps, computed } from 'vue';

const props = defineProps<{
  title: string;
  image: string;
  description: string;
  timestamp: string;
  coordinates: Position | undefined;
}>();

const formattedTimestamp = computed(() => {
  const date = new Date(props.timestamp);
  return date.toLocaleString();
});
</script>

<style scoped>
.ion-text-center {
  text-align: center;
}

.timestamp {
  color: #888;
  font-size: 14px;
  margin-top: 8px;
}

.location {
  color: #555;
  font-size: 14px;
  margin-top: 8px;
}
</style>
