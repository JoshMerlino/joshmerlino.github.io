export default function Waves(): JSX.Element {
	const stack = Object.keys(import.meta.globEager("../../public/waves/*.svg")).map(a => `/waves${a.substring(a.lastIndexOf("/"))}`);
	const src = stack[Math.floor(stack.length * Math.random())];
	return <img src={ `${src}` } alt="" className="dark:grayscale opacity-20 pointer-events-none select-none cursor-none" />;
}
