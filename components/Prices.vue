<template>
  <section class="bg-white py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center lg:items-stretch pt-6 my-12 lg:my-4">
        <price
          class="m-2"
          name="Basic"
          :list="listBasic"
          subtitle="Enjoy simplicity and reliability as you showcase your mountain"
        />
        <price-highlighted
          class="m-2"
          name="Standard"
          :list="listStandard"
          subtitle="Real-Time Insights: Elevate your guests experience with live feature statuses"
        />
        <price
          name="Custom"
          :list="listPro"
          class="m-2"
          subtitle="Tailored Solutions: With our Custom Tier Create a Map that is Fully Unique to Your Mountain"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Price from "@/components/Price";
import PriceHighlighted from "@/components/PriceHighlighted";

export default {
  name: "Prices",
  data() {
    return {
      listBasic: ["Custum Static Content (Runs, Lifts, Amentities)", "Static Popup Content", "In Map Branded Content"],
      listStandard: [
        "Custum Static Content (Runs, Lifts, Amentities)",
        "Popup Content",
        "Live Run/Lift Statuses",
        "Real and Marketed Map Swapping",
        "In Map Branded Content",
        "Content Management System (CMS) Access",
      ],
      listPro: [
        "Custum Static Content (Runs, Lifts, Amentities)",
        "Custom Popup Content",
        "Live Run/Lift Statuses + Additional Optional Data",
        "Real and Marketed Map Swapping",
        "In Map Branded Content",
        "Content Management System (CMS) Access",
        "Custom Legend Design",
        "Additional Custom Map Features + Interactions",
      ],
    };
  },
  components: {
    price: Price,
    "price-highlighted": PriceHighlighted,
  },
};
</script>
