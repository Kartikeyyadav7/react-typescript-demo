import React, { useRef, useState } from "react";

interface Props {}

const Focus = (props: Props) => {
	const [name, setName] = useState("");
	let inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = () => {
		inputRef.current?.focus();
	};

	return (
		<div>
			<input
				type="text"
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleFocus}>Focus</button>
		</div>
	);
};

export default Focus;
