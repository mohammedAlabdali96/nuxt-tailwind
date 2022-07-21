<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-white rounded-full"
      />
    </Switch>
  </div>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
const enabled = ref(false);
</script>
