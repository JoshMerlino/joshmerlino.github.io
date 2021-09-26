import React, { ReactNode } from "react";

export type Props = { children: ReactNode, size?: number, height?: number, width?: number };

export default function({ children, size = 92, height = 144, width = 256}: Props): JSX.Element {

	const marginTop = Math.random() * (height - (size + 16));
	const marginLeft = Math.random() * (width - size);

	return (
		<div style={{ height, width }}>
			<div style={{ marginTop, marginLeft, fontSize: 0, userSelect: "none" }}>
				{ children }
			</div>
		</div>
	);
}
