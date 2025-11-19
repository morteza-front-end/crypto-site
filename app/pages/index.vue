<template>
  <div class="md:w-320.75 md:mx-auto px-4 md:px-0">
    <UiHeader />
    <MainIntro />
    <MainLiveMarkets />
    <MainTools />
    <MainDownload />
    <MainTrust />
    <MainFeedbackUsers />
  </div>
  <div class="bg-[#F3F3F4] text-center mt-8 md:mt-24 py-4 md:py-6">
    <h4 class="md:text-[2rem] font-bold mb-2 ">
      Start Earning Today
    </h4>
    <UButton size="lg">
      <span class="py-1 font-semibold text-[#131415] px-4">
        Sign Up
      </span>
    </UButton>
  </div>
  <div class="md:w-320.75 md:mx-auto px-4 md:px-0">
    <section class="">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-3">
          <MainInfoBlock :title="title" :summary="summary" :expandedText="expandedText" />

          <MainFAQList />
        </div>

      </div>
    </section>
    <UiFooter />
  </div>
</template>

<script lang="ts" setup>

const title = 'What is Bitcoin?'
const summary = `Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto. Bitcoin continues to be the top cryptocurrency by market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024.`
const expandedText = `What is Bitcoin (BTC)?
Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin continues to be the top cryptocurrency by market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024. Bitcoin continues to be the top cryptocurrency by market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024.`

</script>
