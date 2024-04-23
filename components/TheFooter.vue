<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 mr-6">
          <logo class="color-teal-400 fill-teal-400 stroke-teal-400" />
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Links</p>
        </div>
        <div class="flex-1">
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink
                to="https://www.linkedin.com/company/steepdeep?originalSubdomain=ca"
                class="no-underline hover:underline text-gray-800 hover:text-teal-500"
                >Linkedin</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <NuxtLink to="/about" class="no-underline hover:underline text-gray-800 hover:text-teal-500"
                >About Us</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "TheFooter",
  components: {
    logo: Logo
  }
};
</script>
