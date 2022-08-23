import React, { useState } from "react";
import { Global, css } from "@emotion/react";
import "react-widgets/scss/styles.scss";

import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

const App: React.FC = () => {
	//const imageRef = useRef();
	const [capImage, setCapImage] = useState<string>('');

	const global = css`
		body {
			margin: 0;
			padding: 0;
		}
	`
	const root = css`
		max-width: 800px;
		margin: 1em auto 0;
	`

	return(
		<>
			<div css={root} >
				<Global styles={global} />
				<Capture
					setCapImage={setCapImage}
				/>
				<Ocr
					capImage={capImage}
				/>
				{/* <img src={capImage} alt="" /> */}
			</div>
		</>
	);
};

export default App;