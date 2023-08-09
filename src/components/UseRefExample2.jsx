import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
	const [name, setName] = useState("");
	const renders = useRef(1);
	const prevName = useRef();

	useEffect(() => {
		renders.current = renders.current + 1;
		prevName.current = name;
	}, [name]);

	return (
		<div>
			<h1>Renders: {renders.current}</h1>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				className="form-control mb-3"
			></input>
			<p>Previous Name State: {prevName.current}</p>
		</div>
	);
}

export default UseRefExample2;
