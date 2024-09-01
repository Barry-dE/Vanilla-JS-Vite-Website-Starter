import Lenis from "lenis";

class App {
  constructor() {
    this.smoothScroll();
  }

  smoothScroll() {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -15 * t)),
      infinite: false,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

new App();
