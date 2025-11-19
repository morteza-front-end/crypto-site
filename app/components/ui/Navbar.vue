<template>
  <header
    class="flex justify-end md:justify-between items-center px-4 md:px-8 py-2.5 md:py-4"
  >
    <ui-menu />
    <section class="flex items-center gap-x-4 md:gap-[17px]">
      <UButton class="bg-primary dark:text-white text-[#131415]"
        >Sign Up</UButton
      >
      <UButton class="bg-secondary dark:text-white text-[#131415]"
        >Log In</UButton
      >
      <UIcon name="custom:download" class="hidden md:block w-5 h-5" />
      <UColorModeButton class="hidden md:flex p-0" />
      <UIcon name="custom:language" class="hidden md:block w-5 h-5" />

      <UIcon name="custom:buger-menu" class="w-6 h-6 md:hidden" />
    </section>
  </header>
</template>
