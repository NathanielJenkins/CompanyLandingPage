<template>
  <section class="bg-gray-100 border-b py-8">
    <div class="container max-w-5xl mx-auto m-8 text-center">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Swapping Maps</h1>
      <span class="text-gray-500"
        >Seamlessly swap between a real, geo-located, 3D version of your resort and a stylistic marketed world.</span
      >
      <client-only placeholder="loading...">
        <ImgComparisonSlider
          value="75"
          tabindex="0"
          hover="true"
          class="slider-with-animated-handle rendered mt-8 rounded-lg shadow-lg"
        >
          <!-- eslint-disable -->
          <img slot="first" style="width: 100%" src="~/assets/img/swap-real.min.png" />
          <img slot="second" style="width: 100%" src="~/assets/img/swap-marketing.min.png" />

          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </client-only>
    </div>
  </section>
</template>

<style lang="postcss">
.slider-with-animated-handle {
  --default-handle-width: 100px;
  --default-handle-color: white;
  stroke-width: 5px;
}

.slider-with-animated-handle:hover .custom-animated-handle {
  transform: scale(1.2);
}
</style>

<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
</script>
