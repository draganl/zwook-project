<template>
  <div
    class="w-[464px] text-center rounded-lg bg-background-secondary space-y-5 dark:bg-dark-background-secondary dark:border-dark-border-primary border-border-primary border p-6"
  >
    <NuxtLink class="mb-5 inline-block h-7" to="/" id="logo">
      <img src="/images/logo.svg" alt="Logo" class="dark:hidden block" />
      <img src="/images/logo-dark.svg" alt="Logo" class="dark:block hidden" />
    </NuxtLink>
    <div>
      <h3
        class="font-semibold text-lg text-text-primary dark:text-dark-text-primary mb-1"
      >
        Welcome Back
      </h3>
      <p
        class="font-medium text-sm text-text-primaryPlaceholder mb-5 dark:text-dark-primaryPlaceholder"
      >
        Don’t have an account yet?
        <NuxtLink
          to="#"
          class="font-medium text-text-primary dark:text-dark-primary hover:underline"
        >
          Sign Up</NuxtLink
        >
      </p>
    </div>
    <form>
      <UiInput
        class="mb-3"
        type="email"
        icon="email"
        placeholder="Email Address"
      />
      <UiInput
        class="mb-5"
        type="password"
        icon="lock-2"
        placeholder="Password"
      />
      <UiButton
        type="submit"
        variant="filled"
        color="warning"
        size="lg"
        class="w-full"
        >Login</UiButton
      >
    </form>
    <div class="flex justify-between items-center">
      <div
        class="h-px grow bg-border-primary dark:bg-dark-border-primary"
      ></div>
      <div
        class="font-medium mx-5 text-sm text-text-primaryPlaceholder dark:text-dark-primaryPlaceholder"
      >
        or
      </div>
      <div
        class="h-px grow bg-border-primary dark:bg-dark-border-primary"
      ></div>
    </div>
    <UiButton
      type="submit"
      variant="outline"
      color="neutral"
      size="lg"
      class="w-full h-11"
      iconLeft="computer-logo-google-media-google-social"
      >Authorize with Google</UiButton
    >
  </div>
</template>
