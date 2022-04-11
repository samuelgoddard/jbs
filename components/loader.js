import { useContext, useRef } from "react";
import { TransitionContext } from "@/context/transition-context";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import gsap from "gsap";

const Loader = () => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      opacity: 1,
      duration: 1,
    })

    timeline.add(
      gsap.to(el.current, {
        opacity: 1,
        duration: .5,
      }),
      0
    )
  }, [])

  return (
    <div className="flex flex-col overflow-hidden z-[10000] pointer-events-none fixed inset-0 w-full h-full bg-red-500" ref={el}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <h1 className="">Loading...</h1>
      </div>
    </div>
  );
};
export default Loader;