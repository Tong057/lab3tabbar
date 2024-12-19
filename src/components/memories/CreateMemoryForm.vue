<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item lines="full">
        <ion-label position="floating"><strong>Title</strong></ion-label>
        <ion-input class="margin" type="text" required v-model="enteredTitle" />
      </ion-item>

      <ion-item lines="full">
        <ion-label position="floating"><strong>Description</strong></ion-label>
        <ion-textarea class="margin" v-model="enteredDescription" />
      </ion-item>

      <ion-item lines="none" class="photo-section">
        <ion-thumbnail slot="start" class="preview-thumbnail">
          <img :src="takenImageUrl" v-if="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" expand="block" color="primary" class="take-photo-button" @click="takePhoto">
          <ion-icon slot="start" :icon="camera" />
          Take Photo
        </ion-button>
      </ion-item>
    </ion-list>

    <ion-button type="submit" expand="block" color="success" class="save-button">
      Save Memory
    </ion-button>
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
import { Geolocation, Position } from '@capacitor/geolocation';
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: "save-memory", memoryData: { title: string; imageUrl: string | undefined; description: string, coordinates: Position }): void;
}>();

const enteredTitle = ref<string>('');
const enteredDescription = ref<string>('');
const takenImageUrl = ref<string | undefined>(undefined);

async function takePhoto() {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 60
    });
    takenImageUrl.value = photo.webPath || undefined;
  } catch (error) {
    console.error("Error taking photo", error);
  }
}

async function submitForm() {
  if (!takenImageUrl.value) {
    alert('Please add a photo before saving.');
    return;
  }

  var coordinates = await Geolocation.getCurrentPosition();
  console.log(coordinates);

  const memoryData = {
    title: enteredTitle.value,
    imageUrl: takenImageUrl.value,
    description: enteredDescription.value,
    coordinates: coordinates
  };
  emit("save-memory", memoryData);
}
</script>

<style scoped>
.ion-padding {
  padding: 16px;
}

.margin {
  margin: 12px 0;
}

.photo-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.take-photo-button {
  flex-grow: 1;
  margin-left: 16px;
}

.preview-thumbnail {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.save-button {
  margin-top: 20px;
}
</style>
