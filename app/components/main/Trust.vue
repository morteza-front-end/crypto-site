<template>
  <div>
    <h3 class="text-2xl md:text-[2rem] font-bold text-[#1A1D1E] mt-8 md:mt-24 text-center">
      Why Millions Trust US?
    </h3>

    <div class="md:hidden mt-4">
      <UCarousel :items="reasons" dots :ui="{
        container: 'h-[10rem]',
        dots: 'bottom-0',
        dot: 'w-4 h-1',
        item: 'w-full flex-shrink-0 px-2'
      }" class="rounded-xl overflow-hidden md:hidden" indicators>
        <template #default="{ item }">
          <div class="text-center">
            <UIcon :name="`custom:${item.icon}`" class="w-10 h-10 mb-4" />
            <h6 class="text-xl font-semibold text-[#353535]">
              {{ item.title }}
            </h6>
            <p class="text-[#575C5E] font-normal">
              {{ item.description }}
            </p>
          </div>
        </template>
      </UCarousel>
    </div>
    <div class="hidden md:flex items-center justify-between w-full mt-8">
      <div class="text-center" v-for="reason in reasons">
        <UIcon :name="`custom:${reason.icon}`" class="w-10 h-10 mb-4" />
        <h6 class="text-xl font-semibold text-[#353535]">
          {{ reason.title }}
        </h6>
        <p class="text-[#575C5E] font-normal">
          {{ reason.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const reasons = [
  {
    title: '6 years with you',
    icon: 'medal',
    description: 'Customer Support in 40 languages'
  },
  {
    title: 'Secure and Stable',
    icon: 'copper-coin',
    description: 'Customer Support in 40 languages'
  },
  {
    title: 'Trade Fast',
    icon: 'devicon-plain',
    description: 'Customer Support in 40 languages'
  },
  {
    title: '24/7',
    icon: 'customer-support',
    description: 'Customer Support in 40 languages'
  },
]
</script>