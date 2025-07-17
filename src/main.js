import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  infinite: true,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

raf();
