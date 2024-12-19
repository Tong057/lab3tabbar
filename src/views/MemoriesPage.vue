<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button router-link="/memories/add">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Memories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Memories</ion-title>
        </ion-toolbar>
      </ion-header>

      <memories-list :memories="memories" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { add } from "ionicons/icons";
import MemoriesList from "../components/memories/MemoriesList.vue";

import { Memory } from "../types";
import { computed } from 'vue';
import { useStore } from 'vuex';

const memories = computed<Memory[]>(() => {
  return useStore().getters.memories;
});
</script>
