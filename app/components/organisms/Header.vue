<template>
  <header class="flex items-center gap-5 justify-between py-3 px-6">
    <UiInput placeholder="Search anything here" icon="search-1"></UiInput>
    <div
      class="flex justify-between items-center text-text-primary dark:text-dark-text-primary"
    >
      <UiIcon name="graph-neutral" class="h-8 w-8 cursor-pointer p-2" />
      <UiIcon
        name="interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm"
        class="h-8 w-8 cursor-pointer p-2 mr-5"
      />
      <figure class="relative">
        <img
          alt="Avatar"
          src="/images/avatar.jpg"
          class="rounded-full overflow-hidden border border-border-primary"
        />
        <div
          class="absolute bottom-0 right-0 border-surface-primary bg-surface-primary h-3 w-3"
        ></div>
      </figure>
      <div class="ml-2 mr-3">
        <p class="font-semibold text-text-sm">Albert Flores</p>
        <a
          href="mailto:albert@flores.com"
          class="font-medium text-xs text-primary-placeholder dark:text-dark-text-primaryPlaceholder"
          >albert@flores.com</a
        >
      </div>
      <UiIcon
        name="interface-arrows-button-down-arrow-down-keyboard"
        class="cursor-pointer"
      />
    </div>
  </header>
</template>
