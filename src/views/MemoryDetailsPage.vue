<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="`/tabs/memories`"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ loadedMemory ? loadedMemory.title : 'Loading...' }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image"
      :description="loadedMemory.description"></memory-overview>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import MemoryOverview from '../components/memories/MemoryOverview.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';

const route = useRoute();
const store = useStore();

const memoryId = route.params.id as string;
const loadedMemory = computed(() => store.getters.memory(memoryId));

</script>
