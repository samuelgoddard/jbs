import { useRef, useState } from 'react'
import WorkCarousel from '@/components/work-carousel'
import WorkListSection from '@/components/work-list'
import FilterButton from '@/components/filter-button'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { reveal } from '@/helpers/transitions'
import { m } from 'framer-motion'

export default function WorkViewSwitcher({ work }) {
  const { scroll } = useLocomotiveScroll()
  const [currentView, setCurrentView] = useState('grid')
  const [currentCat, setCurrentCat] = useState('all');
  const [currentType, setCurrentType] = useState('all');
  const containerRef = useRef(null)

  const updateCurrentView = (value) => {
    setCurrentView(value)
    scroll.update();
    scroll.scrollTo(0, { duration: 0, disableLerp: true })
  } 

  const filterScrollUpdate = () => {
    scroll.update()
    scroll.scrollTo(0, { duration: 0, disableLerp: true })
  }

  const resetFilters = () => {
    setCurrentCat('all')
    setCurrentType('all')
    filterScrollUpdate()
  }

  const updateCat = (cat) => {
    if (currentCat !== cat) {
      setCurrentCat(cat)
    } else {
      setCurrentCat('all')
    }
    filterScrollUpdate()
  }
  
  
  const updateType = (type) => {
    if (currentType !== type) {
      setCurrentType(type)
    } else {
      setCurrentType('all')
    }
    filterScrollUpdate()
  }

  return (
    <>
      <div className="w-full pb-3 fixed top-0 left-0 right-0 z-[90] bg-white p-3">
        <div className="w-[80vw] md:w-[64.4vw] flex space-x-6 items-center">
          <div className="w-full md:w-8/12 flex space-x-[2vw]">
            <FilterButton label={'all'} onClick={resetFilters} current={currentCat} />
            <FilterButton label={'drinks'} onClick={() => updateCat('drinks')} current={currentCat} />
            <FilterButton label={'food'} onClick={() => updateCat('food')} current={currentCat} />
            <FilterButton label={'lifestyle'} onClick={() => updateCat('lifestyle')} current={currentCat} />
          </div>
          <div className="w-4/12 justify-end space-x-[2vw] hidden md:flex">
            <FilterButton label={'still'} onClick={() => updateType('still')} current={currentType} />
            <FilterButton label={'moving'} onClick={() => updateType('moving')} current={currentType} />
          </div>
        </div>
      </div>

      <div data-scroll-container ref={containerRef} id="scroll-container">
        <div data-scroll-section>
          { currentView == 'grid' ? (
            <WorkCarousel work={work} currentCat={currentCat} currentType={currentType} />
          ) : (
            <WorkListSection work={work} currentCat={currentCat} currentType={currentType} />
          )}
        </div>
      </div>

      <div className="fixed md:bottom-0 md:right-0 left-[50%] md:left-auto ml-[-50px] md:ml-0 p-3 pb-[10px] z-50 justify-center">
        <nav>
          <ul className="text-right flex space-x-2 md:block md:space-x-0">
            <li className="block">
              <button
                className={`text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase overflow-hidden group ${currentView == 'list' && 'text-[#D3D3D3]' }`}
                onClick={() => updateCurrentView('grid')}
              >
                <m.span className="block relative overflow-hidden" variants={reveal}>
                  <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Grid</span>
                  <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0">Grid</span>
                </m.span>
              </button>
            </li>
            <li className="block">
              <button
                className={`text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase overflow-hidden group ${currentView == 'grid' && 'text-[#D3D3D3]' }`}
                onClick={() => updateCurrentView('list')}
              >
                <m.span className="block relative overflow-hidden" variants={reveal}>
                  <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">List</span>
                  <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0">List</span>
                </m.span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}