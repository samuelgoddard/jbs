
import { gsap } from "gsap"
import { TransitionContext } from "@/context/transition-context"
import { useState, useContext, useRef } from "react"
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect"

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      duration: 1,
    })
  }, [])

  return <div ref={el}>{displayChildren}</div>
}