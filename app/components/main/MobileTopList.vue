<template>
  <div class="w-full mt-6 md:hidden">

    <UTabs :items="tabs" variant="link" class="w-full"
      :ui="{ trigger: 'px-3 py-1 text-sm font-medium data-[selected=true]:text-black data-[selected=true]:font-semibold' }">

      <template #losers>
        <div v-if="losers.length === 0 && isLoading" class="mt-3 text-center text-gray-400 text-sm">
          Loading...
        </div>
        <div v-else class="flex flex-col gap-4 mt-3">
          <UiMarketRow v-for="c in losers" :key="c.id" :coin="c" />
        </div>
      </template>

      <template #gainers>
        <div v-if="gainers.length === 0 && isLoading" class="mt-3 text-center text-gray-400 text-sm">
          Loading...
        </div>
        <div v-else class="flex flex-col gap-4 mt-3">
          <UiMarketRow v-for="c in gainers" :key="c.id" :coin="c" />
        </div>
      </template>

    </UTabs>

  </div>
</template>

<script setup lang="ts">
import type { CoinTopDisplay } from '~/types/market'

defineProps<{
  gainers: CoinTopDisplay[]
  losers: CoinTopDisplay[]
  isLoading?: boolean
}>()

const tabs = [
  { label: "Top 3 Losers", slot: "losers" },
  { label: "Top 3 Gainers", slot: "gainers" }
]
</script>
