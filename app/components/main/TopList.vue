<template>
  <div class="px-4 py-2 rounded-xl border border-gray-200 w-full bg-[#F9FAFB]">
    <h2 class="text-lg font-semibold border-b border-[#E8E9E9] mb-4 pb-2">
      {{ title }}
    </h2>

    <div class="flex flex-col gap-4">
      <div
        v-for="coin in list"
        :key="coin.symbol"
        class="flex items-center justify-between"
      >
        <!-- سمت چپ -->
        <div class="flex items-center gap-3">
          <UIcon :name="`custom:${coin.icon}`" class="w-8 h-8 rounded-full" />
          <div class="flex flex-col leading-tight">
            <span class="font-semibold text-gray-900 text-sm">
              {{ coin.name }}
            </span>
            <span class="text-xs text-gray-400">
              {{ coin.symbol }}
            </span>
          </div>
        </div>

        <!-- قیمت + درصد -->
        <div class="flex flex-col items-end leading-tight">
          <span class="font-medium text-sm text-gray-900">
            {{ coin.price }}
          </span>
          <span
            class="text-xs font-medium"
            :class="
              coin.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
            "
          >
            {{ coin.change }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  list: Array,
});
</script>
