export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fadeDelay = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '-100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-100%',
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay = {
	initial: { y: '-100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, delay: 0, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-100%',
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelayBottom = {
	initial: { y: '-100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, delay: 0, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-100%',
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelayTop = {
	initial: { y: '-100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, delay: 0, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-100%',
		transition: { duration: 0.8, delay: 0, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scaleDelay = {
	initial: { scale: 1.125 },
  enter: { 
    scale: 1,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1.125,
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}