import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Card, CardTitle, Col } from "photoncss/lib/react";

export interface Props {
	title: string;
	value?: number;
	subtitle?: string;
	color?: string;
	properties: Array<[string, string | number] | null>;
}

export default function Performance({ title, color, properties, value, subtitle }: Props): JSX.Element {
	return (
		<Card style={ { padding: 0, marginBottom: 16 } }>
			<CardTitle subtitle={ subtitle } style={ { minHeight: 64 } }>
				{ title }
				{ value !== undefined && !isNaN(value) && <div style={ { height: 64, width: 64, margin: -8, float: "right" } } className={ `prog-${color}` }>
					<CircularProgressbar value={ value } maxValue={ 1 } text={ `${Math.ceil(value * 100)}%` } />
				</div> }
			</CardTitle>
			<div style={ { margin: 16, fontFamily: "Roboto Condensed" } }>
				{ properties.map(a => a === null ? <hr style={ { margin: "16px -16px", width: "calc(100% + 32px)" } }/> : <div><b>{ a[0] }</b><span style={ { float: "right" } }>{ a[1].toString() }</span></div>) }
			</div>
		</Card>
	);
}
