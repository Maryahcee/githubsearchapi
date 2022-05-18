<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import SearchField from "./components/SearchField.vue";
import Profile from "./components/Profile.vue";
import { computed } from "@vue/reactivity";
import { mapGetters, mapMutations } from "vuex";
import { useStore } from "vuex";

const store = useStore();

const theme = computed(() => {
  theme.mapGetters(["dark"]);
});
</script>



<template>
  <div
    :class="'dark' ? 'light' : 'dark'"
    class="bg-lGrayish dark:bg-black dark:text-White h-screen max-w-full flex flex-col mx-auto items-center justify-center font-['Space_Mono']"
  >
    <div>
      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
    </div>
    <Nav />
    <search-field />
    <profile />
    <RouterView />
  </div>
</template>
