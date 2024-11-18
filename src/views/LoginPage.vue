<template>
    <ion-page>
      <ion-content class="ion-padding content-center">
        <img src="../resources/TK.png" alt="Login Image" class="login-image" />

        <ion-input v-model="email" placeholder="Email" type="email"></ion-input>
        <ion-input v-model="password" placeholder="Password" type="password"></ion-input>
        <ion-button expand="full" @click="login">Log in</ion-button>        
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonButton, IonContent, IonInput, alertController } from '@ionic/vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  
  const login = async () => {
    if (email.value === 'admin@gmail.com' && password.value === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      router.replace('/tabs/memories')
    } else {
      const alert = await alertController.create({
        header: 'Login Failed',
        message: 'Invalid email or password',
        buttons: ['OK']
      });

      await alert.present();
    }
  };
  </script>
  
  <style scoped>
  ion-input {
    margin-bottom: 16px;
  }

  .content-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  