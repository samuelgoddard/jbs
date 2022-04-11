import React, { useRef, useContext } from "react"
import AnimateInOut from "@/animations/AnimateInOut"

const FadeInOut = ({ children, delay, x, y, durationIn, durationOut }) => (
  <AnimateInOut
    durationIn={durationIn || 0.75}
    durationOut={durationOut || 0.75}
    delay={delay}
    from={{
      opacity: 0,
      duration: 0.75,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      duration: 0.75,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FadeInOut