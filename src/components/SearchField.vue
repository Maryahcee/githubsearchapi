<script setup>
import { useStore } from 'vuex';

const store = useStore();

const getUserName = (theme) => store.dispatch("fetchUsers", theme);
</script>

<template>
  <div class="container w-10/12 md:w-3/4 lg:w-3/4">
    <form
      @submit.prevent="getUserName(userName)"
      class="w-full bg-white dark:bg-darkBlue rounded-xl font-['space_Mono'] mb-5 ring-1 ring-black outline-none ring-opacity-5"
    >
      <div class="flex justify-center items-center p-2">
        <img
          class="md:w-5 md:h-5 flex flex-row justify-center items-center md:ml-5 xm:ml-1"
          src="../assets/images/icon-search.svg"
          alt="Search"
        />
        <input
          v-model="userName"
          type="text"
          required
          placeholder="Search Github Usersname"
          class="md:w-full xm:w-3/4 md:px-3 xm:px-1 md:py-3 xm:py-2 md:text-base xm:text-sm outline-none ml-2 bg-white dark:bg-darkBlue dark:text-bright"
        />
        <div class="text-lg w-1/2">
          <p class="text-red-600">
            {{ store.getters.getError }}
          </p>
       </div>
        <button
          class="bg-lSky md:px-5 sm:px-4 xm:px-2 sm:py-3 md:py-4 xm:py-2 text-white md:text-base sm:text-base xm:text-sm rounded-lg hover:scale-y-1 hover:bg-blue-400"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>
