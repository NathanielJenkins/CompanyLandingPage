<template>
  <div class="pt-24">
    <div class="container md:px-10 px-4 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left ms:order-last">
        <p class="uppercase tracking-loose w-full">Interactive Ski Maps</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">Explore the Slopes Like Never Before!</h1>
        <p class="leading-normal text-2xl mb-8 text-center md:text-left md:w-auto w-full">Discover Every Trail, Navigate Every Turn.</p>

        <div class="flex md:w-auto w-full space-x-2 justify-center">
          <!-- make this button a link -->
          <button
            onclick="window.open('https://skimap.netlify.app/','_blank')"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            Demo
          </button>
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 pb-8 text-center flex flex-col justify-center">
        <img class=" m-2 w-full md:w-4/5" src="~/assets/img/hero.png" alt />
        <!-- <div class="h-2 w-full md:w-4/5 bg-black rounded-full opacity-20"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
};
</script>
