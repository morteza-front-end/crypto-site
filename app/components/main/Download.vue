<template>
    <h3 class="text-2xl md:text-[2rem] text-center font-bold mt-8 md:mt-24 p-2 md:p-0">
         Download Our Secure Crypto Trading App
    </h3>
    <p class="text-[#575C5E] font-normal hidden md:block text-center">
        Download US Application then Trade Anywhere
    </p>
    <p class="text-[#575C5E] font-normal md:hidden text-center">
        Trade Bitcoin & Altcoin
    </p>
    <div class="flex flex-col md:flex-row items-center justify-between md:w-203.25 md:mx-auto mt-4 md:mt-8">
        <div class="flex items-center justify-between">
            <img src="~/assets/images/download.png" alt="download" class="mt-4 mx-auto md:hidden" />
            <img src="~/assets/images/app-download.png" alt="download" class="mt-4 hidden md:block" />
        </div>
        <div class="w-full md:w-max">
            <p class="text-sm font-normal text-[#34373A] md:hidden mt-4.5 mb-4 text-center">
                Scan to Download App iOS and Android
            </p>
            <div class="hidden md:block mb-4">
                <p class="text-right uppercase">Scan to Download</p>
                <p class="uppercase text-right">App <b> iOS and Android </b></p>
            </div>

            <img src="~/assets/images/qr-code.png" alt="qr-code" class="mx-auto md:mr-0 md:ml-auto" />

            <div class="flex items-center gap-4 md:flex-col md:gap-y-6 mt-6 w-full md:w-54">
                <UButton class="bg-[#F3F3F4] w-1/2 md:w-full flex items-center justify-center" size="xl">
                    <UIcon name="custom:android" class="md:w-5 md:h-5" />
                    <span class="text-[#131415] text-sm md:text-base font-semibold py-1">
                        Google Play
                    </span>
                </UButton>
                <UButton class="bg-[#F3F3F4] w-1/2 md:w-full flex items-center justify-center" size="xl">
                    <UIcon name="custom:ios" class="md:w-5 md:h-5" />
                    <span class="text-[#131415] text-sm md:text-base font-semibold py-1">
                        App store
                    </span>
                </UButton>
            </div>
        </div>
    </div>
</template>
