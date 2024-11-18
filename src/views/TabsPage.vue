<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="memories" href="/tabs/memories">
          <ion-icon aria-hidden="true" :icon="flash" />
          <ion-label>Memories</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="logout" href="/tabs/logout">
          <ion-icon aria-hidden="true" :icon="exit" />
          <ion-label>Logout</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { flash, exit } from 'ionicons/icons';
</script>
