<script setup>
import Nav from "./components/Nav.vue";
import SearchField from "./components/SearchField.vue";
import Profile from "./components/Profile.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

const store = useStore();

const theme = computed(() => {
  return store.getters.getTheme;
});
</script>

<template>
  <div :class="theme" class="bg-lGrayish dark:bg-black">
    <div
      class="bg-lGrayish dark:bg-black min-h-screen max-w-full flex flex-col mx-auto items-center justify-center font-['Space_Mono']"
    >
      <Nav />
      <search-field />
      <profile />
    </div>
    <p class="flex justify-center -mt-16 dark:text-bright tracking-wide">
      Challenge by
      <span>
        <a
          class="text-red-700 dark:text-rose-600"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          >Frontend Mentor</a
        >
      </span>
      . <span>Coded by</span>
      <a
        class="text-purple"
        href="https://www.frontendmentor.io/profile/Maryahcee"
        target="_blank"
      >
        <span class="text-red-700 dark:text-rose-600"> Mary Njoroge</span></a
      >.
    </p>
  </div>
</template>