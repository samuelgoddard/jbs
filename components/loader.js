import { m } from "framer-motion";

const loading = {
	initial: { y: 0 },
  enter: { 
    y: '100%',
    transition: { duration: 0.66, delay: 1.1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: 0,
		transition: { duration: 0.66, ease: [0.83, 0, 0.17, 1] }
	}
}

export default function Loader() {
  return (
    <m.div variants={ loading } className="fixed inset-0 w-full h-full bg-[#FFB371] z-[1000] flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 h-full flex items-center justify-center">
        <div className="relative p-2">
          <div className="bg-[#FFB371] absolute top-0 left-0 right-0 w-full h-2 z-30"></div>
          <div className="relative overflow-hidden">
            <div className="w-[11vw] h-[7.2vw] bg-black bg-opacity-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-black z-10 w-full h-full swipe-up translate-y-full"></div>
            </div>
            <div className="absolute top-0 left-0 w-[3vw] h-[3.6vw] bg-[#FFB371] z-20"></div>
          </div>
        </div>
      </div>
    </m.div>
  )
}