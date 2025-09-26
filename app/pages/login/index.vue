<template>
  <section class="flex h-screen">
    <div
      class="flex grow 2xl:w-auto md:w-1/2 w-full bg-background-primary dark:bg-dark-backgeound-primary items-center justify-center"
    >
      <OrganismsLoginForm />
    </div>
    <div
      class="grow-0 2xl:w-[898px] relative md:w-1/2 hidden bg-surface-warning relative md:block"
    >
      <img
        src="/images/login-top.svg"
        class="absolute top-0 left-0 z-10"
        alt="Login"
      />
      <img
        src="/images/login.png"
        class="absolute bottom-0 right-0 z-0"
        alt="Login"
      />
    </div>
  </section>
</template>

<script lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<style scoped></style>
