import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Layout({ children }) {
  const lenis = useLenis();

  useEffect(() => { lenis?.scrollTo(0, {offset: 0, immediate: true, duration: 1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))})} , [lenis]);
  return (
    <>
      {children}
    </>
  )
}