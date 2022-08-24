import { useRef, useState } from 'react'
import WorkCarousel from '@/components/work-carousel'
import WorkListSection from '@/components/work-list'
import FilterButton from '@/components/filter-button'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { reveal } from '@/helpers/transitions'
import { m } from 'framer-motion'
import ProgressBar from './progress-bar'

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
      <div className="w-full pb-3 fixed top-0 left-0 right-0 p-3 z-[10000]">
        <div className="w-[80vw] md:w-[65.5vw] flex space-x-6 items-center">
          <div className="w-full md:w-8/12 flex space-x-[2vw]">
            {/* <FilterButton label={'all'} onClick={resetFilters} current={currentCat} />
            <FilterButton label={'drinks'} onClick={() => updateCat('drinks')} current={currentCat} />
            <FilterButton label={'food'} onClick={() => updateCat('food')} current={currentCat} />
            <FilterButton label={'lifestyle'} onClick={() => updateCat('lifestyle')} current={currentCat} /> */}
          </div>
          <div className="w-5/12 justify-end space-x-[2vw] hidden md:flex">
            {/* <FilterButton label={'all'} onClick={() => updateType('all')} current={currentType} />
            <FilterButton label={'still'} onClick={() => updateType('still')} current={currentType} />
            <FilterButton label={'moving'} onClick={() => updateType('moving')} current={currentType} /> */}


            <div className="justify-center flex bg-white">
              <nav className="bg-white relative z-[100000] pl-3">
                <ul className="text-right flex space-x-2 mr-3 xl:mr-0">
                  <li className="block">
                    <button
                      className={`text-3xl xl:text-4xl leading-1 md:leading-1 xl:leading-[1] 2xl:leading-[1] font-sans uppercase overflow-hidden group ${currentView == 'list' && 'text-[#D3D3D3]' }`}
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
                      className={`text-3xl xl:text-4xl leading-1 md:leading-1 xl:leading-[1] 2xl:leading-[1] font-sans uppercase overflow-hidden group ${currentView == 'grid' && 'text-[#D3D3D3]' }`}
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
    </>
  )
}