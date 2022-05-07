import classnames from "classnames";
import { ReactNode } from "react";
import Chart from "react-apexcharts";
import ProgressCircle from "./ProgressCircle";

export interface PaneProps { children?: ReactNode, active: boolean, onClick: () => void, state: Performance.HardwareSection }

export const options: ApexCharts.ApexOptions = {
	chart: {
		height: 200,
		animations: {
			enabled: false
		},
		toolbar: {
			show: false
		}

	},
	stroke: {
		curve: "smooth"
	},
	xaxis: {
		min: 0,
		labels: {
			show: false
		},
		tickAmount: 1
	},
	yaxis: {
		min: 0,
		max: 100,
		labels: {
			show: false
		}
	},
	tooltip: {
		enabled: false
	}

};

export default function Pane({ children, active = false, state, ...props }: PaneProps): JSX.Element {

	return (
		<div>
			<div className={ classnames("hover:bg-sky-500/10 -ml-[240px] dark:text-white w-[240px] h-20 flex border-y-[1px] z-[5] relative", active ? "bg-white hover:bg-white dark:bg-zinc-700 border-neutral-500/20" : "border-transparent") } onClick={ props.onClick }>
				<ProgressCircle value={ state.usageNow } color={ state.color }/>
				<div className="basis-full">
					<p className="text-xl py-2 px-4">{ state.title }</p>
					<p className="px-4">{ Math.floor(state.usageNow * 100) }%</p>
				</div>
			</div>
			<div className={ classnames("top-0 left-0 right-0 bottom-0 absolute dark:bg-zinc-700 bg-white p-4 flex flex-col border-[1px] border-neutral-500/20 z-[2] -ml-[1px] border-b-0 border-r-0", !active && "hidden") }>
				<div className="flex items-center dark:text-white">
					<h1 className="text-3xl">{ state.title }</h1>
					<h3 className="text-xl grow text-right">{ state.subtitle }</h3>
				</div>
				<div className="my-4">
					<p className="font-[roboto] text-sm text-neutral-700 font-medium dark:text-gray-300">{ state.description }</p>
					<div className="pointer-events-none border-[1px] overflow-hidden" style={ { borderColor: state.color } }>
						<Chart type="line" options={ options } height={ 368 } style={ { marginTop: -30, "marginLeft": "-22px", "marginRight": "-5%", "marginBottom": "-30px"} } series={ [ {
							data: state.usageHistory.map((y, x) => ({ x, y: y * 100 })),
							type: "area",
							color: state.color
						} ] }/>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<div>
						{ state.info.left.map((line, key) => line === null ? <div className="py-2" key={ key }/> : <div className="inline-block" key={ key }>
							<p className="text-gray-700 text-sm font-[roboto] pr-8 dark:text-gray-300 ">{ line.name }</p>
							<p className="text-gray-700 text-lg font-[roboto] pr-8 font-medium dark:text-white">{ line.value_formatted }</p>
						</div>) }
					</div>
					<div>
						<div className="inline-block">{ state.info.right.map((line, key) => <p className="text-gray-700 dark:text-gray-300 text-sm font-[roboto] px-2" key={ key }>{ line.name }</p>) }</div>
						<div className="inline-block">{ state.info.right.map((line, key) => <p className="font-medium text-sm dark:text-white font-[roboto] px-2" key={ key }>{ line.value_formatted }</p>) }</div>
					</div>
				</div>
			</div>
		</div>
	);
}
