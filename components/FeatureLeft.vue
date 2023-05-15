<template>
  <div class="flex flex-wrap flex-col-reverse sm:flex-row sm:order-last">
    <div class="mx-auto w-5/6 sm:w-1/2 p-6 sm:mt-6 mt-0 mb-6 sm:mb-0">
      <slot />
    </div>
    <div class="w-full sm:w-1/2 p-6 mt-6 ">
      <div class="align-middle">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{ headline }}</h3>
        <p class="text-gray-600 mb-8">
          {{ content }}
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureLeft",
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
