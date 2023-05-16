<template>
  <div class="flex flex-wrap sm:flex-row sm:order-last">
    <div class="w-full sm:w-1/2 p-6">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-600 mb-8">
        {{ content }}
        <br />
      </p>
    </div>
    <div class="mx-auto w-full sm:w-1/2 p-6 sm:mt-6 mt-0 mb-6 sm:mb-0">
      <slot class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureRight",
  props: {
    headline: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
};
</script>
