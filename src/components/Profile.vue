<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
import { DEFAULT_USER_NAME } from "../users";
import formatDate from "../utils";

const store = useStore();

const userProfile = computed(() => {
  return store.getters.getUser;
});

onMounted(async () => {
  store.dispatch("fetchUsers", DEFAULT_USER_NAME);
});
</script>

<template>
  <!-- profile Section -->
  <div
    class="container w-10/12 md:w-3/4 lg:w-3/4 bg-white dark:bg-darkBlue rounded-md font-['Space_Mono'] ring-1 ring-black outline-none ring-opacity-5 flex"
  >
    <section class="w-full object-contain pl-5 m-1 flex flex-col rounded-md">
      <!-- profile Picture,User Name, User's Handle, Date Joined -->
      <div class="flex justify-center items-center mt-10">
        <img
          class="flex rounded-full md:w-20 md:h-20 sm:w-14 sm:h-14 xm:w-14 xm:h-14 mr-4"
          :src="userProfile.avatar_url"
          alt=""
        />
        <div class="w-full relative">
          <!-- Profile Name -->
          <h1
            class="md:tracking-wide sm:tracking-normal xm:tracking-tight md:text-xl xm:text-base font-bold text-darkBlue dark:text-bright"
          >
            {{ userProfile.login }}
          </h1>
          <!-- User's Handle -->
          <p class="text-lSky">@{{ userProfile.login }}</p>
          <!-- User's Date Joined -->
          <p
            class="md:absolute md:top-0 md:right-0 sm:relative xm:relative mr-10 text-lGrey dark:text-bright md:tracking-wide sm:tracking-normal xm:tracking-tighter font-normal mb-4"
          >
            {{ formatDate(userProfile.created_at) }}
          </p>
        </div>
      </div>
      <!-- User's Bio -->
      <p
        v-if="userProfile.bio"
        class="md:ml-24 pb-5 text-lGrey dark:text-bright md:text-base font-thin md:tracking-wide"
      >
        {{ userProfile.bio }}
      </p>
      <p
        v-else
        class="md:ml-24 pb-5 text-lGrey dark:text-bright md:text-base font-thin md:tracking-wide"
      >
        Not available
      </p>
      <!-- Followers section -->
      <div
        class="md:ml-24 bg-lGrayish dark:bg-black md:w-3/4 xm:w-10/12 rounded-md p-2 mb-8"
      >
        <ul
          class="flex flex-row relative md:text-lg sm:text-normal xm:text-sm mb-4"
        >
          <li
            class="flex items-center flex-col md:ml-2 xm:ml-1 text-lGrey dark:text-white md:tracking-normal xm:tracking-tighter"
          >
            Repos
            <span class="text-darkBlue dark:text-bright font-medium text-xl">{{
              userProfile.public_repos
            }}</span>
          </li>
          <li
            class="flex items-center -mx-5 flex-col absolute right-1/2 text-lGrey dark:text-white md:tracking-normal xm:tracking-tighter"
          >
            Followers
            <span class="text-darkBlue dark:text-bright font-medium text-xl">{{
              userProfile.followers
            }}</span>
          </li>
          <li
            class="flex items-center flex-col absolute right-0 md:mr-10 text-lGrey dark:text-white md:tracking-normal xm:tracking-tighter"
          >
            Following
            <span class="text-darkBlue dark:text-bright font-medium text-xl">{{
              userProfile.following
            }}</span>
          </li>
        </ul>
      </div>

      <!-- Social Links Section-->
      <div>
        <ul
          class="md:ml-24 mb-5 text-lGrey dark:text-white text-base md:text-base xm:text-sm"
        >
          <div class="flex md:flex-row sm:flex-row xm:flex-col">
            <!-- Location icon -->
            <div class="md:mr-40 flex mb-3">
              <img
                class="md:mr-5 xm:mr-2"
                src="../assets/images/icon-location.svg"
                alt=""
              />
              <li v-if="userProfile.location">{{ userProfile.location }}</li>
              <li v-else>Not available</li>
            </div>
            <!-- Twitter icon -->
            <div class="flex mb-3">
              <img
                class="md:mr-5 xm:mr-2 sm:ml-24 md:ml-0"
                src="../assets/images/icon-twitter.svg"
                alt=""
              />
              <li v-if="userProfile.twitter_username">
                {{ userProfile.twitter_username }}
              </li>
              <li v-else>Not available</li>
            </div>
          </div>
          <div class="flex md:flex-row sm:flex-row xm:flex-col">
            <!-- Website -->
            <div class="mr-24 flex mb-3">
              <img
                class="md:mr-5 xm:mr-2"
                src="../assets/images/icon-website.svg"
                alt=""
              />
              <a v-if="userProfile.blog" href="https://github.blog">{{ userProfile.blog }}</a>
              <p v-else>Not available</p>
            </div>
            <!-- Github Name -->
            <div class="flex">
              <img
                class="md:mr-5 xm:mr-2 sm:-ml-12 md:-ml-1 mb-3"
                src="../assets/images/icon-company.svg"
                alt=""
              />
              <li v-if="userProfile.login">@{{ userProfile.login }}</li>
              <li v-else>Not available</li>
            </div>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>
