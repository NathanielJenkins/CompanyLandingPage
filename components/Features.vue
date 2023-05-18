<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Map Features</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <feature-right
        headline="Live Run/Lift Statuses"
        content="Experience the slopes in real-time with live run statuses. Stay updated with the latest information on grooming, trail availability, and difficulty ratings. Know which runs have been freshly groomed for a pristine skiing experience. Check the open/closed status of trails to plan your routes accordingly. Discover runs suited to your skill level by exploring the dynamic difficulty ratings."
      >
        <img src="~/assets/img/run-statuses.png" class="flex shadow-lg rounded-md border object-cover" alt />
      </feature-right>
      <feature-left
        headline="Run Filtering and Highlighting"
        content="
        Refine your skiing experience with filtering and highlighting. Effortlessly customize your adventure by filtering trails based on based on difficulty and grooming status to find your ideal run. Take it a step further and highlight runs by difficulty or find runs serviceable runs by lifts to easily shape your day. Elevate your ski experience with precision and enjoyment!"
      >
        <div class="flex justify-center">
          <img src="~/assets/img/destinations.svg" class="flex object-cover h-64" alt />
        </div>
      </feature-left>

      <feature-right
        headline="Find Your Friends"
        content="Share your location with friends easily to easily stay connected while exploring mountain terrain. Say goodbye to confusion and missed connections, and embrace the joy of seamless meetups. Conquer the mountain together!"
      >
      <div class="flex justify-center">
        <img src="~/assets/img/friends.svg" class="flex object-cover h-64" alt />
      </div>
      </feature-right>
      <feature-left
        headline="Your Content, Managed Your Way"
        content="Introducing our interactive ski map Content Management System (CMS) that puts you in control. With our user-friendly interface, internal users can easily access and manage their own content directly on the map. Empower your team with the ability to create and edit map features like: amenities, runs, lifts and areas effortlessly. No need for intermediaries or technical expertise."
      >
        <div class="flex justify-center">
          <img src="~/assets/img/content.svg" class="flex object-cover h-64" alt />
        </div>
      </feature-left>


      <feature-right headline="Showcase your Amenities" content="Explore the vast array of mountain amenities at your fingertips. Experience the convenience and effortlessly explore the mountain amenities, such as restaurants and services, enhancing your guests skiing journey."> 
        <div class="flex justify-center">
          <img src="~/assets/img/amenity.svg" class="flex object-cover h-64" alt />
        </div>
      </feature-right>
    
    </div>
  </section>
</template>

<script>
import FeatureRight from "@/components/FeatureRight";
import FeatureLeft from "@/components/FeatureLeft";

import img from "@/assets/img/brand.png";

export default {
  name: "Features",
  components: {
    "feature-right": FeatureRight,
    "feature-left": FeatureLeft,
  },
};
</script>
