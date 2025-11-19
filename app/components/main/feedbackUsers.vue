<template>
  <div>
    <h3 class="text-2xl md:text-[2rem] font-bold text-[#1A1D1E] mt-8 md:mt-24 text-center">
      What do users tell about us?
    </h3>

    <div class="md:hidden mt-4">
      <UCarousel :items="comments" dots :ui="{
        container: 'h-[10rem]',
        dots: 'bottom-0',
        dot: 'w-4 h-1',
        item: 'w-full flex-shrink-0 px-2'
      }" class="rounded-xl overflow-hidden md:hidden" indicators>
        <template #default="{ item }">
          <div class=" bg-[#F9FAFB] rounded-2xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="custom:user" />
              <span class="text-sm text-[#131415] font-medium">
                Tony Marshal
              </span>
            </div>

            <p class="text-[#798084] font-normal">
              {{ item.description }}
            </p>
          </div>
        </template>
      </UCarousel>
    </div>
    <div class="hidden md:flex items-center justify-between w-full mt-8 gap-5">
      <div class="bg-[#F9FAFB] rounded-2xl p-4" v-for="comment in comments">
        <div class="flex items-center gap-2 mb-2">
          <UIcon name="custom:user" />
          <span class="text-sm text-[#131415] font-medium">
            Tony Marshal
          </span>
        </div>
        <p class="text-[#575C5E] font-normal">
          {{ comment.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const comments = [
  {
    description: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  },
  {
    description: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  },
  {
    description: 'Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.'
  }
]
</script>

<style></style>