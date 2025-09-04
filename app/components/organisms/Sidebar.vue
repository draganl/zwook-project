<template>
  <aside class="p-6 relative h-screen pb-64">
    <NuxtLink class="mb-6 block" to="/" id="logo">
      <img src="/images/logo.svg" alt="Logo" class="dark:hidden block" />
      <img src="/images/logo-dark.svg" alt="Logo" class="dark:block hidden" />
    </NuxtLink>
    <MoleculesNavigation />
    <MoleculesUpdateCard />
  </aside>
</template>
