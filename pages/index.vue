<template>
  <NuxtLayout>
    <hero />
    <features />
    <map-swap />
    <prices />
    <call-to-action />
  </NuxtLayout>
</template>

<script>
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Teasers from "@/components/Teasers";
import Prices from "@/components/Prices";
import CallToAction from "@/components/CallToAction";
import MapSwap from "@/components/MapSwap";

export default {
  name: "LandingPage",
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    "call-to-action": CallToAction,
  },
};
</script>
