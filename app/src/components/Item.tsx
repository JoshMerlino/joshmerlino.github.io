export type ItemProps = { src: string }
export default function Item({ src }: ItemProps): JSX.Element {
	return (
		<span className="flex-1">
			<div className="animation-card px-4 -mx-8" style={ { animationDuration: `${5 + Math.floor(Math.random() * 5)}s` } }>
				<div className="bg-white shadow-xl rounded-full h-32 w-32 mx-auto p-4 dark:bg-zinc-700 flex">
					<img src={ src } alt="" className="m-auto" height="64px" width="64px" />
				</div>
			</div>
		</span>
	);
}
