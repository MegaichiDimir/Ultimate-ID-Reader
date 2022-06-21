import React from "react";
import { css } from "@emotion/react";

const App = () => {

	const hello = css`
		color: #38a49d;
	`
	return(
		<>
			<div css={hello}>Hello World</div>
		</>
	);
};

export default App;