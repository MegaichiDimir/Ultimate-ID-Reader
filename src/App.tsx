import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
import "react-widgets/scss/styles.scss";

import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

const App: React.FC = () => {
	//const imageRef = useRef();
	const [capImage, setCapImage] = useState<string>('');

	const hello = css`
		color: #38a49d;
	`
	return(
		<>
			<div css={hello}>Hello World</div>
			<Capture
				setCapImage={setCapImage}
			/>
			<Ocr
				capImage={capImage}
			/>
			<img src={capImage} alt="" />
		</>
	);
};

export default App;