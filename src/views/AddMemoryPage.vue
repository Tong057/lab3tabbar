<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="`/memories`"></ion-back-button>
        </ion-buttons>
        <ion-title>Add a Memory</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';
import { Position } from '@capacitor/geolocation';

const router = useRouter();
const store = useStore();

function saveMemory(memoryData: { title: string; imageUrl: string | undefined; description: string, coordinates: Position }) {
  store.dispatch('addMemory', memoryData);
  router.replace('/memories');
}
</script>
