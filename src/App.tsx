import React, { useState, useRef, useCallback } from "react";
import tw, { css } from 'twin.macro'
import "react-widgets/scss/styles.scss";
import Webcam from "react-webcam";

import Header from "./components/Header";
import Capture from "./features/capture/Capture";
import Ocr from "./features/ocr/Ocr";

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
			<div  css={[tw`container mx-auto mt-4`, css``]}>
				<Header />
				<div css={tw`mx-auto flex flex-col lg:flex-row flex-wrap gap-4 items-stretch`}>
					<div css={tw`mx-auto flex-1 lg:basis-1/3 w-full`}>
						<Capture 
							setCapImage={setCapImage}
							webcamRef={webcamRef}
							capture={capture}
						/>
					</div>
					<div css={tw`mx-auto flex flex-col items-stretch grow`}>
						<div css={tw`w-full mx-auto max-w-screen-sm flex flex-col items-center`}>
							<Ocr
								capImage={capImage}
							/>
						</div>
						<button css={tw`bg-blue-500 hover:bg-blue-400 text-white text-2xl rounded px-4 py-3 flex-none`} onClick={capture}>
							Read ID
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;