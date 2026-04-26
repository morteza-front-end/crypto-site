<template>
  <div class="bg-white rounded-xl border border-gray-200 p-4">

    <UTabs :items="tabs" variant="link" class="flex justify-between items-center"
      :ui="{ list: 'flex gap-4', trigger: 'font-semibold text-sm' }">
      <template #right>
        <div class="text-xs text-gray-500 flex items-center gap-1 cursor-pointer">
          View More
          <UIcon name="i-lucide-chevron-right" />
        </div>
      </template>

      <template #futures>
        <div v-if="coins.length === 0 && isLoading" class="mt-4 text-center text-gray-400 text-sm">
          Loading...
        </div>
        <div v-else class="mt-4 flex flex-col divide-y divide-gray-200">
          <div v-for="item in coins" :key="item.id" class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <img :src="item.iconUrl" :alt="item.symbol" class="w-7 h-7 rounded-full object-cover" />
              <div class="flex flex-col">
                <span class="font-semibold text-sm">{{ item.symbol }}</span>
                <span class="text-xs text-gray-500">{{ item.volume }}</span>
              </div>
            </div>

            <span class="font-semibold">{{ item.price }}</span>

            <span class="text-sm font-medium" :class="item.changeRaw < 0 ? 'text-red-500' : 'text-green-500'">
              {{ item.change }}
            </span>

            <button class="text-yellow-500 font-semibold text-sm">Trade</button>
          </div>
        </div>
      </template>

      <template #new>
        <div class="mt-4 text-gray-500 text-sm">Under construction…</div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { CoinDisplay } from '~/types/market'

defineProps<{
  coins: CoinDisplay[]
  isLoading?: boolean
}>()

const tabs = [
  { label: "Hot Futures", slot: "futures" },
  { label: "Newly added", slot: "new" }
]
</script>
