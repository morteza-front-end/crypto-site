<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="coin.iconUrl" :alt="coin.name" class="w-6 h-6 rounded-full object-cover" />
      <div class="flex flex-col leading-tight">
        <span class="text-sm font-semibold">{{ coin.symbol }}</span>
        <span class="text-xs text-gray-500">{{ coin.name }}</span>
      </div>
    </div>

    <div class="text-right leading-tight">
      <div class="text-sm font-medium">{{ coin.price }}</div>
      <div class="text-xs font-medium" :class="coin.changeRaw < 0 ? 'text-red-500' : 'text-green-500'">
        {{ coin.change }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CoinTopDisplay } from '~/types/market'

defineProps<{
  coin: CoinTopDisplay
}>()
</script>
