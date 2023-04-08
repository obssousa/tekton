<template>
  <div class="absolute w-full max-w-[1200px] z-20">
    <header class="navbar rounded-3xl my-3 lg:my-4 w-auto lg:px-6">
      <div class="flex-1 gap-3">
        <img :src="LogoCinza" class="h-10" />
        <a class="font-semibold text-base lg:text-xl text-gray-300"
          >Bruna Sousa Arquitetura</a
        >
      </div>
      <div class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal px-1 gap-3">
          <li v-for="link in links" :key="link.title">
            <NuxtLink
              :to="link.route"
              class="font-semibold hover:bg-slate-100 border-2 hover:text-primary-50"
              :class="
                isLinkActive(link.route)
                  ? 'block md:bg-transparent border-primary-90  text-primary-90'
                  : 'block text-gray-300 rounded border-transparent'
              "
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end w-auto lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary-40 -scale-y-100 -rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content -right-4 mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li v-for="link in links" :key="link.title">
              <NuxtLink
                :to="link.route"
                :class="
                  isLinkActive(link.route)
                    ? 'block rounded md:bg-transparent text-primary-50 hover:text-primary-40'
                    : 'block text-neutral-700 hover:bg-slate-100 rounded hover:text-primary-50'
                "
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Logo from "@/assets/logo.png";
import LogoCinza from "@/assets/logo-cinza.png";

const links = reactive([
  {
    title: "Inicio",
    route: "/",
  },
  {
    title: "Projetos",
    route: "/projects",
  },
  {
    title: "Contato ",
    route: "/about",
  },
]);

const route = useRoute();

const isLinkActive = (link) => route.path === link;
</script>
