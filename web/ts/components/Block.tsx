import React from "react";
import classnames from "classnames";

export interface Props extends Record<string, unknown> { style?: React.CSSProperties, children?: React.ReactNode, className?: string }
export default function Block({ style, children, className, ...props }: Props): JSX.Element {
	return (
		<div
		  { ...props }
		  style={{ position: "relative", ...style }}
		  className={classnames("block", className)}>{ children }</div>
	);
}
