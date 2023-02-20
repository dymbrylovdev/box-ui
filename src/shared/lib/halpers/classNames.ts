type Mods = Record<string, boolean | string>;

export const ClassNames = (className: string, mods: Mods = {}, additional: string[] = []) => [
	className,
	...Object.entries(mods)
		.filter(([className, value]) => Boolean(value))
		.map(([className, value]) => className),
	...additional,
].join(' ');
