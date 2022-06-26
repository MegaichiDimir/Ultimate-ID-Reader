import React from "react";
import { css } from "@emotion/react";
import "react-widgets/scss/styles.scss";

import Capture from "./features/capture/Capture";
import VideoList from "./features/capture/VideoList";

const App = () => {

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