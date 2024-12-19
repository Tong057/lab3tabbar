<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
    <!-- <ion-button item-content slot="end" @click.stop="deleteMemory">Delete</ion-button> -->
  </ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonThumbnail, IonImg, IonLabel, IonButton } from "@ionic/vue";
import { defineProps } from "vue";
import { useStore } from 'vuex';

interface Memory {
  id: string;
  title: string;
  image: string;
}

const props = defineProps<{
  memory: Memory;
}>();

const store = useStore();

const deleteMemory = (event: MouseEvent) => {
  event.stopPropagation();
  store.dispatch('deleteMemory', props.memory.id);
};
</script>
