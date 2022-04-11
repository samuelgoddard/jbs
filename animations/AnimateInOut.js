import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect"
import { TransitionContext } from "@/context/transition-context"

const AnimateInOut = ({
  children,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
}) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set })
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    })

    // outro animation
    timeline.add(
      gsap.to(el.current, {
        ...from,
        delay: delayOut || 0,
        duration: durationOut,
      }),
      0
    )
  }, [])

  return (
    <div className="opacity-0" sx={from} ref={el}>
      {children}
    </div>
  )
}

export default React.memo(AnimateInOut)