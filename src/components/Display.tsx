import React from "react";

type DisplayProps = {
	name: string;
};

const Display: React.FC<DisplayProps> = ({ name }) => {
	return <div>Hello {name}</div>;
};

export default Display;
