import React from "react";
import { css } from "@emotion/react";
import "react-widgets/scss/styles.scss";

import Capture from "./features/capture/Capture";

const App: React.FC = () => {

	const hello = css`
		color: #38a49d;
	`
	return(
		<>
			<div css={hello}>Hello World</div>
			<Capture />
		</>
	);
};

export default App;