<template>
  <div class="mt-8 md:mt-24">
    <h3 class="text-[2rem] hidden md:block text-center font-bold leading-14">
      Live Cryptocurrency Prices Market Data
    </h3>
    <p class="text-base font-normal text-[#575C5E] text-center hidden md:block">
      Top Gainers Today
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full md:mt-8">
      <div class="md:col-span-2">
        <div class="hidden md:block w-full rounded-xl border border-gray-200 relative md:w-212.5 bg-[#F9FAFB]">
          <UTabs :items="items" :ui="{ trigger: '' }" variant="link"
            class="px-4 py-2 text-sm md:text-xl md:font-semibold rounded-md">
            <template #volume>
              <MainCoinList :coins="coins" />
            </template>

            <template #hot>
              <MainCoinList :coins="coinsHot" />
            </template>
          </UTabs>
          <a href="#" class="text-sm text-gray-500 hover:text-gray-700 absolute md:top-7 md:right-6 flex items-center">
            View More
            <UIcon name="custom:arrow-simple" class="w-4 h-4 mt-0.5" />
          </a>
        </div>
        <MainMobileLiveMarket class="md:hidden" />
      </div>

      <div class="hidden md:block">
        <MainTopList title="Top 3 Losers" :list="losers" />
        <MainTopList title="Top 3 Gainers" :list="gainers" class="mt-5" />
      </div>
      <div>
        <MainMobileTopList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";

const items = [
  { label: "Top volume", slot: "volume" },
  { label: "Hot Tokes", slot: "hot" },
] satisfies TabsItem[];

const current = ref(items[0]);

const coins = [
  {
    symbol: "BTC/USDT",
    icon: "btc",
    price: "$117,851.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: true,
  },
  {
    symbol: "ETH/USDT",
    icon: "eth",
    price: "$2,896.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: true,
  },
  {
    symbol: "CAR/USDT",
    icon: "car",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: true,
  },
  {
    symbol: "SOL/USDT",
    icon: "sol",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: false,
  },
  {
    symbol: "ACE/USDT",
    icon: "aca",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: false,
  },
  {
    symbol: "ACE/USDT",
    icon: "aca",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: false,
  },
  {
    symbol: "ACE/USDT",
    icon: "aca",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: false,
  },
  {
    symbol: "SOL/USDT",
    icon: "sol",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
    hot: false,
  },
];

const coinsHot = [
  {
    symbol: "ACE/USDT",
    icon: "/coins/ace.png",
    price: "$12.89",
    volume: "23.98 M",
    change: "+15.08%",
  },
];

const losers = [
  {
    name: "Bitcoin",
    symbol: "btc",
    icon: "btc",
    price: "$116,100.32",
    change: "+1.23%",
  },
  {
    name: "Ethereum",
    symbol: "eth",
    icon: "eth",
    price: "$116,100.32",
    change: "+1.23%",
  },
  {
    name: "Solana",
    symbol: "sol",
    icon: "sol",
    price: "$116,100.32",
    change: "+1.23%",
  },
];

const gainers = [
  {
    name: "Bitcoin",
    symbol: "btc",
    icon: "btc",
    price: "$116,100.32",
    change: "+1.23%",
  },
  {
    name: "Ethereum",
    symbol: "eth",
    icon: "eth",
    price: "$116,100.32",
    change: "+0.92%",
  },
  {
    name: "Solana",
    symbol: "sol",
    icon: "sol",
    price: "$116,100.32",
    change: "+0.55%",
  },
];
</script>

<style></style>
