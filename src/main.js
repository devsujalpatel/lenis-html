import Lenis from "lenis"

const lenis = new Lenis({
  autoRaf: true,
})

lenis.on("scroll", ({ scroll }) => {
  console.log(scroll)
})