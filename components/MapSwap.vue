<template>
  <section class="bg-gray-100 border-b py-8">
    <div class="container max-w-5xl mx-auto m-8 text-center flex flex-col items-center">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Swapping Maps</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <span class="text-gray-500"
        >Seamlessly swap between a real, geo-located, 3D version of your resort and a stylistic marketed world.</span
      >
      <client-only placeholder="loading...">
        <ImgComparisonSlider
          value="60"
          tabindex="0"
          hover="true"
          class="slider-with-animated-handle rendered mt-8 rounded-lg shadow-lg m-2"
        >
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="~/assets/img/swap-real.png" />
          <img slot="second" style="width: 100%" src="~/assets/img/swap-marketing.png" />

          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </client-only>
    </div>
  </section>
</template>

<style lang="postcss">
.slider-with-animated-handle {
  --default-handle-width: 100px;
  --default-handle-color: DarkSlateGray;
  stroke-width: 5px;
}

.slider-with-animated-handle:hover .custom-animated-handle {
  --default-handle-width: 150;
}
</style>

<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
</script>
