export const containerVariants = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
	hidden: { opacity: 0 },
}

// Individual item animation (fading in and sliding up)
export const item = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, y: 100,},
}

export const variantsSoloElement = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, y: 80 },
}