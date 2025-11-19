<template>
  <footer class="hidden md:block mt-20">
    <div class="grid grid-cols-6 gap-6 p-10 text-sm text-[#000000]">
      <div>
        <h3 class="font-semibold mb-3">About us</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>About</li>
          <li>Blog</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Downloads</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Products</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>Buy Crypto</li>
          <li>Spot Trading</li>
          <li>Futures Trading</li>
          <li>Crypto Lending</li>
          <li>Converter</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Services</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>Help center</li>
          <li>Submit ticket</li>
          <li>Technical support</li>
          <li>Fees</li>
          <li>Verification</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Crypto Prices</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>Bitcoin price</li>
          <li>Ethereum price</li>
          <li>Cardano price</li>
          <li>Dogecoin price</li>
          <li>Solana price</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Buy Crypto</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>Buy Bitcoin</li>
          <li>Buy Ethereum</li>
          <li>Buy Cardano</li>
          <li>Buy XRP</li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Learn</h3>
        <ul class="space-y-2 font-medium text-sm">
          <li>What is the crypto exchange?</li>
          <li>How to buy crypto?</li>
        </ul>
      </div>

    </div>

    <div class="max-w-7xl mx-auto py-10 px-10 flex justify-between gap-10">


      <div class="text-sm text-black font-normal max-w-xl leading-6">
        Buy and trade top cryptocurrencies like Bitcoin and Ethereum on OKEX – a globally trusted crypto exchange with
        over 2M users. Enjoy low trading fees, 24/7 expert support, and exclusive bonuses for new and active users.
      </div>


      <div class="flex flex-col items-end gap-4">
        <div class="flex items-center gap-7">
          <div class="flex flex-col items-end gap-5.5">
            <div class="flex  items-center gap-1 mt-5">
              <span class="text-sm text-[#131415] font-semibold">Theme</span>
              <UColorModeSwitch class="" :ui="{ base: ' rounded', thumb: ' rounded' }" />
            </div>

            <div class="text-sm text-black flex items-center gap-1">
              <UIcon name="custom:language" />
              English
            </div>
          </div>

          <div class="text-center">
            <span class="text-xs text-[#131415] block">Scan to Download</span>
            <img src="~/assets/images/footer-qr.png" class="w-19.5 h-19.5 ml-auto mr-0 mt-0.5" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center text-xs text-gray-400 border-t border-[#E8E9E9] pt-5 mb-16">
      <div class="flex items-center gap-3">
        <UIcon name="custom:twitter" class="w-5 h-5" />
        <UIcon name="custom:instagram" class="w-5 h-5" />
        <UIcon name="custom:telegram" class="w-5 h-5" />
        <UIcon name="custom:youtube" class="w-5 h-5" />
      </div>
      <div class="flex items-center gap-4">
        <span>Cookie Policy</span>
        <span>Privacy Policy</span>
        <span>User Agreement</span>
      </div>
    </div>
  </footer>




  <footer class="md:hidden p-4">
    <UAccordion color="neutral" variant="ghost" multiple :items="[
      { label: 'About us', slot: 'about' },
      { label: 'Products', slot: 'products' },
      { label: 'Services', slot: 'services' },
      { label: 'Crypto Prices', slot: 'prices' },
      { label: 'Buy Crypto', slot: 'buy' },
      { label: 'Learn', slot: 'learn' },
    ]" :ui="{ item: 'border-b-0' }">
      <template #about>
        <ul class="space-y-2 py-3">
          <li>About</li>
          <li>Blog</li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Downloads</li>
        </ul>
      </template>

      <template #products>
        <ul class="space-y-2 py-3">
          <li>Buy Crypto</li>
          <li>Spot Trading</li>
          <li>Futures</li>
          <li>Converter</li>
        </ul>
      </template>

      <template #services>
        <ul class="space-y-2 py-3">
          <li>Help center</li>
          <li>Submit ticket</li>
          <li>Support</li>
        </ul>
      </template>

      <template #prices>
        <ul class="space-y-2 py-3">
          <li>Bitcoin price</li>
          <li>Ethereum</li>
          <li>Cardano</li>
          <li>Solana</li>
        </ul>
      </template>

      <template #buy>
        <ul class="space-y-2 py-3">
          <li>Buy Bitcoin</li>
          <li>Buy Ethereum</li>
          <li>Buy Dogecoin</li>
        </ul>
      </template>

      <template #learn>
        <ul class="space-y-2 py-3">
          <li>What is the crypto exchange?</li>
          <li>How to buy crypto?</li>
        </ul>
      </template>
    </UAccordion>
    <div class="flex items-start justify-between">
      <div class="flex flex-col gap-y-10.5 justify-between">
        <div class="flex items-center gap-1 mt-5">
          <span class="text-sm text-[#131415] font-semibold">Theme</span>
          <UColorModeSwitch class="border-gray-300" :ui="{ base: ' rounded', thumb: ' rounded' }" />
        </div>
        <div>
          <div class="flex items-center justify-between gap-x-6">
            <div class="flex items-center gap-3">
              <UIcon name="custom:twitter" class="w-5 h-5" />
              <UIcon name="custom:instagram" class="w-5 h-5" />
              <UIcon name="custom:telegram" class="w-5 h-5" />
              <UIcon name="custom:youtube" class="w-5 h-5" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 flex items-center justify-center gap-1">
                <UIcon name="custom:language" />
                English
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 items-center">
        <div>
          <span class="text-xs text-black font-normal block mb-1">Scan to Download</span>
          <img src="~/assets/images/footer-qr.png" class="w-20 h-20 mr-0 ml-auto" />
        </div>
      </div>
    </div>
    <div class="mt-6 text-sm text-black leading-6">
      Buy and trade top cryptocurrencies like Bitcoin and Ethereum on OKEX – a globally trusted crypto exchange with
      over 2M
      users. Enjoy low trading fees, 24/7 expert support, and exclusive trading bonuses for new and active users.
    </div>

    <div class="flex flex-wrap justify-center gap-4 text-xs border-t border-[#E8E9E9] text-[#90999E] mt-6 pt-2.5">
      <span>Cookie Policy</span>
      <span>Privacy Policy</span>
      <span>User Agreement</span>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue'
const theme = ref(false)
</script>
