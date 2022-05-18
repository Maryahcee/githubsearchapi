<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import defaultTheme from "../utils/defaultTheme";

const store = useStore();

const theme = computed(() => {
  return store.getters.getTheme;
});

const toggleTheme = () => {
  let newTheme = store.getters.getTheme == "dark" ? "light" : "dark";
  store.dispatch("updateTheme", newTheme);
};
</script>

<template>
  <div
    class="container w-10/12 md:w-3/4 lg:w-3/4 xm:mt-10 sm:mt-2 md:mt-3 cursor-pointer text-lBlack dark:text-bright"
  >
    <nav class="relative mb-3 font-['Space_Mono']">
      <div class="text-lBlack dark:text-bright">
        <h1 class="text-2xl font-bold text-lBlack dark:text-bright">
          devfinder
        </h1>
      </div>
      <button
        @click="toggleTheme"
        class="absolute right-0 top-0 flex cursor-pointer hover:text-lGrey"
      >
        <span v-if="theme == 'light'" class="flex">
          <span class="text-md text-lBlack dark:text-bright mr-3">DARK</span>
          <img src="../assets/images/icon-moon.svg" alt="" />
        </span>

        <span v-else class="flex">
          <span
            class="text-md text-lBlack dark:text-bright mr-3 hover:text-lBlack"
            >Light</span
          >
          <img src="../assets/images/icon-sun.svg" alt="" />
        </span>
      </button>
    </nav>
  </div>
</template>
