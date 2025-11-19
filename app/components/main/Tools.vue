<template>
  <div>
    <h2 class="text-[2rem] font-bold text-center mt-24 mb-8">
      Advanced Crypto Trading Tools for Faster, Smarter Transactions
    </h2>
    <div class="items-center justify-between gap-x-5 hidden md:flex">
      <div class="bg-[#F9FAFB] rounded-lg p-4 " v-for="i in slides">
        <img class="mx-auto" src="~/assets/images/trade.png" alt="trade" />
        <h5 class="text-lg font-semibold mb-2">
          Futures Trading with Up to 100x Leverage
        </h5>
        <p class="text-[#798084] font-normal mt-2">
          Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to
          100x leverage on Poloniex Futures.
        </p>
        <div class="flex items-center justify-between mt-6">
          <span> 30x max leverage </span>
          <span class="text-[#D7A81C]"> Trade </span>
        </div>
      </div>
    </div>

    <UCarousel :items="slides" dots :ui="{
      container: 'h-[24rem]',
      dots: 'bottom-0',
      dot: 'w-4 h-1',
      item: 'w-full flex-shrink-0 px-2'
    }" class="rounded-xl overflow-hidden md:hidden" indicators>
      <template #default="{ item }">
        <div class="bg-[#F9FAFB] rounded-lg p-4 ">
          <img class="mx-auto" src="~/assets/images/trade.png" alt="trade" />
          <h5 class="text-lg font-semibold mb-2">
            Futures Trading with Up to 100x Leverage
          </h5>
          <p class="text-[#798084] font-normal mt-2">
            Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to
            100x leverage on Poloniex Futures.
          </p>
          <div class="flex items-center justify-between mt-6">
            <span> 30x max leverage </span>
            <span class="text-[#D7A81C]"> Trade </span>
          </div>
        </div>
      </template>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
const slides = [
  {
    image: "/promo/1.png",
    title: "Trade Over 400+ Cryptocurrencies Instantly",
    text: "Trade Bitcoin, Ethereum, leverage contracts and more…"
  },
  {
    image: "/promo/2.png",
    title: "25x Futures",
    text: "Advanced crypto futures with secure engine…"
  },
  {
    image: "/promo/3.png",
    title: "Smart Trading Tools",
    text: "Boost trading efficiency using AI triggers…"
  }
]
</script>

<style></style>
