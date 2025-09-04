<template>
  <div
    class="p-4 m-6 text-text-primaryPlaceholder dark:text-dark-text-primaryPlaceholder border border-primary dark:border-border-primary absolute inset-x-0 bottom-0 rounded-2xl"
  >
    <h6
      class="mb-5 font-medium text-text-md text-text-primary dark:text-dark-text-primary flex items-center"
    >
      <span
        class="h-10 w-10 mr-3 block rounded-full bg-surface-warning/10 dark:bg-dark-surface-warning/10 p-3"
      >
        <ui-icon
          name="star"
          class="mr-3"
          color=" text-text-warning dark:text-dark-warning"
        ></ui-icon>
      </span>
      Update Premium
    </h6>
    <p
      class="mb-5 dark:text-dark-primary-placeholder text-primaryPlaceholder text-sm"
    >
      Your Premium account is coming to an end. Please update your credit card
      information.
    </p>
    <uiProgressBar class="mb-5" />
    <div class="flex">
      <NuxtLink
        to="#"
        class="block py-2 text-sm mr-3 text-text-primary rounded-md bg-none hover:bg-text-secondary dark:hover:bg-dark-text-secondary transition easy-out duration-300"
        >Dismiss</NuxtLink
      >
      <NuxtLink to="#" class="block py-2 text-sm mr-3 text-surface-warning"
        >Upgrade Plan</NuxtLink
      >
    </div>
  </div>
</template>
