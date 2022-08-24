import { useEffect, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ProgressBar() {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.progress-bar__progress')

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        progressBar.style.width = `${progress}%`
      })
    }
  }, [scroll])

  return(
    <div className="hidden md:block md:w-[65.2vw] xl:w-[65.55vw] bg-black bg-opacity-[0] h-[1px] progress-bar z-[1000] overflow-hidden fixed top-0 left-0 mt-[30px] xl:mt-[30px] ml-3" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
      <div className="progress-bar__progress absolute bottom-0 left-0 top-0 h-full w-[0px] bg-black bg-opacity-100"></div>
    </div>
  )
}