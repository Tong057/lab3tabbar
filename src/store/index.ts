import { createStore, Store } from 'vuex';
import { Preferences } from '@capacitor/preferences';

interface Memory {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface State {
  memories: Memory[];
}

interface MemoryData {
  title: string;
  imageUrl: string;
  description: string;
}

const store: Store<State> = createStore<State>({
  state() {
    return {
      memories: []
    };
  },
  mutations: {
    setMemories(state, memories: Memory[]) {
      state.memories = memories;
    },
    addMemory(state, memoryData: MemoryData) {
      const newMemory: Memory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
    deleteMemory(state, memoryId: string) {
      state.memories = state.memories.filter(memory => memory.id !== memoryId);
    },
    saveMemoriesToStorage(state) {
      Preferences.set({
        key: 'memories',
        value: JSON.stringify(state.memories),
      });
    }
  },
  actions: {
    async loadMemories({ commit }) {
      const memoriesData = await Preferences.get({ key: 'memories' });
      const memories = memoriesData.value ? JSON.parse(memoriesData.value) : [];
      commit('setMemories', memories);
    },
    addMemory({ commit }, memoryData: MemoryData) {
      commit('addMemory', memoryData);
      commit('saveMemoriesToStorage');
    },
    deleteMemory({ commit }, memoryId: string) {
      commit('deleteMemory', memoryId);
      commit('saveMemoriesToStorage'); 
    }
  },
  getters: {
    memories(state): Memory[] {
      return state.memories;
    },
    memory(state): (memoryId: string) => Memory | undefined {
      return (memoryId: string) => state.memories.find(memory => memory.id === memoryId);
    },
  }
});

export default store;
