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
              <MainCoinList :coins="topVolumeCoins" :isLoading="isLoading" />
            </template>

            <template #hot>
              <MainCoinList :coins="hotCoins" :isLoading="isLoading" />
            </template>
          </UTabs>
          <a href="#" class="text-sm text-gray-500 hover:text-gray-700 absolute md:top-7 md:right-6 flex items-center">
            View More
            <UIcon name="custom:arrow-simple" class="w-4 h-4 mt-0.5" />
          </a>
        </div>
        <MainMobileLiveMarket
          class="md:hidden"
          :coins="topVolumeCoins"
          :isLoading="isLoading"
        />
      </div>

      <div class="hidden md:block">
        <MainTopList title="Top 3 Losers" :list="topLosers" :isLoading="isLoading" />
        <MainTopList title="Top 3 Gainers" :list="topGainers" :isLoading="isLoading" class="mt-5" />
      </div>
      <div>
        <MainMobileTopList
          :gainers="topGainers"
          :losers="topLosers"
          :isLoading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import { useCoinDisplayData } from '~/composables/useMarketData'

const items = [
  { label: "Top volume", slot: "volume" },
  { label: "Hot Tokens", slot: "hot" },
] satisfies TabsItem[]

const {
  isLoading,
  topVolumeCoins,
  hotCoins,
  topGainers,
  topLosers,
} = useCoinDisplayData(8)
</script>
