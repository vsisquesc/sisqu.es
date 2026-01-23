import { defineStore } from 'pinia';

export const WindowManager = defineStore(`windowManager`, () => {
  const queue: globalThis.Ref<Array<IFrameWindow>> = ref([]);

  function push(item: IFrameWindow) {
    queue.value.push(item);
  }

  function pop(): IFrameWindow | undefined {
    const item = queue.value.pop();

    return item;
  }

  function shift(): IFrameWindow | undefined {
    const item = queue.value.shift();

    return item;
  }

  function moveUp(href: string) {
    const index = queue.value.findIndex((x) => x.href === href);
    if (index === -1) return;

    const [item] = queue.value.splice(index, 1);
    queue.value.push(item!);
  }

  function contains(href: string): boolean {
    const index = queue.value.findIndex((x) => x.href === href);
    return index !== -1;
  }
  function isMinimized(href: string): boolean {
    const index = queue.value.findIndex((x) => x.href === href);
    if (index >= 0) {
      return queue.value[index]!.minimized;
    }
    return false;
  }

  function isFirst(href: string): boolean {
    const index = queue.value.findIndex((x) => x.href === href && !x.minimized);
    return index >= 0 && index == queue.value.length - 1;
  }

  function openWindow(input: IFrameWindow) {
    const windowIndex: number = queue.value.findIndex(
      (x) => x.href === input.href,
    );
    if (windowIndex === -1) {
      queue.value.push(input);
    } else {
      if (queue.value[windowIndex]!.minimized) {
        queue.value[windowIndex]!.minimized = false;
      } else {
        if (windowIndex == queue.value.length - 1) {
          queue.value[windowIndex]!.minimized = true;
        } else {
          const [item] = queue.value.splice(windowIndex, 1);
          queue.value.push(item!);
        }
      }
    }
  }
  function hideWindows() {
    queue.value.forEach((e) => (e.minimized = true));
  }
  function showWindows() {
    queue.value.forEach((e) => (e.minimized = false));
  }

  function getZIndex(input: IFrameWindow): number {
    const index = queue.value.findIndex((x) => x.href === input.href);

    return index >= 0 ? index + 1 : index;
  }
  function empty(): boolean {
    return queue.value.length === 0;
  }

  return {
    queue,
    push,
    pop,
    shift,
    moveUp,
    contains,
    openWindow,
    getZIndex,
    hideWindows,
    showWindows,
    empty,
    isMinimized,
    isFirst,
  };
});
