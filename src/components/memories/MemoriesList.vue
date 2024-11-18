<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memory-list-item>
  </ion-list>
</template>

<script setup lang="ts">
import { IonList } from "@ionic/vue";
import MemoryListItem from "./MemoryListItem.vue";

import { Memory } from "../../types";

const props = defineProps<{
  memories: Memory[];
}>();
</script>
