import React, { useState, useRef, useCallback } from "react";
import tw, { css } from 'twin.macro'
import { Global } from "@emotion/react";
import "react-widgets/scss/styles.scss";
import Webcam from "react-webcam";

import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

const global = css`
body {
	font-family: "Helvetica Neue",
		Arial,
		"Hiragino Kaku Gothic ProN",
		"Hiragino Sans",
		"BIZ UDPGothic",
		Meiryo,
		sans-serif;
}
margin: 1em auto 0;
`

const App: React.FC = () => {
	//const imageRef = useRef();
	const [capImage, setCapImage] = useState<string>('');
	//const ReadBtnRef:React.MutableRefObject<void> = useRef();

	const webcamRef = useRef<Webcam>(null!);
	const capture = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot(); // imageSrcにBase64形式でpngを格納
			if(imageSrc){
				setCapImage(imageSrc);
			}
		},
		[webcamRef]
);


	return(
		<>
			<Global styles={global} />
			<div  css={[tw`container mx-auto max-w-screen-lg`, css`width: 640px;`]}>
				<Capture 
					setCapImage={setCapImage}
					webcamRef={webcamRef}
					capture={capture}
				/>
				<Ocr
					capImage={capImage}
				/>
				<button css={tw``} onClick={capture}>Read ID</button>
				{/* <img src={capImage} alt="" /> */}
			</div>
		</>
	);
};

export default App;