import { useRouter } from 'next/router';
import { useState } from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect';

const Loader = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useIsomorphicLayoutEffect(() => {
    let timer;
    const aniStart = async () => {
      timer = setTimeout(() => {
        setIsActive(true);
        const tl = gsap.timeline();
        tl.to('.cover-strip', {
          yPercent: 100,
          duration: 1.2,
          ease: "power4.inOut",
        });
        tl.to('.text', {
          autoAlpha: 1,
          duration: 0.3,
          delay: -0.4,
          ease: "power4.inOut",
        });
      }, 300);
    };
    const aniEnd = () => {
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to('.text', {
          autoAlpha: 0,
          duration: 0.3,
          delay: 1,
          ease: "power4.inOut",
        });
        tl.to('.cover-strip', {
          yPercent: 200,
          duration: 1.2,
          delay: -0.2,
          ease: "power4.inOut",
        });
        setIsActive(false);
      }

      tl.set('.cover-strip', { yPercent: 0 });
      tl.set('.text', { autoAlpha: 0 });
      clearTimeout(timer);
    };

    router.events.on('routeChangeStart', aniStart);
    router.events.on('routeChangeComplete', aniEnd);
    router.events.on('routeChangeError', aniEnd);

    return () => {
      router.events.off('routeChangeStart', aniStart);
      router.events.off('routeChangeComplete', aniEnd);
      router.events.off('routeChangeError', aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router]);
  return (
    <>
      <div className="flex flex-col overflow-hidden relative z-[10000] pointer-events-none">
        <div className="cover-strip h-screen w-full bg-slate-50 top-0 left-0 right-0 cover fixed flex items-center justify-center z-40">
        </div>

        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <h1 className="text">Loading...</h1>
        </div>
      </div>
    </>
  );
};
export default Loader;