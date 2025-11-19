<template>
  <div class="mt-8 lg:mt-19">
    <h3 class="text-xl lg:text-[2rem] font-bold mb-4 lg:mb-7] ">Frequently Questions About Bitcoin</h3>

    <div class="flex flex-col gap-3">
      <div v-for="(q, index) in items" :key="q.title" class=" overflow-hidden"
        :class="openIndex === index ? 'bg-[#F1F1F1] rounded-2xl' : ''">
        <button @click="toggle(index)" class="w-full flex items-center justify-between px-4 py-4"
          :aria-expanded="openIndex === index">
          <div class="text-left">
            <div class="text-sm font-medium text-gray-900">{{ q.title }}</div>
          </div>

          <div class="flex items-center gap-3 border rounded-full"
            :class="openIndex === index ? 'bg-[#D7A81C] border-[#D7A81C]' : ''">
            <UIcon :name="openIndex === index ? 'ph-minus' : 'ph-plus'" class="text-sm"
              :class="openIndex === index ? 'text-[#F1F1F1]' : 'text-[#353535]'" />
          </div>
        </button>

        <transition name="slide-fade">
          <div v-show="openIndex === index" class="px-4 pb-4 pt-2  text-sm text-gray-600">
            {{ q.content }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Faq {
  title: string
  content: string
}

interface Props {
  items?: Faq[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    { title: 'What is a cryptocurrency exchange?', content: 'Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.' },
    { title: 'What products does Binance provide?', content: 'They provide spot, futures, savings, staking, etc.' },
    { title: 'How to buy Bitcoin and other cryptocurrencies on Binance', content: 'You can buy via card, bank transfer, or P2P depending on region.' },
    { title: 'How to track cryptocurrency prices', content: 'Use market pages, price alerts, or widgets.' },
    { title: 'How to trade cryptocurrencies on Binance', content: 'Use the spot/futures UI and place limit/market orders.' },
    { title: 'How to earn from crypto on Binance', content: 'Earn via staking, savings, liquidity mining, or earn products.' },
  ]
})

const openIndex = ref<number | null>(props.items ? 0 : null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .18s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
