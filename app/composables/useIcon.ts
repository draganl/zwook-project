import { defineAsyncComponent, type AsyncComponent } from 'vue';

const iconCache = new Map<string, AsyncComponent>();

export function useIcon(name: string) {
  if (!iconCache.has(name)) {
    const icon = defineAsyncComponent(() =>
      import(`~/assets/icons/${name}.svg?component`)
    );
    iconCache.set(name, icon);
  }
  return iconCache.get(name);
}
