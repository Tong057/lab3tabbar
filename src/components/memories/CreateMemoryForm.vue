<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating"><strong>Title</strong></ion-label>
        <ion-input class="margin" type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera" />
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating"><strong>Description</strong></ion-label>
        <ion-textarea v-model="enteredDescription" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script setup lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon
} from "@ionic/vue";
import { ref } from 'vue';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: "save-memory", memoryData: { title: string; imageUrl: string | undefined; description: string }): void;
}>();

const enteredTitle = ref<string>('');
const enteredDescription = ref<string>('');
const takenImageUrl = ref<string | undefined>(undefined);

async function takePhoto() {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 60
  });

  takenImageUrl.value = photo.webPath || undefined;
}

function submitForm() {
  const memoryData = {
    title: enteredTitle.value,
    imageUrl: takenImageUrl.value,
    description: enteredDescription.value,
  };
  emit("save-memory", memoryData);
}
</script>

<style scoped>

.margin {
  margin: 6px 0;
}
</style>
