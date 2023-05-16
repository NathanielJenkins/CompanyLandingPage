<template>
  <div class="flex flex-col w-5/6 lg:w-1/4 rounded-none lg:rounded-l-lg bg-white mt-4">
    <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
      <div class="p-8 text-center border-b-4 flex flex-col space-y-2">
        <span class="font-bold text-3xl">{{ name }}</span>
        <span class="text-sm text-gray-400 font-semibold">{{ subtitle }}</span>
      </div>
      <ul class="w-full text-center text-sm">
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
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: {
    name: String,
    list: Array,
    subtitle: String,
  },
};
</script>
