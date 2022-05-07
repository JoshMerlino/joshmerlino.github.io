export type ProgressCircleProps = { value: number, color: string };

export default function ProgressCircle({ value, color }: ProgressCircleProps): JSX.Element {

	const pct = 360 - 180 * Math.max(0, Math.min(value, 1));

	return (
		<div className="p-2 -mr-2">
			<svg
				id="svg"
				width="64"
				height="64"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				transform="rotate(-90)">
				<circle
					r="28"
					cx="32"
					cy="32"
					fill="transparent"
					strokeWidth={ 4 }
					className="stroke-gray-300 dark:stroke-zinc-600"></circle>
				<circle
					r="28"
					cx="32"
					cy="32"
					fill="transparent"
					strokeWidth={ 4 }
					strokeDashoffset={ pct }
					strokeDasharray="360"
					stroke={ color }></circle>
			</svg>
		</div>
	);
}
