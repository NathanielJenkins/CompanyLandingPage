<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div class="w-full container mt-0 mx-auto flex flex-wrap items-center justify-between">
      <div class="pl-4 flex items-center py-4">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <button class="menu-button" @click.prevent.stop="onToggleClick">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <NuxtLink class="inline-block py-2 px-4 text-black" to="/about">About Us</NuxtLink>
          </li>
        </ul>
        <div
          :class="navActionClassList"
          class="w-fit lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
          <NuxtLink to="/contact"> Contact </NuxtLink>
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<style lang="postcss" scoped>
.menu-button {
  @apply flex items-center p-1 hover:text-gray-900;
  color: var(--compliment-color);
}
</style>
<script>
import Logo from "@/components/Logo";

export default {
  name: "TheHeader",
  components: {
    logo: Logo,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    };
  },
  computed: {
    isSticky() {
      return this.scrollY > 0 || this.isOpen;
    },
    headerClassList() {
      return this.isSticky ? "bg-white shadow" : "bg-transparent";
    },
    navActionClassList() {
      return this.isSticky ? "gradient text-white" : "bg-white text-gray-800";
    },
    navContentClassList() {
      let classList = this.isSticky ? "bg-white" : "bg-gray-100";
      if (!this.isOpen) {
        classList += ` hidden`;
      }
      return classList;
    },
  },
  methods: {
    onClick() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onToggleClick() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  },
};
</script>
