import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import { SmootherContext } from "@/context/smoother-context";
import { useContext } from "react";

export default function scrollRefresh() {
  const smoother = useContext(SmootherContext);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    smoother && smoother.scrollTop();
    smoother && smoother.content("#smooth-content");
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 10);
  }, [smoother]);
}