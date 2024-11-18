<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Logout</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Logout</ion-title>
        </ion-toolbar>
      </ion-header>

      <img src="../resources/TK.png" alt="Login Image" class="login-image" />
      <ion-item class="attention" lines="none">
        <ion-label class="bye-container">
          <ion-text class="ion-text-uppercase">Bye</ion-text>
          <ion-spinner name="dots"></ion-spinner>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
  import { IonImg, IonSpinner, IonLabel, IonItem, IonText } from "@ionic/vue";
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

  import { useRouter } from "vue-router";
  import { onMounted } from "vue";

  const router = useRouter();

onMounted(() => {
  logout();
});

function logout() {
  setTimeout(async () => {
    localStorage.removeItem('isAuthenticated');
    router.replace("/login");
  }, 3000);
}
</script>

<style scoped>
ion-img {
  height: 80%;
}

.attention {
  color: var(--ion-color-primary);
  font-size: 20px;
  font-weight: 700;
}

.bye-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>