<template>
  <div class="px-4 py-2 rounded-xl border border-gray-200 w-full bg-[#F9FAFB]">
    <h2 class="text-lg font-semibold border-b border-[#E8E9E9] mb-4 pb-2">
      {{ title }}
    </h2>

    <div v-if="list.length === 0 && isLoading" class="py-4 text-center text-gray-400 text-sm">
      Loading...
    </div>
    <div v-else class="flex flex-col gap-4">
      <div
        v-for="coin in list"
        :key="coin.id"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <img :src="coin.iconUrl" :alt="coin.symbol" class="w-8 h-8 rounded-full object-cover" />
          <div class="flex flex-col leading-tight">
            <span class="font-semibold text-gray-900 text-sm">
              {{ coin.name }}
            </span>
            <span class="text-xs text-gray-400">
              {{ coin.symbol }}
            </span>
          </div>
        </div>

        <div class="flex flex-col items-end leading-tight">
          <span class="font-medium text-sm text-gray-900">
            {{ coin.price }}
          </span>
          <span
            class="text-xs font-medium"
            :class="coin.changeRaw < 0 ? 'text-red-500' : 'text-green-500'"
          >
            {{ coin.change }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CoinTopDisplay } from '~/types/market'

defineProps<{
  title: string
  list: CoinTopDisplay[]
  isLoading?: boolean
}>()
</script>
