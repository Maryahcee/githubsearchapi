<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import SearchField from "./components/SearchField.vue";
import Profile from "./components/Profile.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

const store = useStore();

const theme = computed(() => {
  return store.getters.getTheme;
});
</script>

<template>
  <div
    class="light:bg-white dark:bg-black min-h-screen max-w-full flex flex-col mx-auto items-center justify-center font-['Space_Mono']"
    :class="theme"

  >
    <div>
      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
    </div>
    <Nav />
    <search-field />
    <profile />
  </div>
</template>
