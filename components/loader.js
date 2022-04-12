import { m } from "framer-motion";

const loading = {
	initial: { y: 0 },
  enter: { 
    y: '-100%',
    transition: { duration: 0.5, delay: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: 0,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
	}
}

export default function Loader() {
  return (
    <m.div variants={ loading } className="fixed inset-0 w-full h-full bg-[#E96447] z-[1000]">
    </m.div>
  )
}