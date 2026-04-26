<template>
  <section
    class="flex flex-col md:flex-row md:justify-between gap-4 mt-10 md:mt-27"
  >
    <div class="max-w-[43.81rem]">
      <h1
        class="text-[2rem] md:text-[2.5rem] font-bold md:leading-16 md:mr-10.5"
      >
        Buy, Trade & Earn Bitcoin and 100+ Cryptocurrencies
      </h1>
      <p
        class="text-[#575C5E] text-xl font-normal md:font-semibold leading-8 my-4 md:my-6"
      >
        Secure platform to trade Bitcoin, Ethereum and altcoins with low fees
      </p>
      <div class="flex flex-col md:flex-row gap-4">
        <UInput
          class="w-full md:w-78"
          size="xl"
          placeholder="Email"
          v-model="value"
        />
        <UButton class="justify-center dark:text-white text-[#131415]">
          Join & Earn $25 Bonus
        </UButton>
        <UButton
          class="justify-center dark:text-white text-[#131415] bg-[#F3F3F4]"
          icon="custom:google"
        >
          <span class="md:hidden"> Sign Up with Google </span>
        </UButton>
      </div>
    </div>

    <div
      class="w-full relative md:max-w-[27.81rem] md:border border-[#F3F3F4] rounded-2xl md:py-2 md:px-4"
    >
      <UTabs
        :items="items"
        variant="link"
        :ui="{ trigger: '' }"
        class="gap-1 w-full text-[#131415]"
      >
        <template #futures>
          <div class="flex flex-col">
            <div v-if="headerCoins.length === 0 && isLoading" class="py-6 text-center text-gray-400">
              Loading...
            </div>
            <template v-else>
              <div
                v-for="(coin, index) in headerCoins"
                :key="coin.id"
                class="flex items-center justify-between"
                :class="index === headerCoins.length - 1 ? 'pt-3 pb-0' : 'py-3'"
              >
                <div class="flex items-center gap-3 w-42.5 md:w-35">
                  <img :src="coin.iconUrl" :alt="coin.symbol" class="w-6 h-6 rounded-full object-cover" />
                  <div class="flex items-center gap-1 leading-tight">
                    <span class="font-semibold text-sm text-gray-900">{{ coin.symbol }}</span>
                    <span class="text-xs text-gray-500">{{ coin.name }}</span>
                    <UIcon v-if="coin.hot" name="custom:hot" class="w-5 h-5" />
                  </div>
                </div>

                <div
                  class="text-sm text-left md:text-right w-20.5 md:w-[7.47rem] font-semibold"
                >
                  {{ coin.price }}
                </div>
                <div
                  class="text-sm font-semibold"
                  :class="coin.changeRaw < 0 ? 'text-red-500' : 'text-green-500'"
                >
                  {{ coin.change }}
                </div>
              </div>
            </template>
          </div>
        </template>
        <template #new> </template>
      </UTabs>
      <div class="ml-4">
        <a
          href="#"
          class="absolute text-xs text-gray-500 hover:text-gray-700 right-0 md:right-3 top-2.5 md:top-4.5 flex items-center font-normal"
        >
          View More
          <UIcon name="custom:arrow-simple" class="w-4 h-4 mt-0.5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"
import { useCoinDisplayData } from '~/composables/useMarketData'

const items = [
  {
    label: "Hot Futures",
    slot: "futures" as const,
  },
  {
    label: "Newly added",
    slot: "new" as const,
  },
] satisfies TabsItem[]

const value = ref("")
const { isLoading, headerCoins } = useCoinDisplayData(5)
</script>
