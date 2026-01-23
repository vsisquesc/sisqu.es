type Repo = {
  order: number;
  name: string;
  href: string;
  description: string;
  technologies: Array<string>;
};

type Social = {
  order: number;
  name: string;
  href: string;
  iconName: string;
};

type IFrameWindow = {
  // bar
  title: string;
  minimized: boolean;
  fullscreen: boolean;
  // size and pos
  posX: number;
  posY: number;
  width: number;
  height: number;
  scrollPos: number;
  // content
  href: string;
};

type WindowAction = 'globe' | 'minimize' | 'fullscreen' | 'close';
