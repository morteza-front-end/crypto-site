<!-- components/HotTable.vue -->
<template>
  <div class="bg-white rounded-xl border border-gray-200 p-4">

    <!-- Tabs -->
    <UTabs :items="tabs" variant="link" class="flex justify-between items-center"
      :ui="{ list: 'flex gap-4', trigger: 'font-semibold text-sm' }">
      <template #right>
        <div class="text-xs text-gray-500 flex items-center gap-1 cursor-pointer">
          View More
          <UIcon name="i-lucide-chevron-right" />
        </div>
      </template>

      <!-- futures -->
      <template #futures>
        <div class="mt-4 flex flex-col divide-y divide-gray-200">
          <div v-for="item in hotFutures" :key="item.symbol" class="flex items-center justify-between py-3">
            <!-- left -->
            <div class="flex items-center gap-3">
              <UIcon :name="`custom:${item.icon}`" class="w-7 h-7" />
              <div class="flex flex-col">
                <span class="font-semibold text-sm">{{ item.symbol }}</span>
                <span class="text-xs text-gray-500">{{ item.volume }}</span>
              </div>
            </div>

            <!-- price -->
            <span class="font-semibold">{{ item.price }}</span>

            <!-- percent -->
            <span class="text-sm font-medium" :class="item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'">
              {{ item.change }}
            </span>

            <button class="text-yellow-500 font-semibold text-sm">Trade</button>
          </div>
        </div>
      </template>

      <!-- newly -->
      <template #new>
        <div class="mt-4 text-gray-500 text-sm">Under construction…</div>
      </template>
    </UTabs>
  </div>
</template>

<script setup>
const tabs = [
  { label: "Hot Futures", slot: "futures" },
  { label: "Newly added", slot: "new" }
]

const hotFutures = [
  { symbol: "BTC/USDT", volume: "22.3M", icon: "btc", price: "$118,896.89", change: "-1.08%" },
  { symbol: "ETH/USDT", volume: "12.3M", icon: "eth", price: "$4,896.89", change: "-2.87%" },
  { symbol: "CAR/USDT", volume: "1.2M", icon: "car", price: "$12,52.89", change: "-0.18%" },
  { symbol: "SOL/USDT", volume: "1.9M", icon: "sol", price: "$1,52.89", change: "+0.18%" },
  { symbol: "ACA/USDT", volume: "1.2M", icon: "aca", price: "$4,968.89", change: "+1.62%" }
]
</script>
