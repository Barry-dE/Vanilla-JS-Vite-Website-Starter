import SmoothScroll from "./js/utils/smoothScroll";

class Main {
  constructor() {
    this.Init();
  }

  Init() {
    this.smoothScroll = new SmoothScroll();
  }
}

const app = new Main();
