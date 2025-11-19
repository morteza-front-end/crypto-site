<template>
  <div class="flex flex-col">
    <div
      v-for="(coin, index) in coins"
      :key="coin.symbol"
      :class="index === coins.length - 1 ? 'pt-3' : 'py-2'"
      class="flex items-center justify-between md:gap-6.75"
    >
      <div class="flex items-center gap-3 md:w-35.5">
        <UIcon :name="`custom:${coin.icon}`" class="w-8 h-8 rounded-full" />
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
        :class="coin.change.startsWith('-') ? 'text-red-500' : 'text-green-500'"
      >
        {{ coin.change }}
      </div>

      <a class="text-yellow-600 text-sm font-medium cursor-pointer"> Trade </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  coins: { type: Array, required: true },
});
</script>
