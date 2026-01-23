export function createWindow(name: string, href: string): IFrameWindow {
  return {
    title: name,
    minimized: false,
    fullscreen: false,
    posX: 25,
    posY: 10,
    width: 50,
    height: 80,
    scrollPos: 0,
    href: href,
  };
}
