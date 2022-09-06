import React, { useState } from "react";
import tw, { css } from 'twin.macro'
import { Global } from "@emotion/react";
import "react-widgets/scss/styles.scss";

import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

const App: React.FC = () => {
	//const imageRef = useRef();
	const [capImage, setCapImage] = useState<string>('');

	const global = css`
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
		margin: 1em auto 0;
	`

	return(
		<>
			<Global styles={global} />
			<div>
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