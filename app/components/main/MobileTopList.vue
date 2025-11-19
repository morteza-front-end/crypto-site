<template>
  <div class="w-full mt-6 md:hidden">

    <UTabs :items="tabs" variant="link" class="w-full"
      :ui="{ trigger: 'px-3 py-1 text-sm font-medium data-[selected=true]:text-black data-[selected=true]:font-semibold' }">

      <template #losers>
        <div class="flex flex-col gap-4 mt-3">
          <UiMarketRow v-for="c in losers" :key="c.symbol" :coin="c" />
        </div>
      </template>

      <template #gainers>
        <div class="flex flex-col gap-4 mt-3">
          <UiMarketRow v-for="c in gainers" :key="c.symbol" :coin="c" />
        </div>
      </template>

    </UTabs>

  </div>
</template>

<script setup>
const tabs = [
  { label: "Top 3 Losers", slot: "losers" },
  { label: "Top 3 Gainers", slot: "gainers" }
]

const losers = [
  { name: "BTC", full: "Bitcoin", icon: "btc", price: "$118,896.89", change: "-1.08%" },
  { name: "ETH", full: "Ethereum", icon: "eth", price: "$4,896.89", change: "-2.87%" },
  { name: "CAR", full: "Cardano", icon: "car", price: "$50.89", change: "-1.08%" }
]

const gainers = [
  { name: "SOL", full: "Solana", icon: "sol", price: "$152.89", change: "+4.16%" },
  { name: "BTC", full: "Bitcoin", icon: "btc", price: "$118,896.89", change: "+1.02%" },
  { name: "ETH", full: "Ethereum", icon: "eth", price: "$4,896.89", change: "+0.86%" }
]
</script>
