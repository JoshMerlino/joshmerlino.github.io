import React, { ReactNode } from "react";

export type Props = { children: ReactNode, size?: number, height?: number, width?: number };

export default function MarqueeComponent({ children, size = 92, height = 144, width = 256}: Props): JSX.Element {

	const marginTop = Math.random() * (height - (size + 32));
	const marginLeft = width / 2 - size / 2;

	return (
		<div style={ { height, width } }>
			<div style={ { marginTop, marginLeft, fontSize: 0, userSelect: "none" } }>
				{ children }
			</div>
		</div>
	);
}
