export default function HashGridAnimated() {

  return (
    <div className="mx-auto grid grid-cols-9 grid-rows-3 h-full items-end py-12 md:pt-[10vw] text-xs md:text-base">
      <div className="mx-auto col-span-1 row-span-1 col-start-2">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-3">+</div>
      <div className="mx-auto col-span-1 row-span-1">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-8">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-9">+</div>
      <div className="mx-auto col-span-1 row-start-2 row-span-1">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-3">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-5">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-7">+</div>
      <div className="mx-auto col-span-1 row-span-1 row-start-3 col-start-2">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-5">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-6">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-8">+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-9">+</div>

      <div className={`absolute inset-0 w-full h-full flex items-center justify-center`}>
        <div className={`w-[25vw] h-[25vw] md:w-[12vw] md:h-[12vw] rounded-full mt-[-10vw] mr-[-40vw] md:mr-[-23vw]`}>
          <img src="/images/badge.webp" alt="JBS Logo Badge" className="w-full" />
        </div>
      </div>
    </div>
  )
}