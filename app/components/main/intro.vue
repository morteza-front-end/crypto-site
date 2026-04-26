<template>
  <section class="mt-8">
    <h2 class="text-2xl font-bold text-center">Why US?</h2>
    <div class="flex items-center justify-between flex-wrap mt-4 md:mt-8">
      <div
        class="font-semibold text-base text-[#353535] flex items-start md:items-center flex-col w-1/2 md:w-fit"
      >
        <span class="md:text-xl">
          {{ totalCryptos > 0 ? formatNumber(totalCryptos) : '2,334,894' }}
        </span>
        <span class="font-normal text-sm md:text-base text-[#575C5E] mt-2"
          >registered users</span
        >
      </div>
      <div
        class="font-semibold text-base text-[#353535] flex items-end md:items-center flex-col w-1/2 md:w-fit"
      >
        <span class="md:text-xl"> +700 Coins </span>
        <span class="font-normal text-sm md:text-base text-[#575C5E] mt-2"
          >Newest coins</span
        >
      </div>

      <div
        class="font-semibold text-base text-[#353535] flex items-start md:items-center flex-col w-1/2 md:w-fit"
      >
        <span class="md:text-xl">
          {{ activePairs > 0 ? formatNumber(activePairs) : '+1,876' }}
        </span>
        <span class="font-normal text-sm md:text-base text-[#575C5E] mt-2"
          >24h Trading pairs</span
        >
      </div>
      <div
        class="font-semibold text-base text-[#353535] flex items-end md:items-center flex-col w-1/2 md:w-fit"
      >
        <span class="md:text-xl">
          {{ totalVolume24h ? formatMarketCap(totalVolume24h) : '$10.67 Billion' }}
        </span>
        <span class="font-normal text-sm md:text-base text-[#575C5E] mt-2"
          >24h Trading volume</span
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useGlobalMetrics } from '~/composables/useMarketData'
import { formatNumber, formatMarketCap } from '~/utils/format'

const { data: globalData } = useGlobalMetrics()

const totalCryptos = computed(() => globalData.value?.total_cryptocurrencies ?? 0)
const activePairs = computed(() => globalData.value?.active_market_pairs ?? 0)
const totalVolume24h = computed(() => globalData.value?.total_volume_24h?.USD ?? 0)
</script>
