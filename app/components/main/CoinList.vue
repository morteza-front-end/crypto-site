<template>
  <div class="flex flex-col">
    <div v-if="coins.length === 0 && isLoading" class="py-8 text-center text-gray-400">
      Loading...
    </div>
    <template v-else>
      <div
        v-for="(coin, index) in coins"
        :key="coin.id"
        :class="index === coins.length - 1 ? 'pt-3' : 'py-2'"
        class="flex items-center justify-between md:gap-6.75"
      >
        <div class="flex items-center gap-3 md:w-35.5">
          <img :src="coin.iconUrl" :alt="coin.symbol" class="w-8 h-8 rounded-full object-cover" />
          <span class="text-sm font-semibold text-gray-900">
            {{ coin.symbol }}
          </span>
          <UIcon v-if="coin.hot" name="custom:hot" class="w-5 h-5" />
        </div>

        <div class="text-sm text-center font-semibold md:w-35.5">
          {{ coin.price }}
        </div>

        <div class="text-sm text-gray-500">
          {{ coin.volume }}
        </div>

        <div
          class="text-sm font-semibold w-16 text-right"
          :class="coin.changeRaw < 0 ? 'text-red-500' : 'text-green-500'"
        >
          {{ coin.change }}
        </div>

        <a class="text-yellow-600 text-sm font-medium cursor-pointer"> Trade </a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { CoinDisplay } from '~/types/market'

defineProps<{
  coins: CoinDisplay[]
  isLoading?: boolean
}>()
</script>
