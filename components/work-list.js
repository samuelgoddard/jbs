import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from '@/components/image'
import FilterButton from '@/components/filter-button'

export default function WorkListSection({ work }) {
  const { scroll } = useLocomotiveScroll()
  const [current, setCurrent] = useState(0);
  const [currentCat, setCurrentCat] = useState('all');
  const [currentType, setCurrentType] = useState('all');

  function filterScrollUpdate() {
    scroll.update()
    scroll.scrollTo(0, { duration: 0, disableLerp: true })
  }

  function resetFilters() {
    setCurrentCat('all')
    setCurrentType('all')
    filterScrollUpdate()
  }

  function updateCat(cat) {
    if (currentCat !== cat) {
      setCurrentCat(cat)
    } else {
      setCurrentCat('all')
    }
    filterScrollUpdate()
  }
  
  
  function updateType(type) {
    if (currentType !== type) {
      setCurrentType(type)
    } else {
      setCurrentType('all')
    }
    filterScrollUpdate()
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        setCurrent(e)
      });
    }
  }, [scroll])

  return (
    <div className="grid grid-cols-9">
      <div className="fixed top-0 left-0 right-0 bg-white p-3 z-30" data-scroll data-scroll-sticky data-scroll-target="#sticky">
        <div className="w-[65.17vw] flex space-x-6 items-center">
          <div className="w-8/12 flex space-x-[2vw]">
            <FilterButton label={'all'} onClick={resetFilters} current={currentCat} />
            <FilterButton label={'drinks'} onClick={() => updateCat('drinks')} current={currentCat} />
            <FilterButton label={'food'} onClick={() => updateCat('food')} current={currentCat} />
            <FilterButton label={'lifestyle'} onClick={() => updateCat('lifestyle')} current={currentCat} />
          </div>
          <div className="w-4/12 justify-end flex space-x-[2vw]">
            <FilterButton label={'still'} onClick={() => updateType('still')} current={currentType} />
            <FilterButton label={'moving'} onClick={() => updateType('moving')} current={currentType} />
          </div>
        </div>
      </div>

      <div className="col-span-9 pt-24 md:pt-32 xl:pt-40 pb-[90px]">
        {[...Array(5)].map((index) => ( 
          <div key={index} className="list-child">
            {work.map((e, i) => {
              return (e.category == currentCat || currentCat == 'all') & (e.type == currentType || currentType == 'all') ? (
                <li className={`block`} key={i}>
                  <Link href={`/work/${e.slug.current}`}>
                    <a className="flex items-center p-3 py-2 md:p-3 text-[12px] lg:text-[14px]">
                      <span className="block w-16 relative overflow-hidden py-[15px] mr-3">
                        { e.teaserImageThumbnail && (
                          <Image
                            image={e.teaserImageThumbnail}
                            className="w-full h-full object-center object-cover"
                            layout="fill"
                            widthOverride={150}
                            alt={e.title}
                          />
                        )}
                      </span>
                      <span className="hidden md:block w-1/6">JBS.{(i + 1) < 10 && ('0')}{i + 1}</span>
                      <span className="block flex-1">{e.title}</span>
                      <span className="hidden md:block w-1/4">{e.campaignTitle}</span>
                      <span className="hidden md:block w-1/5">{e.location}</span>
                      <span className="block ml-auto text-right">2021—</span>
                    </a>
                  </Link>
                </li>
              ) : (
                null
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}