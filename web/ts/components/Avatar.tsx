import app from "../app";
import React, { useState } from "react";

export default function Avatar(): JSX.Element {

	// Initialize state
	const [ state, setState ] = useState(0);

	// Show image depending on state
	if (state === 0) return (
		<img
		  src={ app.static("bitmoji/bitmoji-medres.png") }
		  style={{
			  maxWidth: 192,
			  margin: "0 auto",
			  borderRadius: "50%",
			  background: "#151515"
		  }}
		  alt=""
		  onMouseEnter={ () => setState(1) }/>
	);

	return (
		<img
	  	  src={ app.static("bitmoji/snapcode.png") }
		  style={{
			  maxWidth: 192,
			  margin: "0 auto"
		  }}
		  alt=""
		  onMouseLeave={ () => setState(0) }/>
	  );

}
