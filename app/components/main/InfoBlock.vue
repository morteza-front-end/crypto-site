<template>
  <div class="bg-white mt-8 lg:mt-24">
    <h2 class="text-2xl md:text-3xl font-bold mb-3">{{ title }}</h2>


    <p class="text-sm md:text-base text-gray-600 leading-relaxed" :class="{ 'line-clamp-4': !expanded }">
      {{ summary }}
    </p>

    <!-- expanded content -->
    <transition name="fade">
      <div v-if="expanded" class="mt-3 text-sm text-gray-600 leading-relaxed">
        <slot name="expanded">
          {{ expandedText }}
        </slot>
      </div>
    </transition>

    <div class="mt-3 flex items-center justify-center">
      <button @click="expanded = !expanded"
        class="text-xs font-medium text-amber-600 hover:underline inline-flex items-center gap-2">
        <span v-if="!expanded">Show More</span>
        <span v-else>Show Less</span>
        <UIcon :name="expanded ? 'ph-caret-up' : 'ph-caret-down'" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  title: { type: String, default: 'What is Bitcoin?' },
  summary: { type: String, default: `Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin continues to be the top cryptocurrency by market capitalization.` },
  expandedText: { type: String, default: `Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025...` }
})
const expanded = ref(false)
</script>

<style scoped>
/* tailwind line-clamp plugin would be ideal; fallback simple clamp */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .18s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
