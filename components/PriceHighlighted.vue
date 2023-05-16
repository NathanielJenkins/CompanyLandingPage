<template>
  <div class="flex flex-col w-5/6 lg:w-1/3 rounded-lg bg-white mt-4 shadow-lg z-10 border-2">
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
      <div class="p-8 text-center flex flex-col space-y-2">
        <span class="font-bold text-3xl">{{ name }}</span>
        <span class="text-sm text-gray-400 font-semibold">{{ subtitle }}</span>
      </div>
      <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
      <ul class="w-full text-center text-base font-bold">
        <li v-for="(item, index) in list" :key="index" class="border-b py-4">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
      <div class="flex items-center justify-center">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceHighlighted",
  props: {
    name: String,
    list: Array,
    subtitle: String,
  },
};
</script>
