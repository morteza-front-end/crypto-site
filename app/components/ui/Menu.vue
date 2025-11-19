<script setup lang="ts">
const items = ref([
  {
    label: "Start Crypto Trading",
    children: [
      {
        label: "Introduction",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-custom-futures",
      },
      {
        label: "Spot",
        description: "Buy and sell by advanced tools",
        icon: "i-custom-convert",
      },
      {
        label: "Convert",
        icon: "i-custom-trade",
        description: "The easiest way to trade at all sizes ",
      },
    ],
  },
  {
    label: "cryptocurrency Overview",
    icon: "i-lucide-database",
    children: [
      {
        label: "Bitcoin price",
        icon: "i-custom-futures",
        description: "Define shortcuts for your application.",
        to: "/docs/composables/define-shortcuts",
      },
      {
        label: "Altcoin price",
        icon: "i-custom-convert",
        description: "Display a modal/slideover within your application.",
        to: "/docs/composables/use-overlay",
      },
      {
        label: "Meme price",
        icon: "i-custom-trade",
        description: "Display a toast within your application.",
        to: "/docs/composables/use-toast",
      },
      {
        label: "Top gainers/losers",
        icon: "i-custom-trade",
        description: "Display a toast within your application.",
        to: "/docs/composables/use-toast",
      },
      {
        label: "New listings",
        icon: "i-custom-trade",
        description: "Display a toast within your application.",
        to: "/docs/composables/use-toast",
      },
    ],
  },
  {
    label: "Buy Crypto",
    icon: "i-lucide-box",
    children: [
      {
        label: "Buy bitcoin",
        icon: "i-custom-futures",
      },
      {
        label: "Buy etheruem",
        icon: "i-custom-convert",
      },
      {
        label: "Buy memecoins",
        icon: "i-custom-trade",
      },
      {
        label: "buy ai tokens",
        icon: "i-custom-trade",
      },
      {
        label: "Sell crypto",
        icon: "i-custom-trade",
      },
    ],
  },
  {
    label: "Earn",
    icon: "",
    to: "",
  },
  {
    label: "Info",
    icon: "i-lucide-circle-help",
    children: [
      {
        label: "About us",
        icon: "i-custom-futures",
      },
      {
        label: "fees",
        icon: "i-custom-convert",
      },
      {
        label: "Security",
        icon: "i-custom-trade",
      },
    ],
  },
]);
</script>

<template>
  <UNavigationMenu
    class="hidden md:block"
    color="neutral"
    content-orientation="vertical"
    :items="items"
  />
</template>
