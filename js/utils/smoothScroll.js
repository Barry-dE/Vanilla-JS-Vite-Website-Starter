import { gsap } from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default class SmoothScroll {
  constructor() {
    this.lenis = new Lenis();
    this.Init();
  }

  Init() {
    this.lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}
