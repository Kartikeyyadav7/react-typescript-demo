import React, { ReactElement } from "react";

interface Props {
	style: React.CSSProperties;
}

function Style({ style }: Props): ReactElement {
	return <div style={style}>Hello</div>;
}

export default Style;
